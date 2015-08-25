var React = require('./../../../../node_modules/react/lib/React');
var ContentModule = require('./content-module/ContentModule');

var MainView = module.exports = React.createClass({
    componentDidMount: function() {
    },

    onHandleButtonClick:function(subContent) {
        this.props.onShowSubContent(subContent);
    },

    render: function() {
        var myModel = this.props.model;
        var contentsNodes = this.props.contents.map(function (contents, index) {
            var contentId = 'pair' + (index + 1);
            return (
                <div key={index} className="pairs" id={contentId}>
                    <ContentModule model = {myModel} contents = {contents.leftContent}
                                   name = {'leftContent'}
                                   onButtonClick = {this.onHandleButtonClick}/>
                    <ContentModule model = {myModel} contents = {contents.rightContent}
                                   name = {'rightContent'}
                                   onButtonClick = {this.onHandleButtonClick}/>
                </div>
            );
        });
        return <div className="mainView">
            {contentsNodes}
        </div>
    }
});
