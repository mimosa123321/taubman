var React = require('./../../../../../node_modules/react/lib/React');
var PanelScrollText = require('./panel-image/PanelScrollText');
var PanelClose= require('./PanelClose');
var PanelImage = require('./panel-image/PanelImage');
var PanelText = require('./panel-video/PanelText');
var PanelVideo = require('./panel-video/PanelVideo');

var PanelModule = module.exports = React.createClass({
    componentDidMount: function() {

    },

    clickCloseHandler:function() {
        this.props.onClickCloseBtn();
    },

    render:function(){
        this.model = this.props.model;
        var status;
        switch (this.props.hidden) {
            case true:
                status = "hide";
                break;

            case false:
                status = "show";
                break;
        }
        classNames =  "panel " + status;

        if(this.props.type === "video") {
            return <div className={classNames}>
                <div className="contents-video">
                    <PanelText contents={this.props.contents}/>
                    <PanelVideo contents={this.props.contents}/>
                    <PanelClose onClickCloseBtn = {this.clickCloseHandler}/>
                </div>
            </div>
        }

        return <div className={classNames}>
            <div className="contents">
                <PanelScrollText contents={this.props.contents}/>
                <PanelImage contents={this.props.contents}/>
                <PanelClose onClickCloseBtn = {this.clickCloseHandler} />
            </div>
        </div>
    }
});
