$ = require('jquery-compat');

var Menu = module.exports = function(model) {
    this.model = model;
    this.init();
    this.initLogo();
};

Menu.prototype.init = function() {
    var self = this;
    var menu = $('#menusList').find('.menu');
    menu.each(function(index){
        $(this).click(function(){
            if(self.model.currentSection) {
                self.model.prevSection = self.model.currentSection;
            }
            self.model.currentSection = index + 1;
            //self.model.eventProxy.emit('onMenuClick');
            self.model.eventProxy.emit('onChangeSection');

        });
    });
};

Menu.prototype.initLogo = function() {
    var self = this;
    var logo = $('#logo');
    logo.click(function(){
        self.model.eventProxy.emit('onBackHomePage');
    });
};
