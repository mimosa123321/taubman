var React = require('React');

var ContentButton = module.exports = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onButtonClick();
        return;
    },

    render:function() {
        if(this.props.data) {
            var type = this.props.data.type;
            var text = this.props.data.text;
            var url = this.props.data.url;
        }
        return <div className = "contentButton">
            <div onClick={this.handleSubmit} className="contentButton-img"><img src={url} /></div>
            <div className = "contentButton-text">{text}</div>
        </div>
    }
});





