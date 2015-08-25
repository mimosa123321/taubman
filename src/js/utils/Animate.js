var Animate = module.exports = function(model) {
    this.model = model;
    this.model.animateUtil = this;
};

Animate.prototype.transitionEnd = function(ele, callbackFunc) {
    $(ele).unbind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd');
    $(ele).bind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function() {
        $(ele).unbind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd');
        if (callbackFunc) {
            callbackFunc.apply();
        }
    });
};

Animate.prototype.animationEnd = function(ele, callbackFunc) {
    $(ele).unbind('animationend webkitAnimationEnd MSAnimationEnd oanimationend');
    $(ele).bind('animationend webkitAnimationEnd MSAnimationEnd oanimationend', function() {
        $(ele).unbind('animationend webkitAnimationEnd MSAnimationEnd oanimationend');
        if (callbackFunc) {
            callbackFunc.apply();
        }
    });
};
