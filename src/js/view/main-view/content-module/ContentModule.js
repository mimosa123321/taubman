var React = require('React');
var ContentImage = require('./ContentImage');
var ContentText = require('./ContentText');
var ContentIcon = require('./ContentIcon');

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
        /*<<ContentImage model = {this.props.model}
         data = {url}
         onButtonClick = {this.onButtonClick} />*/

        var bg = (isIE8? <ContentImage model = {this.props.model}
                                       data = {url}/>:'' );


        return <div className={name} onClick = {this.onButtonClick} >
            {bg}
            <ContentIcon type = {this.props.contents.type} />
            <ContentText model = {this.props.model}
                         data = {text}
                         onButtonClick = {this.onButtonClick} />
        </div>;
    }
});
