var React = require('React');

var HomePage = module.exports = React.createClass({
    componentDidMount: function() {
        var form1 = React.findDOMNode(this.refs.form1);
        var form2 = React.findDOMNode(this.refs.form2);
        $(form1).css('display','block');
        $(form2).css('display','none');
        this.isWrongInput = false;
        if(isIE8) {
            $('.myInput').val('请在这里输入');
            this.isWrongInput = true;
        }
        return {};
    },

    clickDownloadPaper: function() {
        $('.emailForm').removeClass('hide').addClass('show');
    },

    checkForm:function(e) {

        var self = this;
        var form1 = React.findDOMNode(this.refs.form1);
        var form2 = React.findDOMNode(this.refs.form2);
        var form = document.getElementById('myEmailForm');

        var email = $(".myInput").val();

        if (this.isEmail(email)) {
            $(form1).css('display','none');
            $(form2).css('display','block');
            form.submit();
            setTimeout ( function() {
                self.closeForm();
             }, 3000);
        } else {
            e.preventDefault();
            this.isWrongInput = true;
            $('.myInput').val('请输入有效的电子邮件');
        }
    },

    checkIfWrongInput:function() {
        //console.log("here");
        if( this.isWrongInput) {
            $('.myInput').val('');
            this.isWrongInput = false;
        }
    },

    submitForm:function() {
        $.post("/china-mall-2020/download_whitepaper_zh.aspx", function(result) {

        }.bind(this));
    },

    isEmail:function(email) {
        var regex = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        return regex.test(email);
    },


    closeForm:function() {
        $('.emailForm').removeClass('show').addClass('hide');
    },

    fbShareHandler: function() {
        fbShare();
    },

    linkedInShareHandler: function() {
        linkedInShareHandler();
    },

    twitterShareHandler: function() {
        twitterShareHandler();
    },

    weiboShareHandler: function() {
        weiboShareHandler();
    },

    render:function() {
        //<input type="submit" className="submitBtn" value="Submit" onClick={this.checkForm} />

        /*<div id="scrollDownBtn">
         <img src="build/images/scrollbtn.png"/>
         </div>*/
        var n = "\n";
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
                            <a href="http://prezi.com/nq-7ppf0huc3/?utm_campaign=share&utm_medium=copy" target="_blank"><img src="build/images/viewprezi.png"/></a>
                        </div>
                    </div>
                </div>

                <div className="rightButtons">
                    <div id="socialMedia">
                        <div id="socialShare">
                            <a id="fbIcon" target='_blank' onClick={this.fbShareHandler} className="icons"><img src="build/images/fbicon.png"/></a>
                            <a id="linkedinIcon" onClick={this.linkedInShareHandler} className="icons"><img src="build/images/linkedinicon.png"/></a>
                            <a id="twitterIcon" onClick={this.twitterShareHandler} className="icons"><img src="build/images/twittericon.png"/></a>
                            <a id="weiboIcon" onClick={this.weiboShareHandler} target='_blank' href="javascript:" className="icons"><img src="build/images/weiboicon.png"/></a>
                        </div>
                    </div>
                    <a id="aboutAsia" target='_blank' href="http://www.taubmanasia.com.cn/">
                        <div id="asiaIcon"><img src="build/images/talkaboutasia.png"/></div>
                    </a>
                </div>



                <form className="emailForm" id="myEmailForm" method="POST" action="/china-mall-2020/download_whitepaper_zh.aspx">
                    <div className = "emailFormBg"></div>
                    <div className = "closeButton" onClick={this.closeForm}><img src="build/images/closebtn.png" /></div>
                    <div className = "contents">
                        <div className = "form2" ref="form2"><img src="./build/images/thankyou.png"/></div>
                        <div className = "form1" ref="form1">
                            <p>塔博曼亚洲感谢您下载{n}展望2020年的中国购物中心白皮书.</p>
                            <p>请输入您的个人资料</p>
                            <div className="formButtonBg">
                                <img src="build/images/formbtn.png"/>
                                <input type="text" id="email" name="email" className = "myInput" placeholder="请在这里输入" onClick={this.checkIfWrongInput}/>
                            </div>
                            <div className="submitBtn" onClick={this.checkForm}>
                                <img src="build/images/formsubmit.png" />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    }

});
