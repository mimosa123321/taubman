var React = require('React');
var ContentModule = require('./content-module/ContentModule');
var InfoModule = require('./info-module/InfoModule');
var HomePage = require('./HomePage');

var MainView = module.exports = React.createClass({
    componentDidMount: function() {

    },

    componentDidUpdate: function() {
        this.resizeContent();
        this.props.model.eventProxy.addListener('onResizeEvent', this.onResize);
    },

    onResize: function() {
        //this.resizeContent();
    },

    resizeContent: function() {
        var height = this.props.model.stage.height() - (this.props.model.stage.height() * 0.15);
        var node2 = React.findDOMNode(this.refs.pair2);
        var node3 = React.findDOMNode(this.refs.pair3);
        var node4 = React.findDOMNode(this.refs.pair4);
        var node5 = React.findDOMNode(this.refs.pair5);
        $(node2).css('height',height);
        $(node3).css('height',height);
        $(node4).css('height',height);
        $(node5).css('height',height);
    },

    onHandleButtonClick:function(subContent) {
        if(!this.props.model.didShowSubContent) {
            this.props.onShowSubContent(subContent);
            this.props.model.didShowSubContent = true;
            return;
        }
    },

    render: function() {
        var self = this;
        var myModel = this.props.model;
        myModel.pairs = [];

        var contentsNodes = this.props.contents.map(function (contents, index) {
            var contentId = 'pair' + (index + 1);
            myModel.pairs.push(contentId);
            if(index === 0) {
                return (
                        <div key={index} className="info pairs" id={contentId} ref={contentId} data-stellar-offset-parent="true">
                            <InfoModule model = {myModel}/>
                        </div>
                    )
            }else {
                return (
                    <div key={index} className="pairs" id={contentId} ref={contentId}>
                        <ContentModule model = {myModel} contents = {contents.leftContent}
                                       name = {'leftContent'}
                                       onButtonClick = {self.onHandleButtonClick}/>
                        <ContentModule model = {myModel} contents = {contents.rightContent}
                                       name = {'rightContent'}
                                       onButtonClick = {self.onHandleButtonClick}/>
                    </div>
                );
            }


        });

        if(this.props.contents.length > 0) {
            this.onResize();
        }

        return <div className="mainView">
            <HomePage />
            {contentsNodes}
        </div>
    }
});
