var React = require('./../../../../../node_modules/react/lib/React');
var ContentImage = require('./ContentImage');
var ContentText = require('./ContentText');

var ContentModule = module.exports = React.createClass({
    componentDidMount: function() {
    },

    onButtonClick:function() {
        this.props.onButtonClick({subContent:this.subContent, type:this.type});
    },

    render: function() {
        var name = this.props.name;
        if(this.props.contents) {
            var type = this.props.contents.type;
            var text = {
                title:this.props.contents.title,
                desc:this.props.contents.desc,
                btnType: this.props.contents.btnType,
                btnText: this.props.contents.btnText,
                btnUrl: this.props.contents.btnUrl,
                subContent: this.props.contents.subContent
            };
            var url = this.props.contents.url;
            this.subContent = text.subContent;
            this.type = type;
        }
        return <div className={name}>
            <ContentImage model = {this.props.model}
                          data = {url} />
            <ContentText model = {this.props.model}
                         data = {text}
                         onButtonClick = {this.onButtonClick}/>
        </div>;
    }
});
