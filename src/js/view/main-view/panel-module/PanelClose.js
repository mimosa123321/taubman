var React = require('./../../../../../node_modules/react/lib/React');

var PanelClose = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {

    },
    render:function(){

        return <div className = "panelClose">
            <img src="./build/images/closebtn.png" />
        </div>
    }
});