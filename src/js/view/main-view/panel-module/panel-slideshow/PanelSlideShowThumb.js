var React = require('React');
var $ = require('jquery-compat');


var PanelSlideShowThumb = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },

    handleSubmit:function(index) {
        console.log(index);
        this.props.model.eventProxy.emit('onClickSlideShowThumb', index);
    },

    componentDidMount: function() {
        var self = this;

        self.props.model.eventProxy.addListener('onSlider_1_LoadComplete',function() {
            self.initBxSlider();
            console.log("init");
        });
    },

    initBxSlider:function() {
        var self = this;
        if(this.bxslider2 == null) {
            this.bxslider2 = $('#bxslider2').bxSlider({
                minSlides: 2,
                maxSlides: 7,
                slideWidth: 173,
                slideMargin: 62,
                speed: 500,
                pager: false,
                infiniteLoop: false,
                onSliderLoad: function(index) {
                    console.log("bxsliderThumb load Done");
                },

                onSlideBefore: function($slideElement, oldIndex, newIndex) {
                },

                onSlideAfter: function() {}
            });
        }

    },

    render:function(){
        var self = this;
        var contentsNode =  this.props.contents.thumbsUrl.map(function(contents, index) {
            return <li key = {index} onClick={self.handleSubmit.bind(null,index)}><img src={contents}/></li>
        });

        return <div className = "panelSlideShowThumb">
            <ul className="bxsliderThumb" id="bxslider2">
                {contentsNode}
            </ul>
        </div>
    }
});
