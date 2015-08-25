require('./../../node_modules/es5-shim/es5-shim');
require('./../../node_modules/es5-shim/es5-sham');
var $ = require('jquery-compat'),
    React = require('./../../node_modules/react/lib/React'),
    Model = require('./model/Model'),
    EventProxy = require('./eventProxy/EventProxy'),
    Main = require('./modules/Main'),
    Resize = require('./utils/Resize'),
    ViewsManager = require('./view/ViewsManager');

var Application = module.exports = {
    init: function() {
        this.model = new Model();
        this.eventProxy = new EventProxy(this.model);
        this.main = new Main(this.model);
        this.resizeUtil = new Resize(this.model);

        this.viewsManager = React.render( <ViewsManager model={this.model}/> , document.getElementById('pagesApp'));
        setTimeout(this.initResize.bind(this),100);
    },

    initResize:function() {
        var self = this;
        self.manageBg((1920 / 1079),$('#homePage'),$('#homePageBg'));
        self.manageBg((959 / 1076),$('.leftContent'),$('.contentImage'));
        self.model.stage.resize(function() {
            //resize home page
            self.manageBg((1920 / 1079),$('#homePage'),$('#homePageBg'));
            self.manageBg((959 / 1076),$('.leftContent'),$('.contentImage'));
            self.manageVideos();
        });
    },

    manageBg: function(ratio, el, elImg) {
        var ratio = ratio;
        var returnObj = this.resizeUtil.resize(el, ratio);
        var rW = returnObj.width;
        var rH = returnObj.height;
        elImg.css('width', rW);
        elImg.css('height', rH);
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
    console.log("ready");
    Application.init();
});
