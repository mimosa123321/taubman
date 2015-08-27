var React = require('./../../../../../node_modules/react/lib/React');

var InfoButton= module.exports = React.createClass({
    componentDidMount: function() {

    },

    render:function() {
        var n = "\n";
        return <div className = "buttons">
            <div className = "button-unit" id="button1">
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon1.png" />
                        <span className = "buttonTitle">Demographics{n} and Economy</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">No. 1 tomorrow ? {n}</span>China's RMB 26 trillion in retail sales to the US</span>
                    </div>
                    <div className = "buttonDetail">
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span>more details</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button2">
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon2.png" />
                        <span className = "buttonTitle">E-Commerce</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">22%:</span> Projected spending surge by upper middle class from 2012 to 2022 </span>
                    </div>
                    <div className = "buttonDetail">
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span>more details</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button3">
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon3.png" />
                        <span className = "buttonTitle">Demographics{n} and Economy</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">22%:</span> Projected spending surge by upper middle class from 2012 to 2022 </span>
                    </div>
                    <div className = "buttonDetail">
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span>more details</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button4">
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon4.png" />
                        <span className = "buttonTitle">Demographics{n} and Economy</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">22%:</span> Projected spending surge by upper middle class from 2012 to 2022 </span>
                    </div>
                    <div className = "buttonDetail">
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span>more details</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
});


/*
 <div className = "buttonBg"><img src="./build/images/infobg1.png" /></div>



 <div className = "buttonDetail"><img src="./build/images/infodetailbtn1.png" /></div>
 */