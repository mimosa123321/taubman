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

        this.onCloseAllVideos();

    },

    onShowSubContent:function(subContents) {
        this.setState({subContents:subContents.subContent, type:subContents.type, isHidePanel:false});
        //avoid drag after open panel
        this.model.saveScrollTop = $(window).scrollTop();
        setTimeout(function(){
            $('body').addClass('noscroll');
        },1000);

        this.model.eventProxy.emit('updateMenuBtn',subContents.subContent.pageId + 1);

        var that = this;
        setTimeout( function(){
            that.openVideos();
        },100);

    },

    onCloseAllVideos: function() {
        for(var i=1; i<4; i++) {
            var slideShowVideoPlayer = document.getElementById('slideShowVideo'+ i);

            if(slideShowVideoPlayer) {
                if(!isIE8) {
                    slideShowVideoPlayer.pause();
                }
            }
        }

        if(isIE8) {
            $('#player1').css('display','none');
            $('#player2').css('display','none');
            $('#player3').css('display','none');

            var player1 = document.getElementById('player1');
            player1.stopVideoPlayer();

            var player2 = document.getElementById('player2');
            player2.stopVideoPlayer();

            var player3 = document.getElementById('player3');
            player3.stopVideoPlayer();
        }
    },

    openVideos:function() {
        $('#player1').css('display','block');
        $('#player2').css('display','block');
        $('#player3').css('display','block');
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