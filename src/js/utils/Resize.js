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
    if (this.el_width / this.el_height >= this.ratio) {
        rW = this.el_width;
        rH = this.el_width / this.ratio;
    } else {
        rW = this.ratio * this.el_height;
        rH = this.el_height;
    }
    var returnObj = {
        width: rW,
        height: rH
    };

    return returnObj;
};
