var React = require('React');
var $ = require('jquery-compat');


var PanelSlideShow = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {
        var self = this;
        self.initBxSlider();
        self.props.model.eventProxy.addListener('onClickSlideShowThumb', function(id){
            self.bxslider.goToSlide(id);
        });
    },

    initBxSlider: function() {
        var self = this;
        if(self.bxslider == null){
            self.bxslider = $('#bxslider1').bxSlider({
                speed: 500,
                pager: true,
                infiniteLoop: false,
                onSliderLoad: function(index) {
                    console.log("bxslider load Done");
                    self.props.model.eventProxy.emit('onSlider_1_LoadComplete');
                },

                onSlideBefore: function($slideElement, oldIndex, newIndex) {
                },

                onSlideAfter: function() {}
            });
        }

    },

    render:function(){
        var contentsNode =  this.props.contents.imagesUrl.map(function(contents, index) {
            return <li key={index}><img src={contents}/></li>
        });

        return <div className = "panelSlideShow">
            <ul className="bxslider" id = "bxslider1">
                {contentsNode}
            </ul>
        </div>
    }
});
