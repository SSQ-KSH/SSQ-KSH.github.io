setTimeout(()=>{
    echart_1()
    echart_2()
    echart_3()
    echart_4()
}, 50)    

function echart_1 () {
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('main'));

     // 指定图表的配置项和数据
     var option = {
      "color": [
        "#84b5c9",
     
      ],
       title: {
         text: '冬奥会历届金牌榜',
         left: "center",
         textStyle: {
          fontSize: 30,
          color:"#ffffff",
         },
         subtext: '数据来源：搜狗百科',
         subtextStyle:{
                color:"#aeaeb3",
                lineHeight:20,
                width:180,
                fontStyle: "italic",
                overflow:"break",
          }
         },
       tooltip: {},
       toolbox: {
        top:20,
        iconStyle: {
         
          borderColor: "#83838a",
        },
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
       legend: {
         data: ['金牌榜']
       },
       xAxis: {
        axisLine:{
          LineStyle:{
            color:"#b8b8bb"
          },
        },
        axisLabel: {
          show: true,
          color: '#b8b8bb',
          fontSize: 16
        },
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
         data: ['挪威', '美国', '德国', '苏联', '加拿大','奥地利', '瑞典', '瑞士', '俄罗斯', '芬兰']
       },
       yAxis: {
        axisLine:{
          LineStyle:{
            color:"#b8b8bb"
          },
        },
        axisLabel: {
          show: true,
          color: '#b8b8bb',
          fontSize: 16
        },
        type: 'value'
       },
       series: [
         {
           name: '金牌',
           type: 'bar',
           data: [132, 105 , 92, 78, 73, 64, 57, 55, 51, 43],
           markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
 
         }
       ]
     };
 
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}

function echart_2 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_b'));

    option = {
      "color": [
        "#91d6eb",
        "#c48cb5",
        "#9d8dbc",
      ],

      
      title: {
        text: '北京冬奥会奖牌榜',
        left: "center",
         textStyle: {
          fontSize: 30,
          color:"#ffffff",
         },
         subtext: '数据来源：搜狗百科',
         subtextStyle:{
                color:"#aeaeb3",
                lineHeight:20,
                width:180,
                fontStyle: "italic",
                overflow:"break",
          },
        
         
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      toolbox: {
        top:20,
        right:50,
        iconStyle: {
         
          borderColor: "#83838a",
        },
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        top: 'bottom'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        axisLine:{
          LineStyle:{
            color:"#b8b8bb"
          },
        },
        axisLabel: {
          show: true,
          color: '#b8b8bb',
          fontSize: 16
        },
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        axisLine:{
          LineStyle:{
            color:"#b8b8bb"
          },
        },
        axisLabel: {
          show: true,
          color: '#b8b8bb',
          fontSize: 16
        },
        type: 'category',
        data: ['挪威', '德国', '中国',  '美国', '瑞典', '荷兰','奥地利', '瑞士', '俄罗斯奥委会', '法国']
      },
      series: [
        {
          name: '金牌',
          type: 'bar',
          data: [16,12,9,8,8,8,7,7,6,5]
        },
        {
          name: '银牌',
          type: 'bar',
          data: [8,10,4,10,5,5,7,2,12,7]
        },
        {
          name: '铜牌',
          type: 'bar',
          data: [13,5,2,7,5,4,4,5,14,2]
        },
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function echart_3 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_c'));
    // 指定图表的配置项和数据
    option = {
      "color": [
        "#bee3f1",
        "#a2efb7",
        "#fbe4ab",
        "#fcbdc5",
        "#8db68f",
        "#dcafcd",
        "#9b8bba",
        
    ],


      title: {
        text: '观众对冬奥会项目的喜爱度',
        right:300,
        subtext: '数据来源：网易新闻',
        subtextStyle:{
                lineHeight:20,
                width:180,
                fontStyle: "italic",
                overflow:"break",
        },

      },
      legend: {
        top: 'bottom'
      },
      toolbox: {
     
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [30, 240],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 7
          },
          data: [
            { value: 94112770, name: '冰球' },
            { value: 65192120, name: '短道速滑' },
            { value: 49660780, name: '花样滑冰' },
            { value: 16844830, name: '速度滑冰' },
            { value: 15204510, name: '冰壶' },
            { value: 14156040, name: '高山滑雪' },
            { value: 4336960, name: '雪橇' }
          ]
        }
      ]
    };
    
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}

function echart_4 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_q'));
    option = {
      "color": [
        "#bc89b0",
     
      ],
      title: {
        text: '历届冬奥举办地',
        left: "center",
         textStyle: {
          fontSize: 30,
          color:"#ffffff",
         },
         subtext: '数据来源:北京冬奥会官网',
         subtextStyle:{
                color:"#aeaeb3",
                lineHeight:20,
                width:180,
                fontStyle: "italic",
                overflow:"break",
          },
      },
      toolbox: {
        top:20,
        right:50,
        iconStyle: {
         
          borderColor: "#83838a",
        },
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },


      xAxis: {
        axisLine:{
          LineStyle:{
            color:"#b8b8bb"
          },
        },
        axisLabel: {
          show: true,
          color: '#b8b8bb',
          fontSize: 16
        },
        interval:0,
        type: 'category',
        data: ['夏慕尼', '圣莫里茨', '普莱西德湖', '加米施-帕滕基兴', '圣莫里茨', '奥斯陆', '科尔蒂纳丹佩佐',
        '斯阔谷', '因斯布鲁克','普莱西德湖',  '格勒诺布尔', '札幌', '因斯布鲁克', '普莱西德湖', '卡尔加里',
        '阿尔贝维尔', '利勒哈默尔', '长野', '盐湖城', '都灵', '温哥华', '索契',
        '平昌', '北京', '米兰-科尔蒂纳丹佩佐',
      ]
      },
      yAxis: {
        axisLine:{
          LineStyle:{
            color:"#b8b8bb"
          },
        },
        axisLabel: {
          show: true,
          color: '#b8b8bb',
          fontSize: 16
        },
        type: 'value',
        min:1910,
        data: [1920,1930,1940,1950,1960,1970,1980,1990,2000,2010,2020,2030]
      },
      tooltip: {},
      series: [
        {
          data: [1924, 1928, 1932,1936,1948,1952,1956,1960,1964,1968,1972,1976,1980,1984,1988,1992,1994,1998,2002,2006,2010,2014,2018,2022,2026],
          type: 'line',
          smooth: true
        }
      ]
    };
     myChart.setOption(option);
}
