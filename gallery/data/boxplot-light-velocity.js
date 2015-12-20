var data = echarts.statistics.prepareBoxplotData([
    [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
    [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
    [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
    [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
    [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
]);

option = {
    title: [
        {
            text: 'Michelson-Morley Experiment',
            x: 'center',
        },
        {
            text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
            borderColor: '#999',
            borderWidth: 1,
            textStyle: {
                fontSize: 14
            },
            x: '10%',
            y: '90%'
        }
    ],
    legend: {
        data: ['line', 'line2', 'line3']
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        x: '10%',
        x2: '10%',
        y2: '15%'
    },
    xAxis: {
        type: 'category',
        data: data.axisData,
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: false
        },
        axisLabel: {
            formatter: 'expr {value}'
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: 'km/s minus 299,000',
        splitArea: {
            show: true
        }
    },
    series: [
        {
            name: 'boxplot',
            type: 'boxplot',
            data: data.boxData,
            tooltip: {
                formatter: function (param) {
                    return [
                        'Experiment ' + param.name + ': ',
                        'upper: ' + param.data[0],
                        'Q1: ' + param.data[1],
                        'median: ' + param.data[2],
                        'Q3: ' + param.data[3],
                        'lower: ' + param.data[4]
                    ].join('<br/>')
                }
            }
        },
        {
            name: 'outlier',
            type: 'scatter',
            data: data.outliers
        }
    ]
};