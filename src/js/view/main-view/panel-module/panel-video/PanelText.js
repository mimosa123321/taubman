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
            </div>
        }else {
            html = <div className = "text">
                <div className="title">{title}</div>
            </div>
        }
        return <div className = "panelText">{html}</div>;
    }

});
