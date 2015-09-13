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
                    <h1>China sets pace in{n}mobile payments </h1>
                    <h3>While PayPal has been around much longer and Apple Pay garners more headlines, the biggest players in mobile payments are in China. Alibaba and Tencent are the dominant providers and the numbers from China today far exceed the US, according to figures from iResearch and Forrester.</h3>
                    <div id ="middle"><img src="./build/images/panelinfo.png"/></div>

                    <h2>Drivers for China’s surge:</h2>
                    <ul>
                        <li><img id="panelicon1" src="./build/images/panelicon1.png" /> <p>China: 1.5 billion mobile phone users in 2014 vs{n}
                            US: 250 million in 2014</p></li>
                        <li><img id="panelicon2" src="./build/images/panelinfo2.png" /> <p>Only 10% in China have credit cards vs 70% in the US.{n}
                            Consumers seek other payment methods to enable{n}
                            mobile commerce</p></li>
                    </ul>
                    <div className="goAliBtn" onClick={this.handleSubmit}><img src="./build/images/goalibtn.png" /></div>
                </div>

                <div className = "info2">
                    <h1>Alipay  vs  Tenpay{n}vs  PayPal</h1>
                    <h2>CHINA'S LEADERS FORGING AHEAD </h2>
                    <h3>A quick look at the transaction numbers show that despite a much shorter history, providers like Alipay have left PayPal behind in terms of numbers. </h3>
                    <img className = "gLine" src="./build/images/schart.png" />
                    <h2>BIGGER AND BROADER ECO-SYSTEM </h2>
                    <h3>While PayPal has remained focused mainly on core e-commerce transactions, it is arguably behind the curve in pushing out the possibilities of new ways of using mobile payments. Alipay and Tenpay have reached far beyond traditional commerce and are more deeply embedded in consumers’ lifestyles with more features and services available through their platforms and wider eco-systems. </h3>
                </div>
            </div>

            <div className = "right">
                <div  className = "info1" >
                    <h1>china third-party mobile payments gmv 2009 - 2018{n} (RMB billions) </h1>
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