/** https://echarts.apache.org/en/option.html#xAxis **/

/* Iniciar gráfico - ID da div */
var dom = document.getElementById("grafico");
var myChart = echarts.init(dom);

var option = null;
var data = [];
var now = +new Date(2005, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
var eixoX = null;

for (var i = 0; i < 500; i++) {
    data.push(getRandom());
}

option = {
    
    xAxis: {
        type: 'time',
        show: false, 
        splitLine: {
            show: true
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [3, '100%'],
        splitLine: {
            show: true
        }
    },
    series: [{
        name: 'pressão',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: [5,6,7,8,9,2,8]
    }]
};

setInterval(function () {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(getRandom());
    }

    myChart.setOption({
        series: [{
            data: data
        }]
    });

}, 100);

function getRandom() {
    value = value + Math.random() * 21 / 10;
    now = new Date(+now + oneDay);
    eixoX++;

    if(Math.round(value) % 20 == 0){
        value = value * -1;
    }

    return {        
        value: [ eixoX, Math.round(value) ]
    };
}

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
