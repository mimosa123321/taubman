var React = require('React');

var HomePage = module.exports = React.createClass({
    render:function() {
        return <div className="homePage" id="homePage" section="1">
            <div id="homePageBg"><img src="build/images/bg.jpg"/></div>
            <div className ="contents">
                <div id="chinaMall">
                    <span className="center"></span>
                    <img src="build/images/chinamall.png"/>
                </div>

                <div className="leftButtons">
                    <div id="downloadWhitePaper">
                        <div id="dlPaperIcon">
                            <img src="build/images/dlpaper.png"/>
                        </div>
                    </div>
                    <div id="viewPrezi">
                        <div id="viewPreziIcon">
                            <img src="build/images/viewprezi.png"/>
                        </div>
                    </div>
                </div>

                <div className="rightButtons">
                    <div id="socialMedia">
                        <div id="socialShare">
                            <div id="fbIcon" className="icons"><img src="build/images/fbicon.png"/></div>
                            <div id="linkedinIcon" className="icons"><img src="build/images/linkedinicon.png"/></div>
                            <div id="twitterIcon" className="icons"><img src="build/images/twittericon.png"/></div>
                            <div id="weiboIcon" className="icons"><img src="build/images/weiboicon.png"/></div>
                        </div>
                    </div>
                    <div id="aboutAsia">
                        <div id="asiaIcon"><img src="build/images/talkaboutasia.png"/></div>
                    </div>
                </div>

                <div id="scrollDownBtn">
                    <img src="build/images/scrollbtn.png"/>
                </div>
            </div>
        </div>
    }

});
