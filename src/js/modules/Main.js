var $ = require('jquery-compat'),
    Menu = require('./Menu');

var Main = module.exports = function(model) {
    this.model = model;
    this.menu = new Menu(this.model);
    this.app = $('#pagesApp');
    this.init();
    this.isOpenContent = false;
    this.model.eventProxy.addListener('onChangeSection', this.changeSection.bind(this));
    this.model.eventProxy.addListener('onBackHomePage', this.backHomePage.bind(this));
    this.model.eventProxy.addListener('onClickInfoButton', this.changeDetail.bind(this));
};

Main.prototype.init = function() {
    this.model.currentSection = 1;
    this.getContents();

    if (!Modernizr.csstransitions){
        $('#detailContent0').removeClass('ieshow');
    }
};

Main.prototype.getContents = function() {
    var self = this;
    /*this.getData(this.model.getContentsURL).then(function(response){
        self.model.contents = JSON.parse(response).data;
        self.model.eventProxy.emit('onContentsReady');
    });*/
    $.get(this.model.getContentsURL, function(result) {
        self.model.contents = result.data;
        self.model.eventProxy.emit('onContentsReady');
    }.bind(this));
};

Main.prototype.changeSection = function() {
    //showApp
    this.showApp();
    var target = $('#pair' + (this.model.currentSection));
    var pre = $('#pair' + (this.model.prevSection));
    if (Modernizr.csstransitions){
        target.css('visibility','visible');
        target.css('display','block');

    }
    if(!this.isOpenContent) {
        if (!Modernizr.csstransitions){
            var targetDetail = $('#detailContent' + this.model.detailId);
            target.removeClass('ieshow').addClass('ieshow');
            targetDetail.addClass('ieshow');
        }
        this.isOpenContent = true;
        return;
    }else {
        if (Modernizr.csstransitions){
            if(this.model.currentSection < this.model.prevSection) {
                pre.removeClass('show hide left right').addClass('hide right');
                target.removeClass('show hide left right').addClass('show right');
            }

            if(this.model.currentSection > this.model.prevSection) {
                pre.removeClass('show hide left right').addClass('hide left');
                target.removeClass('show hide left right').addClass('show left');
            }
        }else {
            pre.removeClass('iehide ieshow').addClass('iehide');
            target.removeClass('iehide ieshow').addClass('ieshow');
        }

        /*this.model.animateUtil.animationEnd(pre, function(){
            pre.css('display','none');
            pre.css('visibility','hidden');
        });*/
    }
};

Main.prototype.backHomePage = function() {
    //hideApp
    this.hideApp();
    this.clearApp();
};

Main.prototype.changeDetail = function(data) {
    console.log("changeDetail="+data);
    var index = data + 1;

    this.model.preDetailId = this.model.detailId;
    this.model.detailId = index;


    var target = $('#detailContent' + this.model.detailId);
    var pre = $('#detailContent' + this.model.preDetailId);
    target.css('visibility','visible');
    target.css('display','block');

    if (Modernizr.csstransitions){
        pre.removeClass('show hide').addClass('hide');
        target.removeClass('show hide').addClass('show');
    }else {
        pre.removeClass('ieshow iehide').addClass('iehide');
        target.removeClass('ieshow iehide').addClass('ieshow');
    }
};

Main.prototype.hideApp = function() {
    this.app.removeClass('show hide').addClass('hide');
};

Main.prototype.showApp = function() {
    if (Modernizr.csstransitions){
        this.app.removeClass('show hide').addClass('show');
    } else {
        this.app.css('visibility','visible');
        this.app.css('opacity',0);
        setTimeout(this.ieFixShowApp.bind(this),100);
    }
};

Main.prototype.ieFixShowApp = function() {
    this.app.animate({
        opacity:1
    },1000,function(){
        $(this).css('display','block');
    });
};

Main.prototype.clearApp = function() {
    this.isOpenContent = false;
    this.currentSection = null;
    this.prevSection = null;
    $('.pairs').removeClass('show hide left right');
    $('.pairs').css('visibility','hidden');
    //$('.pairs').css('display','none');
};



/*Main.prototype.getData = function(url) {
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET',url);
        req.onload = function() {
            if(req.status === 200) {
                resolve(req.response)
            }else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function() {
            reject(Error('Network Error'));
        };

        // Make the request
        req.send();
    })
};*/
