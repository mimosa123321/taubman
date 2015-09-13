require('./../../node_modules/es5-shim/es5-shim');
require('./../../node_modules/es5-shim/es5-sham');
// Make bxslider work
global.jQuery = require("jquery-compat");
//$ = require('jquery-compat'),
//BxSlider = require('./../../lib/bxslider/jquery.bxslider'),
var $ = require('jquery-compat'),
    BxSlider = require('./../../lib/bxslider/jquery.bxslider'),
    React = require('React'),
    Model = require('./model/Model'),
    EventProxy = require('./eventProxy/EventProxy'),
    Main = require('./modules/Main'),
    Resize = require('./utils/Resize'),
    Animate = require('./utils/Animate'),
    ViewsManager = require('./view/ViewsManager'),
    skrollr = require('skrollr');

var Application = module.exports = {
    init: function() {
        this.model = new Model();
        this.eventProxy = new EventProxy(this.model);
        this.main = new Main(this.model);
        this.resizeUtil = new Resize(this.model);
        this.animateUtil = new Animate(this.model);
        this.viewsManager = React.render( <ViewsManager model={this.model}/> , document.getElementById('pagesApp'));
        this.homePage = $('#homePage');
        this.pair2 = $('#pair2');
        this.pair3 = $('#pair3');
        this.pair4 = $('#pair4');
        this.pair5 = $('#pair5');
        setTimeout(this.initResize.bind(this),100);
    },

    initResize:function() {
        var self = this;
        self.resizeContent();
        self.model.stage.resize(function() {
            //resize home page
           self.resizeContent();
            self.model.eventProxy.emit("onResizeEvent");
        });
    },

    resizeContent:function() {
        var self = this, height = 0;
        self.manageBg((1920 / 1079),$('#homePage'),$('#homePageBg'));
        self.manageBg((959 / 1076),$('.leftContent'),$('.contentImage'), "v");
        self.manageBg((1920 / 1077),$('#infoContent'),$('#infoBg'));
        self.manageBg((1920 / 1077),$('.panel'),$('.panelBg'));

        var height = self.model.stage.height() - (self.model.stage.height() * 0.15);
        self.homePage.css('height',height);
    },

    manageBg: function(ratio, el, elImg, type) {
        var ratio = ratio;
        var domImg = elImg.find('img');
        var returnObj = this.resizeUtil.resize(el, ratio);
        var rW = returnObj.width;
        var rH = returnObj.height;
        elImg.css('width', rW);
        elImg.css('height', rH);
        domImg.css('width',rW);
        domImg.css('height',rH);
    },

    manageVideos:function() {
        //if press full screen
        if( window.innerHeight == screen.height) {
            $('#topBar').css('display','none');
            $('#middleBar').css('height','100%');
        }else {
            $('#topBar').css('display','block');
            //change back to normal
            $('#middleBar').css('height','85%');
        }
    }
};

$(function() {
    Application.init();
    setTimeout(function(){
        $('#topBar').addClass('show');
        //$('.flowplayer').flowplayer().load();
    },100);

});
