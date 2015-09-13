var React = require('React');
//var $ = require('jquery-compat');


var PanelSlideShowThumb = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },

    handleSubmit:function(index) {
        this.props.model.eventProxy.emit('onClickSlideShowThumb', index);
    },

    componentDidMount: function() {
        var self = this;
        if(self.bxslider2 == null){
            self.initBxSlider();
        }

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
