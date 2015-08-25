var $ = require('jquery-compat'),
    Menu = require('./Menu');


var Main = module.exports = function(model) {
    this.model = model;
    this.menu = new Menu(this.model);
    this.app = $('#pagesApp');
    this.init();
    this.model.eventProxy.addListener('onChangeSection', this.changeSection.bind(this));
};

Main.prototype.init = function() {
    this.model.currentSection = 1;
    this.getContents();
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


};

Main.prototype.hideApp = function() {
    if( this.app.hasClass('show')) {
        this.app.removeClass('show');
    }
    this.app.addClass('hide');
};

Main.prototype.showApp = function() {
    if( this.app.hasClass('hide')) {
        this.app.removeClass('hide');
    }
    this.app.addClass('show');
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
