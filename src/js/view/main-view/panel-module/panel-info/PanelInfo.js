var React = require('React');
var $ = require('jquery-compat');

var PanelInfo = module.exports = React.createClass({
    componentDidMount: function () {
        return {}
    },

    handleSubmit: function () {
        console.log('click');
        //show info 2 hide info 1
        $('.info1').removeClass('show').addClass('hide');
        $('.info2').removeClass('hide').addClass('show');
    },

    render:function() {
        var n = "\n";

        return <div className="info">
            <div className="left">
                <div  className = "info1" >
                    <h1>China sets pace in mobile payments </h1>
                    <h3>While Paypal has been around much longer and Apple Pay garners more headlines, the biggest players in mobile payments are in China. Alibaba and Tencent are the dominant providers and the numbers from China today far exceed the US, according to figures from iResearch and Forrester. </h3>
                    <div id ="middle">
                        <h2>RMB 6 trillion (US$ 980 billion)</h2>
                        <h3>Gross merchandise volume (GMV) {n} of mobile payments in China in 2014</h3>
                        <h2 className = "vs">VS</h2>
                        <h2>RMB 330 billion (US$ 52billion)</h2>
                        <h3>Total value of US mobile payments in 2014</h3>
                        <h2 className = "vs">VS</h2>
                        <h2>Over RMB 18 trillion (US$ 52billion)</h2>
                        <h3>China’s projected total value in 2018</h3>
                    </div>

                    <h2>Drivers for China’s surge:</h2>
                    <ul>
                        <li>China: 1.5 billion mobile phone users in 2014 vs
                            USA: 250 million in 2014</li>
                        <li>Only 10% in China have credit cards / history vs
                            70% in the US: consumers seek other payment
                            methods to enable mobile commerce</li>
                    </ul>
                    <div className="goAliBtn" onClick={this.handleSubmit}><img src="./build/images/goalibtn.png" /></div>
                </div>

                <div className = "info2">
                    <h1>Alipay  vs  Tenpay{n}vs  Paypal</h1>
                    <h3>China’s leaders leading the world? </h3>
                    <h3>A quick look at the transaction numbers show that despite a much shorter history, providers like Alipay have left PayPal behind in terms of sheer numbers. </h3>
                    <img className = "gLine" src="./build/images/schart.png" />
                    <h3>Bigger and broader eco-system </h3>
                    <h3>While Paypal has remained focused mainly on core e-commerce transactions, it is arguably behind the curve in pushing out the possibilities of new ways of using mobile payments. Alipay and Tenpay have reached far beyond traditional commerce and are more deeply embedded in consumers’ lifestyles with more features and services available through their platforms and wider eco-systems. </h3>
                </div>
            </div>

            <div className = "right">
                <div  className = "info1" >
                    <h1>china third-party mobile payments gmv 2009 - 2018{n} (RMB billions) </h1>
                    <img className = "gLine" src="./build/images/gline.png" />
                    <img className = "chart" src="./build/images/chart.png" />
                </div>

                <div  className = "info2" >
                    <img className = "alipay" src="./build/images/alipay.png" />
                </div>
            </div>
        </div>
    }
});