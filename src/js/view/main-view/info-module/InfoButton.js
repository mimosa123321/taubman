var React = require('React');
var $ = require('jquery-compat');


var InfoButton= module.exports = React.createClass({
    componentDidMount: function() {
        this.icon = ["./build/images/buttonicon1.png", "./build/images/buttonicon2.png" ,"./build/images/buttonicon3.png" ,"./build/images/buttonicon4.png"];
        this.iconOver = ["./build/images/buttonicon1b.png", "./build/images/buttonicon2b.png" ,"./build/images/buttonicon3b.png" ,"./build/images/buttonicon4b.png"];
        $('.button-unit').addClass('notChosen');

        this.handleSubmit(this.props.model.detailId);
    },

    handleSubmit: function(id) {
        var self = this;
        var index = id - 1;
        $('.button-unit').each(function(buttonId){
            if(buttonId != index) {
                $(this).removeClass('chosen hover').addClass('notChosen');
                $(this).find('.buttonTop').find('img').attr('src', self.icon[buttonId]);
            }
        });
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
            <div className = "button-unit " data-stellar-ratio="1.5" id="button1" onMouseOver={this.handleOver.bind(null,1)} onMouseOut={this.handleOut.bind(null,1)} onClick={this.handleSubmit.bind(null,1)}>
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img id="button1_img" src="./build/images/buttonicon1.png" />
                        <span className = "buttonTitle">零售业</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">未来最大的市场？{n}</span>中国2014年的零售额为26万亿人民币，位居世界第二，仅次于美国。</span>
                    </div>
                    <div className = "buttonDetail" id="buttonDetail1" onClick={this.handleSubmit.bind(null,1)}>
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span className="buttonDetailText">更多详情</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button2" onMouseOver={this.handleOver.bind(null,2)} onMouseOut={this.handleOut.bind(null,2)} onClick={this.handleSubmit.bind(null,2)}>
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon2.png" />
                        <span className = "buttonTitle">人口特征与经济</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText">预计2012年至2022年期间，上层中产阶级的年消费将猛增<span className = "boldText">22%:</span></span>
                    </div>
                    <div className = "buttonDetail" id="buttonDetail2" onClick={this.handleSubmit.bind(null,2)}>
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span className="buttonDetailText">更多详情</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button3" onMouseOver={this.handleOver.bind(null,3)} onMouseOut={this.handleOut.bind(null,3)} onClick={this.handleSubmit.bind(null,3)}>
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon3.png" />
                        <span className = "buttonTitle">电子商务方兴未艾</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText"><span className = "boldText">预计到2019年，</span> 中国电子商务产业总值将达到6.4万亿人民币</span>
                    </div>
                    <div className = "buttonDetail" id="buttonDetail3" onClick={this.handleSubmit.bind(null,3)}>
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span className="buttonDetailText">更多详情</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "button-unit" id="button4" onMouseOver={this.handleOver.bind(null,4)} onMouseOut={this.handleOut.bind(null,4)} onClick={this.handleSubmit.bind(null,4)}>
                <div className = "buttonContainer">
                    <div className = "buttonTop">
                        <div className = "center"></div>
                        <img src="./build/images/buttonicon4.png" />
                        <span className = "buttonTitle">购物中心</span>
                    </div>
                    <div className = "buttonLine"></div>
                    <div className = "buttonContent">
                        <div className = "center"></div>
                        <span className = "buttonText">在2014年建成的全球购物商场中，有<span className = "boldText">44%</span>位于中国</span>
                    </div>
                    <div className = "buttonDetail" id="buttonDetail4" onClick={this.handleSubmit.bind(null,4)}>
                        <div className= "buttonDetailContainer">
                            <span className = "center"></span>
                            <span className="buttonDetailText">更多详情</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
});
