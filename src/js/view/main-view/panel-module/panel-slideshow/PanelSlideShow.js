var React = require('React');
var $ = require('jquery-compat');


var PanelSlideShow = module.exports = React.createClass({
    getInitialState: function() {
        return {contents: []};
    },
    componentDidMount: function() {
        var self = this;

        self.props.model.eventProxy.addListener('onClickSlideShowThumb', function(id){
            self.bxslider.goToSlide(id);
        });

        this.myBxslider = React.findDOMNode(this.refs.bxslider1);
        this.initBxSlider();

        var text = self.props.contents.imagesUrl[0].caption;
        $('.captionText').html(text);
    },

    initBxSlider: function() {
        var self = this;
        if(self.bxslider == null){
            self.bxslider = $(self.myBxslider).bxSlider({
                speed: 500,
                pager: true,
                infiniteLoop: false,
                onSliderLoad: function(index) {
                    var pageTop = parseInt($('.panelSlideShow').css('height')) * 0.5 + 10;
                    $('.bx-pager').css('top',pageTop);
                    if(isIE8) {
                        embedFlash();
                    }

                    var height = parseInt(self.props.model.stage.height()) - parseInt(self.props.model.stage.height()) * 0.1 -  parseInt(self.props.model.stage.height()) * 0.1 ;
                    console.log(height);
                    $('.contents-slideShow').css('height',height);
                },

                onSlideBefore: function($slideElement, oldIndex, newIndex) {
                    var currentPlayer = document.getElementById('slideShowVideo' + oldIndex);
                    if(currentPlayer != null) {
                        if(!isIE8) {
                            currentPlayer.pause();
                        }
                    }

                    if(isIE8) {
                        var player1 = document.getElementById('player1');
                        player1.stopVideoPlayer();

                        var player2 = document.getElementById('player2');
                        player2.stopVideoPlayer();

                        var player3 = document.getElementById('player3');
                        player3.stopVideoPlayer();
                    }

                    var text = self.props.contents.imagesUrl[newIndex].caption;
                    $('.captionText').html(text);

                },
                onSlideAfter: function() {}
            });
        }

    },

    render:function(){
        //<video className="slideShowVideo" id={slideShowVideoId} ref="slideShowVideo" poster={contents.cover} src={contents.url} width="auto" height="100%" controls autoPlay></video>

        var contentsNode =  this.props.contents.imagesUrl.map(function(contents, index) {
            var slideShowVideoId = 'slideShowVideo' + index;
            var player = 'player' + (index + 1);
            var myPlayer;
            if(isIE8) {
                myPlayer = <div className="player" id={player}></div>;
            }else {
                myPlayer = <video className="slideShowVideo" id={slideShowVideoId} ref="slideShowVideo" poster={contents.cover} src={contents.url} width="auto" height="100%" controls autoPlay></video>;
            };
            return (contents.type === "video"?
            <li key={index}>
                <div className="slideShowVideoContainer">
                    {myPlayer}
                </div>

            </li>:
                <li key={index}><img src={contents.url}/></li>)
        });

        return <div className = "panelSlideShow">
            <div className= "caption">
                <div className = "captionContents">
                    <img src="./build/images/caption.png"/>
                    <p className="captionText"></p>
                </div>

            </div>
            <ul className="bxslider" id = "bxslider1" ref="bxslider1">
                {contentsNode}
            </ul>
        </div>
    }
});
