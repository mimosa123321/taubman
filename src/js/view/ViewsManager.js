var React = require('./../../../node_modules/react/lib/React');
var MainView = require('./main-view/MainView');
var PanelModule = require('./main-view/panel-module/PanelModule');

var ViewsManager = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: [],
            subContents: {},
            type:"",
            isHidePanel: true
        };
    },

    componentDidMount: function() {
        var self = this;
        self.model = this.props.model;
        self.model.eventProxy.addListener('onContentsReady',function() {
            console.log("onContent Ready");
            self.updateContents(self);
        });

        self.model.eventProxy.addListener('onMenuClick',function() {
            self.updateContents(self);
        });
    },

    onClosePanelHandler:function() {
        this.setState({isHidePanel:true});
    },

    onShowSubContent:function(subContents) {
        this.setState({subContents:subContents.subContent, type:subContents.type, isHidePanel:false});
    },

    updateContents:function(self) {
        var currentSection = this.model.currentSection - 1;
        var contents = this.model.contents;
        self.setState({contents: contents});
    },

    render: function() {
        return <div className="contents">
            <MainView model={this.props.model}
                      contents={this.state.contents}
                      onShowSubContent={this.onShowSubContent}/>
            <PanelModule model={this.props.model}
                         hidden={this.state.isHidePanel}
                         contents={this.state.subContents}
                         type = {this.state.type}
                         onClickCloseBtn = {this.onClosePanelHandler}/>
        </div>;
    }
});