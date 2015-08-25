var React = require('./../../../../../../node_modules/react/lib/React');

var PanelText = module.exports = React.createClass({
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
            <div className="wrap">
                <div className="desc">{desc}</div>
            </div>
        </div>
    }

});
