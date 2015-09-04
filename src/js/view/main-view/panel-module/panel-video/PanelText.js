var React = require('React');

var PanelText = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {

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
                        <li><img src="./build/images/fbicon.png" /></li>
                        <li><img src="./build/images/linkedinicon.png" /></li>
                        <li className="twitter"><img src="./build/images/twittericon.png" /></li>
                        <li className="weibo"><img src="./build/images/weiboicon.png" /></li>
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
