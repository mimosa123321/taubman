var React = require('React');

var PanelText = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {

    },

    fbShareHandler: function() {
        fbShare();
    },

    linkedInShareHandler: function() {
        linkedInShareHandler();
    },

    twitterShareHandler: function() {
        twitterShareHandler();
    },

    weiboShareHandler: function() {
        weiboShareHandler();
    },

    render:function(){
        var title = this.props.contents.title;
        var desc = this.props.contents.desc;
        var html;

        if(this.props.type != 'slideshow') {
            html = <div className = "text">
                <div className="title">{title}</div>
                <div className="wrap">
                    <div className="desc">{desc}</div>
                </div>
                <div className = "socialIcons">
                    <ul>
                        <li><a target='_blank' onClick={this.fbShareHandler}><img src="./build/images/fbicon.png" /></a></li>
                        <li><a onClick={this.linkedInShareHandler}><img src="./build/images/linkedinicon.png" /></a></li>
                        <li className="twitter"><a onClick={this.twitterShareHandler}><img src="./build/images/twittericon.png" /></a></li>
                        <li className="weibo"><a onClick={this.weiboShareHandler}><img src="./build/images/weiboicon.png" /></a></li>
                    </ul>
                </div>
            </div>

        }else {
            html = <div className = "text">
                <div className="title">{title}</div>
            </div>
        }
        return <div className = "panelText">{html}</div>;
    }

});
