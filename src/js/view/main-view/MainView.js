var React = require('./../../../../node_modules/react/lib/React');
var ContentModule = require('./content-module/ContentModule');

var MainView = module.exports = React.createClass({
    componentDidMount: function() {

    },

    onHandleButtonClick:function(subContent) {
        this.props.onShowSubContent(subContent);
    },

    render: function() {
        var contents = this.props.contents;
        return <div className="mainView">
            <ContentModule model = {this.props.model} contents = {contents.leftContent}
                           name = {'leftContent'}
                           onButtonClick = {this.onHandleButtonClick}/>
            <ContentModule model = {this.props.model} contents = {contents.rightContent}
                           name = {'rightContent'}
                           onButtonClick = {this.onHandleButtonClick}/>
        </div>
    }
});
