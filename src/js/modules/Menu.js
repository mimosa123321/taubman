$ = require('jquery-compat');

var Menu = module.exports = function(model) {
    var self = this;
    this.model = model;
    this.menu = [];
    this.init();
    this.initLogo();
    this.model.eventProxy.addListener('changeMenuBtn',function(id){
        console.log(id);
        self.choseMenu(id - 1);

    });
};

Menu.prototype.init = function() {
    var self = this;
    var menu = $('#menusList').find('.menu');
    menu.each(function(index){
        self.menu.push($(this));
        $(this).click(function(){
            $('.menu').removeClass('chosen');
            if(self.model.currentSection) {
                self.model.prevSection = self.model.currentSection;
            }
            self.model.currentSection = index + 1;
            //self.model.eventProxy.emit('onMenuClick');
            self.model.eventProxy.emit('onChangeSection');
            $(this).addClass('chosen');
        });
    });
};

Menu.prototype.choseMenu = function(id) {
    var self = this;
    var menu = $('#menusList').find('.menu');
    menu.each(function(index){
        if(index === id) {
            $('.menu').removeClass('chosen');

            $(this).addClass('chosen');
        }
    });
};

Menu.prototype.initLogo = function() {
    var self = this;
    var logo = $('#logo');
    logo.click(function(){
        self.model.eventProxy.emit('onBackHomePage');
        $('.menu').removeClass('chosen');

        //$('#pagesApp').css('visibility','hidden');
    });
};

