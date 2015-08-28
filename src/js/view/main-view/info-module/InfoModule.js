var React = require('./../../../../../node_modules/react/lib/React');
var InfoDetail = require('./InfoDetail');
var InfoMap = require('./InfoMap');

var infoModule = module.exports = React.createClass({
    render:function() {

        return <div className = "contents">
            <InfoMap model = {this.props.model} />
            <InfoDetail model = {this.props.model} />
        </div>
    }
});



