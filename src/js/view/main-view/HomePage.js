var React = require('React');

var HomePage = module.exports = React.createClass({
    componentDidMount: function() {
        return {};
    },

    clickDownloadPaper: function() {
        $('.emailForm').removeClass('hide').addClass('show');
    },

    checkForm:function() {
        this.closeForm();
    },

    closeForm:function() {
        console.log('close');
        $('.emailForm').removeClass('show').addClass('hide');
    },

    fbShareHandler: function() {
        fbShare();
    },

    render:function() {
        var bg = (isIE8? <div id="homePageBg"><img src="build/images/bg.jpg"/></div>:'');
        return <div className="homePage" id="homePage" section="1">
            {bg}
            <div className ="contents">
                <div id="chinaMall">
                    <span className="center"></span>
                    <img src="build/images/chinamall.png"/>
                </div>

                <div className="leftButtons">
                    <div id="downloadWhitePaper" onClick={this.clickDownloadPaper}>
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
                            <a id="fbIcon" target='_blank' onClick={this.fbShareHandler} className="icons"><img src="build/images/fbicon.png"/></a>
                            <a id="linkedinIcon" target='_blank' href="https://www.linkedin.com/cws/share?url=http%3A%2F%2Ftaubman.xenyo.net%2F" className="icons"><img src="build/images/linkedinicon.png"/></a>
                            <a id="twitterIcon" target='_blank' href="http://www.twitter.com/share?url=http%3A%2F%2Ftaubman.xenyo.net%2F" className="icons"><img src="build/images/twittericon.png"/></a>
                            <a id="weiboIcon" target='_blank' href="http://service.weibo.com/share/share.php?url=http%3A%2F%2Ftaubman.xenyo.net%2F&title=Taubman Asia China Mall 2020&pic=http://mimosapoon.com/taubman/bg.jpg=&language=zh_cn" className="icons"><img src="build/images/weiboicon.png"/></a>
                        </div>
                    </div>
                    <a id="aboutAsia" target='_blank' href="http://www.taubmanasia.com/">
                        <div id="asiaIcon"><img src="build/images/talkaboutasia.png"/></div>
                    </a>
                </div>

                <div id="scrollDownBtn">
                    <img src="build/images/scrollbtn.png"/>
                </div>

                <form className="emailForm">
                    <div className = "contents">
                        <div className = "closeArea" onClick={this.closeForm}></div>
                        <p>Taubman Asia thanks you for your interest in downloading the China Mall 2020 whitepaper.</p>
                        <p>Please enter your details below.</p>
                        <div className="formButtonBg"><img src="build/images/formbtn"/> </div>
                        <input type="text" className = "myInput" placeholder="Email here" />
                        <input type="submit" className="submitBtn" value="Submit" onClick={this.checkForm} />
                    </div>
                </form>
            </div>
        </div>
    }

});
