var React = require('React');

var InfoDetail = module.exports = React.createClass({

    render:function() {
        var n = '\n';
        return <div className = "detail">

            <div className = "contentPages">
                <div className="content opening" id="detailContent0">
                    <h1 className="title">到2018年，{n}中国势必成为世界第一{n}大零售市场</h1>
                    <img src="./build/images/content-opening-inline.png" />
                    <p>左边的信息图表突显了中国零售市场的庞大规模和潜力。它主要显示不断变化的人口特征和日益上升的消费能力，以及网络商务的增长和新购物中心的急速发展。审视这一世界上最炙手可热的零售市场的重要事实和数据。</p>
                    <p>点击地图上的各个信息图，深入探讨主要的市场推动因素。</p>
                </div>

                <div className="content retail" id="detailContent1">
                    <h1 className="title">零售业</h1>
                    <hr></hr>
                    <div className="box">
                        <h3>2018年世界零售业翘楚</h3>
                        <p>2013年，中国超越日本，成为世界第二大零售市场，普华永道(PWC)认为，到2018年，中国料将成为世界最大零售市场。到2018年，中国的零售增长率将高达7.9%，而北美则为2.6%，全球平均值为3.4%。</p>
                    </div>
                    <div className="box">
                        <h3>中国：首要零售投资目的地</h3>
                        <p>自2010年以来，科尔尼(AT Kearney)首次将中国排在“全球零售发展指数(GRDI)”榜单第一位。到2022年，中国的零售市场预计将增至51.2万亿人民币，是美国市场规模的两倍。该指数排出各市场在零售投资潜力上的名次。</p>
                    </div>
                    <div className="box">
                        <h3>2015年全球零售发展指数排名</h3>
                        <img src="./build/images/content-retail-inline.png" />
                    </div>
                </div>

                <div className="content demographics" id="detailContent2">
                    <h1 className="title">人口特征与经济</h1>
                    <hr></hr>
                    <div className="box">
                        <h3>消费低于世界水平</h3>
                        <p>中国的消费水平远远落后于其他先进经济体，截至2013年，消费仅占国内生产总值(GDP)的36%。麦肯锡(McKinsey)认为，到2020年，这一数字势必会达到50%。相比之下，2013年，美国的消费性开支占到GDP的68%，日本占到61%。</p>
                    </div>
                    <div className="box">
                        <h3>中国中产阶级迅速崛起</h3>
                        <p>2002年，仅有4%的中国大陆城镇居民被归入中产阶级。到2022年，这一数字将上升至78%。麦肯锡认为，私人消费的增长将发生一次大转移，从普通中产阶级转向上层中产阶级。</p>
                    </div>
                    <div className="box">
                        <h3>中国的财富分布</h3>
                        <img src="./build/images/content-demographics-inline.png" />
                    </div>
                </div>

                <div className="content ecommerce" id="detailContent3">
                    <h1 className="title">电子商务</h1>
                    <hr></hr>
                    <div className="box">
                        <h3>网络零售方兴未艾</h3>
                        <p>根据弗雷斯特研究公司(Forrester Research)的数据，中国电子商务行业已在世界上占据首位。在2014年，中国的网络销售总额估计达到2.8万亿人民币，而美国则为3040亿美元（1.9万亿人民币）。问题在于，电子商务的这种爆炸式迅猛发展会对传统零售业构成什么样的威胁，还是会提供什么样的补足。</p>
                    </div>
                    <div className="box">
                        <h3>移动电子商务日益成为潮流</h3>
                        <p>根据艾瑞咨询集团(iResearch)的报告，专家预测，到2018年，中国62%的网络购物将在移动设备上进行。这显示，创新推动了国内电子商务巨头在移动销售上的发展速度，远超亚马逊等美国同行。</p>
                    </div>
                    <div className="box">
                        <h3><img src="./build/images/flag.png"/>中国网络消费者的购买情境分析</h3>
                        <img src="./build/images/content-ecommerce-inline.png" />
                    </div>
                </div>


                <div className="content malls" id="detailContent4">
                    <h1 className="title">购物中心 </h1>
                    <hr></hr>
                    <div className="box">
                        <h3>中国购物中心继续增长</h3>
                        <p>随着中国的零售消费持续增长，中国各地城市的购物中心数量也随之增长。根据德勤(Deloitte)的报告，过去四年，中国的购物中心数量已经猛增40%以上。</p>
                    </div>
                    <div className="box">
                        <h3>中国：新购物中心的家园</h3>
                        <p>在全球兴建购物中心面积最多的十大城市中，中国就占了八个。根据中国连锁经营协会和专业服务公司德勤的数据，到2015年末，新购物中心的总数预计将增至4,000家。</p>
                    </div>
                    <div className="box">
                        <h3>兴建购物中心面积最多的十大城市</h3>
                        <img src="./build/images/content-mall-inline.png" />
                    </div>
                </div>
            </div>

        </div>
    }

});
