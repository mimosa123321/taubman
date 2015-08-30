var React = require('React');

var ContentIcon = module.exports = React.createClass({
    componentDidMount: function() {
    },

    onButtonClick:function() {
    },

    render: function() {
        if(this.props.type === "video") {
            var obj = <div className = "videoIconImg"><img src="./build/images/icon-play.png" /></div>;
        }
        return <div className="videoIcon">
            {obj}
        </div>;
    }
});