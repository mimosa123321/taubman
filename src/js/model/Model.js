var $ = require('jquery-compat');

module.exports = function() {
    this.stage = $(window);
    this.currentSection = null;
    this.prevSection = null;
    this.detailId = 0;
    this.preDetailId = null;
    this.pairs = [];
    this.getContentsURL = "./././contents.json";
    this.didShowSubContent = false;
};
