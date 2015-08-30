var React = require('React');

var PanelClose = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },

    handleSubmit:function() {
        this.props.onClickCloseBtn();
    },

    componentDidMount: function() {

    },
    render:function(){
        return <div onClick={this.handleSubmit} className = "panelClose">
            <img src="./build/images/closebtn.png" />
        </div>
    }
});