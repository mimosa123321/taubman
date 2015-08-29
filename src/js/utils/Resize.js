var Resize = module.exports = function(model) {
    this.model = model;
    this.model.resizeUtil = this;
    this.stage = this.model.stage;
};

Resize.prototype.resize = function(el, ratio) {
    var rW, rH;
    this.el = el;
    this.el_width = parseInt(this.el.css('width'));
    this.el_height = parseInt(this.el.css('height'));
    this.ratio = ratio;
    if ( this.ratio > this.el_width / this.el_height) {
        rW = 'auto';
        rH = '100%';

    } else {
        rW = '100%';
        rH = 'auto';
    }

    var returnObj = {
        width: rW,
        height: rH
    };

    return returnObj;
};
