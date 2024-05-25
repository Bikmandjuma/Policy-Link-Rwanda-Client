"use strict";
$(document).ready(function() {
  
  lineChart();
  areaChart();
  donutChart();

  $(window).resize(function() {
    window.lineChart.redraw();
    window.areaChart.redraw();
    window.donutChart.redraw();
  });
});

   /*Line chart*/
function lineChart() {
  window.lineChart = Morris.Line({
        element: 'line-example',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        redraw: true,
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors :['#2196F3','#ff5252']
    });
}

   /*Area chart*/
function areaChart() {
  window.areaChart = Morris.Area({
        element: 'area-example',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
    resize: true,
    redraw: true,
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors :['#40c4ff','#f57c00']
    });
}

 /*Donut chart*/
function donutChart() {
  window.areaChart = Morris.Donut({
        element: 'donut-example',
    redraw: true,
        data: [
            {label: "Download Sales", value: 2},
            {label: "In-Store Sales", value: 50},
            {label: "Mail-Order Sales", value: 20}
        ],
        colors : ['#40c4ff','#ff5252','#4CAF50']
    });
}

 
    

 
    

   
    