var React = require('React');

var PanelVideo = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {
        this.reloadVideo(this.props.contents.videoUrl);
    },

    componentDidUpdate: function() {
        this.reloadVideo(this.props.contents.videoUrl);
    },

    reloadVideo: function(url) {
        var videoPlayer = React.findDOMNode(this.refs.videoPlayer);
        $(videoPlayer).attr('src',url);

        /*var playerInstance = jwplayer("container");
         playerInstance.setup({
         file: this.props.contents.videoUrl,
         image: this.props.contents.url
         });*/
    },

    render:function(){
        //<iframe className="videoIframe" src="https://player.vimeo.com/video/27403261"></iframe>
        var url = this.props.contents.url;
        var videoUrl = this.props.contents.videoUrl;

        return <div className = "panelVideo">
            <div className = "video">
                <video className="videoPlayer" ref="videoPlayer" poster={url} src="" width="100%" height="100%" controls></video>
            </div>
        </div>
    }
});

