require('./../../node_modules/es5-shim/es5-shim');
require('./../../node_modules/es5-shim/es5-sham');
// Make bxslider work
global.jQuery = require("jquery-compat");

var $ = require('jquery-compat'),
    React = require('React'),
    Model = require('./model/Model'),
    EventProxy = require('./eventProxy/EventProxy'),
    Main = require('./modules/Main'),
    Resize = require('./utils/Resize'),
    Animate = require('./utils/Animate'),
    ViewsManager = require('./view/ViewsManager'),
    BxSlider = require('./../../lib/bxslider/jquery.bxslider'),
    skrollr = require('skrollr');

var Application = module.exports = {
    init: function() {
        this.model = new Model();
        this.eventProxy = new EventProxy(this.model);
        this.main = new Main(this.model);
        this.resizeUtil = new Resize(this.model);
        this.animateUtil = new Animate(this.model);
        this.viewsManager = React.render( <ViewsManager model={this.model}/> , document.getElementById('pagesApp'));
        setTimeout(this.initResize.bind(this),100);
    },

    initResize:function() {
        var self = this;
        self.manageBg((1920 / 1079),$('#homePage'),$('#homePageBg'));
        self.manageBg((959 / 1076),$('.leftContent'),$('.contentImage'), "v");
        self.manageBg((1920 / 1077),$('#infoContent'),$('#infoBg'));

        self.model.stage.resize(function() {
            //resize home page
            self.manageBg((1920 / 1079),$('#homePage'),$('#homePageBg'));
            self.manageBg((959 / 1076),$('.leftContent'),$('.contentImage'), "v");
            self.manageBg((1920 / 1077),$('#infoContent'),$('#infoBg'));
            self.manageVideos();

        });
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
});
