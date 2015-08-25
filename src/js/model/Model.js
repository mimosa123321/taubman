var $ = require('jquery-compat');

module.exports = function() {
    this.stage = $(window);
    this.currentSection = null;
    this.prevSection = null;
    this.getContentsURL = "./././contents.json";
};
