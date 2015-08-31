var React = require('React');
var PanelScrollText = require('./panel-image/PanelScrollText');
var PanelClose= require('./PanelClose');
var PanelImage = require('./panel-image/PanelImage');
var PanelText = require('./panel-video/PanelText');
var PanelVideo = require('./panel-video/PanelVideo');
var PanelSlideShow = require('./panel-slideshow/PanelSlideShow');
var PanelSlideShowThumb = require('./panel-slideshow/PanelSlideShowThumb');

var PanelModule = module.exports = React.createClass({
    componentDidMount: function() {
        return {contents: [],
            slideId:1};
    },

    clickCloseHandler:function() {
        this.props.onClickCloseBtn();

    },

    render:function() {
        this.model = this.props.model;
        var status, html;
        switch (this.props.hidden) {
            case true:
                status = "hide";
                break;

            case false:
                status = "show";
                break;
        }
        classNames = "panel " + status;

        if(this.props.type === "slideshow"){
            html = <div className="contents-slideShow">
                <PanelText type ={this.props.type} contents={this.props.contents}/>
                <PanelSlideShow model={this.props.model} contents={this.props.contents} />
                <PanelSlideShowThumb model={this.props.model} contents={this.props.contents} />
                <PanelClose onClickCloseBtn = {this.clickCloseHandler}/>
            </div>

        }else if(this.props.type === "video") {
            html = <div className="contents-video">
                <PanelText type ={this.props.type} contents={this.props.contents}/>
                <PanelVideo contents={this.props.contents}/>
                <PanelClose onClickCloseBtn = {this.clickCloseHandler}/>
            </div>
        }else if(this.props.type === "image") {
            html = <div className="contents">
                <PanelScrollText contents={this.props.contents}/>
                <PanelImage contents={this.props.contents}/>
                <PanelClose onClickCloseBtn = {this.clickCloseHandler} />
            </div>
        }
        return <div className={classNames}>{html}</div>
    }
});
