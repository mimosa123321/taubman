var React = require('React');
var $ = require('jquery-compat');

var PanelInfo = module.exports = React.createClass({
    componentDidMount: function () {
        this.props.model.eventProxy.addListener('reset',function() {
            $('.info1').removeClass('hide').addClass('show');
            $('.info2').removeClass('show').addClass('hide');
        });
        return {}
    },

    handleSubmit: function () {
        $('.info1').removeClass('show').addClass('hide');
        $('.info2').removeClass('hide').addClass('show');

        $('.info').find('.left').scrollTop(0);
    },

    render:function() {
        var n = "\n";

        /*<div id ="middle">
         <h2>RMB 6 trillion (USD 980 billion)</h2>
         <h3>Gross merchandise volume (GMV){n} of mobile payments in China in 2014</h3>
         <h2 className = "vs">VS</h2>
         <h2>RMB 330 billion (USD 52 billion)</h2>
         <h3>Total value of US mobile payments in 2014</h3>
         <h2 className = "vs">VS</h2>
         <h2>Over RMB 18 trillion (USD 3 trillion)</h2>
         <h3>China’s projected total value in 2018</h3>
         </div>*/

        return <div className="info">
            <div className="left">
                <div  className = "info1" >
                    <h1>中国领跑移动支付</h1>
                    <h3>虽然PayPal问世更早，Apple Pay登上新闻头条的次数更多，但最大的移动支付公司却是在中国。艾瑞咨询(iResearch)和弗雷斯特研究公司(Forrester)的数据表明，阿里巴巴和腾讯是占主导地位的移动支付提供商，中国现在的交易额远超美国。</h3>
                    <div id ="middle"><img src="./build/images/panelinfo.png"/></div>

                    <h2>中国移动支付迅猛发展的动力</h2>
                    <ul>
                        <li><img id="panelicon1" src="./build/images/panelicon1.png" /> <p>中国：2014年手机用户为15亿，而美国：2014年手机用户为2.5亿</p></li>
                        <li><img id="panelicon2" src="./build/images/panelinfo2.png" /> <p>在中国，拥有信用卡的人仅占10%，美国则占70%。中国消费者依赖其他支付方式来推动移动电子商务</p></li>
                    </ul>
                    <div className="goAliBtn" onClick={this.handleSubmit}><img src="./build/images/goalibtn.png" /></div>
                </div>

                <div className = "info2">
                    <h1>支付宝、财付通、PayPal对比</h1>
                    <h2>中国的业内翘楚稳步前进</h2>
                    <h3>快速浏览一下交易数字就会发现，尽管阿里巴巴等移动支付提供商问世比PayPal晚很多，但在交易额上却已把PayPal远远甩在后面。</h3>
                    <img className = "gLine" src="./build/images/schart.png" />
                    <h2>生态系统更大更广</h2>
                    <h3>尽管PayPal一直以核心电子商务交易为主营业务，但在推出移动支付的新使用方式上却可以说是滞后的。支付宝和财付通远远超出了传统商务的范畴，更深入地根植于消费者的生活方式，通过其平台和更广泛的生态系统提供更多功能和服务。</h3>
                </div>
            </div>

            <div className = "right">
                <div  className = "info1" >
                    <h1>2009年至2018年中国第三方移动支付成交金额（单位：十亿人民币）</h1>
                    <div className = "gLine"><img className = "gLineImg" src="./build/images/gline.png" /></div>
                    <img className = "chart" src="./build/images/chart.png" />
                </div>

                <div  className = "info2" >
                    <img className = "alipay" src="./build/images/alipay.png" />
                </div>
            </div>
        </div>
    }
});