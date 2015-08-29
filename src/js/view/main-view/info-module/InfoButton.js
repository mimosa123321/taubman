var React = require('./../../../../../node_modules/react/lib/React');
var $ = require('jquery-compat');


var InfoButton= module.exports = React.createClass({
    componentDidMount: function() {
        this.icon = ["./build/images/buttonicon1.png", "./build/images/buttonicon2.png" ,"./build/images/buttonicon3.png" ,"./build/images/buttonicon4.png"];
        this.iconOver = ["./build/images/buttonicon1b.png", "./build/images/buttonicon2b.png" ,"./build/images/buttonicon3b.png" ,"./build/images/buttonicon4b.png"];
        $('.button-unit').addClass('notChosen');

        if (Modernizr.csstransitions){
            this.handleSubmit(this.props.model.detailId);
        }

    },

    handleSubmit: function(id) {
        var index = id - 1;
        $('.button-unit').removeClass('chosen hover').addClass('notChosen');
        $('#button' + id).removeClass('notChosen').addClass('chosen');
        $('#button' + id).find('.buttonTop').find('img').attr('src', this.iconOver[index]);

        this.props.model.eventProxy.emit('onClickInfoButton', index);
    },

    handleOver: function(id) {
        $('.button-unit').removeClass('hover');
        $('#button' + id).addClass('hover');
        var index = id - 1;
        $('#button' + id).find('.buttonTop').find('img').attr('src', this.iconOver[index]);

    },

    handleOut: function(id) {
        var index = id - 1;
        $('#button' + id).removeClass('hover');
        if(!$('#button' + id).hasClass('chosen')) {
            $('#button' + id).find('.buttonTop').find('img').attr('src', this.icon[index]);
        }

    },

    render:function() {
        //console.log(this.props.model);
        var n = "\n";
        return <div className = "buttons">
            <div className = "button-unit" id="button1" onMouseOver={this.handleOver.bind(null,1)} onMouseOut={this.handleOut.bind(null,1)}>
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img id="button1_img" src="./build/images/buttonicon1.png" />
                        <span className = "buttonTitle">Retail Industry</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">No. 1 tomorrow ? {n}</span>China's RMB 26 trillion in retail sales to the US</span>
                    </div>
                    <div className = "buttonDetail" id="buttonDetail1" onClick={this.handleSubmit.bind(null,1)}>
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span className="buttonDetailText">more details</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button2" onMouseOver={this.handleOver.bind(null,2)} onMouseOut={this.handleOut.bind(null,2)}>
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon2.png" />
                        <span className = "buttonTitle">Demographics and Economy</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">22%:</span> Projected spending surge by upper middle class from 2012 to 2022 </span>
                    </div>
                    <div className = "buttonDetail" id="buttonDetail2" onClick={this.handleSubmit.bind(null,2)}>
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span className="buttonDetailText">more details</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button3" onMouseOver={this.handleOver.bind(null,3)} onMouseOut={this.handleOut.bind(null,3)}>
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon3.png" />
                        <span className = "buttonTitle">E-Commerce</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">RMB 6.4 trillion:</span> Predicted value of China's e-commerce sector by 2019 </span>
                    </div>
                    <div className = "buttonDetail" id="buttonDetail3" onClick={this.handleSubmit.bind(null,3)}>
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span className="buttonDetailText">more details</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button4" onMouseOver={this.handleOver.bind(null,4)} onMouseOut={this.handleOut.bind(null,4)}>
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon4.png" />
                        <span className = "buttonTitle">Shopping Malls</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">30% bigger:</span> China's malls versus malls abroad – the average mall in China is 95,000 square meters </span>
                    </div>
                    <div className = "buttonDetail" id="buttonDetail4" onClick={this.handleSubmit.bind(null,4)}>
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span className="buttonDetailText">more details</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
});
