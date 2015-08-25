var $ = require('jquery-compat');

module.exports = function() {
    this.stage = $(window);
    this.currentSection = 1;
    this.getContentsURL = "./././contents.json";
};
