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
