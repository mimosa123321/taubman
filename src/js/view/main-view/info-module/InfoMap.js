var React = require('./../../../../../node_modules/react/lib/React');
var InfoButton = require('./InfoButton');

var InfoMap= module.exports = React.createClass({
    render:function() {
        return <div className = "map">
            <div className = "bg">
                <div className = "container">
                    <span className = "center"></span>
                    <img src="./build/images/map.png" />
                </div>
            </div>
            <InfoButton model = {this.props.model}/>
        </div>
    }
});
