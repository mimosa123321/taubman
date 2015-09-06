var React = require('React');
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
            self.updateContents(self);
        });

        self.model.eventProxy.addListener('onMenuClick',function() {
            self.updateContents(self);
        });

        self.model.eventProxy.addListener('onClosePanel',function() {
            self.onClosePanelHandler();
        });
    },

    onClosePanelHandler:function() {
        this.props.model.didShowSubContent = false;
        this.setState({isHidePanel:true});
        this.model.eventProxy.emit('reset');
        //allow drag after close panel
        $('body').removeClass('noscroll');
        $(window).scrollTop(this.model.saveScrollTop);
        console.log("close");

    },

    onShowSubContent:function(subContents) {
        this.setState({subContents:subContents.subContent, type:subContents.type, isHidePanel:false});
        //avoid drag after open panel
        this.model.saveScrollTop = $(window).scrollTop();
        setTimeout(function(){
            $('body').addClass('noscroll');
        },1000);

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