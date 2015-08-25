$ = require('jquery-compat');

var Menu = module.exports = function(model) {
    this.model = model;
    this.init();
};

Menu.prototype.init = function() {
    var self = this;
    var menu = $('#menusList').find('.menu');
    menu.each(function(index){
        $(this).click(function(){
            self.model.currentSection = index + 1;
            self.model.eventProxy.emit('onMenuClick');
            self.model.eventProxy.emit('onChangeSection');
        });
    });
};
