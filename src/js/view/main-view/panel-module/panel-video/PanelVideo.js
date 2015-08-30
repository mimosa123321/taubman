var React = require('React');

var PanelVideo = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {

    },
    render:function(){
        var url = this.props.contents.url;
        return <div className = "panelVideo">
            <div className = "video">
                <iframe className="videoIframe" src="https://player.vimeo.com/video/27403261"></iframe>
            </div>
        </div>
    }
});

