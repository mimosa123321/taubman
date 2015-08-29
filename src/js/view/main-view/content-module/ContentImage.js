var React = require('./../../../../../node_modules/react/lib/React');

var ContentImage = module.exports = React.createClass({
    componentDidMount: function() {
        this.model = this.props.model;
    },

    handleSubmit:function() {
        this.props.onButtonClick();
    },

    render: function() {
        return <div className="contentImage" onClick={this.handleSubmit}>
            <img src={this.props.data} />
        </div>
    }
});

