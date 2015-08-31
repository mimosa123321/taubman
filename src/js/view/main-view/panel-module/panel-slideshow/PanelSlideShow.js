var React = require('React');
var $ = require('jquery-compat');


var PanelSlideShow = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {
        self = this;

        this.initBxSlider();

        this.props.model.eventProxy.addListener('onClickSlideShowThumb', function(id){
            self.bxslider.goToSlide(id);
        });
    },

    initBxSlider: function() {
        self.bxslider = $('#bxslider1').bxSlider({
            speed: 500,
            pager: true,
            infiniteLoop: true,
            onSliderLoad: function(index) {
                console.log("bxslider load Done");
            },

            onSlideBefore: function($slideElement, oldIndex, newIndex) {
            },

            onSlideAfter: function() {}
        });
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
