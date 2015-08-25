var React = require('./../../../../../node_modules/react/lib/React');

var ContentImage = module.exports = React.createClass({
    componentDidMount: function() {
        this.model = this.props.model;
    },

    render: function() {
        return <div className="contentImage">
            <img src={this.props.data} />
        </div>
    }
});

