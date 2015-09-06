var React = require('React');

var PanelScrollText = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {

    },
    render:function(){
        var title = this.props.contents.title;
        var desc = this.props.contents.desc;
        return <div className = "panelText">
            <div className="title">{title}</div>
            <div className="seperator"></div>
            <div className="scroll">
                <div className="scrollWrap">
                    <div className="wrap"><div className="desc" dangerouslySetInnerHTML={{__html: desc}}></div></div>
                </div>
            </div>
        </div>
    }

});

