var React = require('React');

var InfoDetail = module.exports = React.createClass({

    render:function() {
        var n = '\n';
        return <div className = "detail">

            <div className = "contentPages">
                <div className="content opening" id="detailContent0">
                    <h1 className="title">China set to become{n}the world's number 1{n}retail market by 2018</h1>
                    <img src="./build/images/content-opening-inline.png" />
                    <p>This infographic highlights the sheer size and potential of China's retail market. It focuses on changing demographics and rising spending power, as well as the growth in online commerce and lightspeed development of new malls. Dive into the key facts and figures on the world’s hottest retail market.</p>
                    <p>CLICK on each of the icons on the map to explore the key market drivers in depth.</p>
                </div>

                <div className="content retail" id="detailContent1">
                    <h1 className="title">Retail Industry</h1>
                    <hr></hr>
                    <div className="box">
                        <h3>World's Retail Leader by 2018</h3>
                        <p>In 2013, China surpassed Japan to become the world's second largest consumer market. It is expected to take the top spot as the world's largest retail market by 2018, according to PWC. Retail sales volume growth will hit 7.9% by 2018, compared with 2.6% for North America and the global average of 3.4%.  </p>
                    </div>
                    <div className="box">
                        <h3>China: the Top Retail Investment Destination</h3>
                        <p>AT Kearney has ranked China first in the Global Retail Development Index (GRDI) for the first time since 2010. China's retail market is expected to grow to RMB 51.2 trillion by 2022 — double the size of the US market. The index ranks markets for retail investment potential.</p>
                    </div>
                    <div className="box">
                        <h3>2015 Global retail development index ranking</h3>
                        <img src="./build/images/content-retail-inline.png" />
                    </div>
                </div>

                <div className="content demographics" id="detailContent2">
                    <h1 className="title">Demographics and Economy</h1>
                    <hr></hr>
                    <div className="box">
                        <h3>Spending below world levels</h3>
                        <p>China’s consumption levels remain well behind those of other advanced economies, at just 36% of GDP as of 2013. According to McKinsey, by 2020 this figure is set to reach 50%. By comparison, consumer spending accounted for 68% of GDP in the US in 2013 and 61% in Japan.</p>
                    </div>
                    <div className="box">
                        <h3>China's Middle Class Boom</h3>
                        <p>In 2002, a mere 4% of China's mainland urban residents were identified as middle class. By 2022, that figure will rise to 78%. Growth in private consumption will come from a big shift from mass middle class to upper middle class, according to McKinsey.</p>
                    </div>
                    <div className="box">
                        <h3>China’s Wealth Distribution</h3>
                        <img src="./build/images/content-demographics-inline.png" />
                    </div>
                </div>

                <div className="content ecommerce" id="detailContent3">
                    <h1 className="title">E-Commerce</h1>
                    <hr></hr>
                    <div className="box">
                        <h3>ONLINE RETAIL BOOM</h3>
                        <p>China's e-commerce industry is already the largest in the world, according to Forrester research. Estimates for China’s online sales in 2014 have totaled RMB 2.8 trillion, while total for the US in 2014 is estimated at USD 304 billion (RMB 1.9 trillion). The question is how this e-commerce explosion will threaten or supplement traditional retail.</p>
                    </div>
                    <div className="box">
                        <h3>M-Commerce Emerges as a{n}Growing Trend</h3>
                        <p>According to iResearch, experts predict that by 2018, 62% of online purchases in China will be made on mobile devices. An emphasis on innovation has allowed mainland e-commerce giants to grow their mobile sales at a rate that surpasses their US counterparts, such as Amazon.</p>
                    </div>
                    <div className="box">
                        <h3><img src="./build/images/flag.png"/>China’s online shoppers in context</h3>
                        <img src="./build/images/content-ecommerce-inline.png" />
                    </div>
                </div>


                <div className="content malls" id="detailContent4">
                    <h1 className="title">Shopping Malls</h1>
                    <hr></hr>
                    <div className="box">
                        <h3>Chinese Malls Continue to Grow</h3>
                        <p>As China's retail consumption has continued to grow, so too have the number of malls in its cities. In the last four years, the number of malls in China has jumped by more than 40%, according to Deloitte.</p>
                    </div>
                    <div className="box">
                        <h3>China: The Home of New Malls</h3>
                        <p>The country is home to eight out of the top 10 cities for mall space under construction. The total number of new malls is projected to increase to 4,000 by the end of 2015, according to the China Chain Store Association and professional services firm Deloitte.</p>
                    </div>
                    <div className="box">
                        <h3>TOP 10 global cities in shopping-center space under construction </h3>
                        <img src="./build/images/content-mall-inline.png" />
                    </div>
                </div>
            </div>

        </div>
    }

});
