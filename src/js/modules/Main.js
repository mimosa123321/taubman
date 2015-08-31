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

    this.initScrollDownBtn();
};

Main.prototype.init = function() {
    this.model.currentSection = 1;
    this.getContents();

    if (!Modernizr.csstransitions){
        console.log($('.detail'));
        $('.detail').css('display','none');
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
            // IE - open tab
            target.removeClass('ieshow').addClass('ieshow');
            this.checkInfoBar();
        }else {
            target.removeClass('show hide left right').addClass('show left');
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
            //IE --------------------------------------------
            this.checkInfoBar();
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
        //IE --------------------------------------------
        pre.removeClass('ieshow iehide').addClass('iehide');
        target.removeClass('ieshow iehide').addClass('ieshow');
    }
};

Main.prototype.initScrollDownBtn = function() {
    var self = this;
    $('#scrollDownBtn').click(function() {

        if(!self.isOpenContent) {
            self.menu.choseMenu(0);
            self.showApp();
            var target =  $('#pair1');
            if (Modernizr.csstransitions){
                target.css('visibility','visible');
                target.css('display','block');

            }
            if (!Modernizr.csstransitions){
                // IE - open tab
                target.removeClass('ieshow').addClass('ieshow');
                this.checkInfoBar();
            }else {
                target.removeClass('show hide left right').addClass('show left');
            }
            self.isOpenContent = true;
        }
    });



};

Main.prototype.hideApp = function() {
    if (Modernizr.csstransitions){
        this.app.removeClass('show hide').addClass('hide');
    } else {
        //IE --
        $('.pairs').removeClass('ieshow iehide');
        this.app.css('visibility','hidden');
        this.app.css('display','none');
        this.app.css('opacity',0);
    }
};

Main.prototype.showApp = function() {
    if (Modernizr.csstransitions){
        this.app.removeClass('show hide').addClass('show');
    } else {
        //IE --
        this.app.css('visibility','visible');
        this.app.css('display','block');
        this.app.css('opacity',1);
    }
};

Main.prototype.checkInfoBar = function() {
    var detail = $('.detail');
    if(this.model.currentSection === 1) {
        detail.css('display','block');
    }else {
        detail.css('display','none');
    }
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
