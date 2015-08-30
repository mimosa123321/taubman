var React = require('React');
var InfoDetail = require('./InfoDetail');
var InfoMap = require('./InfoMap');

var infoModule = module.exports = React.createClass({
    render:function() {

        return <div className = "contents" id="infoContent">
            <div id="infoBg" className = "contentBg"><img id="infoBgImg" src= "build/images/pattern.png" /></div>
            <InfoMap model = {this.props.model} />
            <InfoDetail model = {this.props.model} />
        </div>
    }
});



