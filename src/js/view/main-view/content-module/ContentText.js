var React = require('React');
var ContentButton = require('./ContentButton');

var ContentText = module.exports = React.createClass({
    componentDidMount: function() {
        this.model = this.props.model;
    },

    onButtonClick:function() {
        this.props.onButtonClick();
    },

    render: function() {
        if(this.props.data) {
            var title = this.props.data.title;
            var desc = this.props.data.desc;

            var btnData = {
                type : this.props.data.btnType,
                text : this.props.data.btnText,
                url : this.props.data.btnUrl
            };
        }
        return <div className="contentText">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
            <ContentButton data={btnData} onButtonClick={this.onButtonClick} />
        </div>
    }
});
