"use strict";
$(document).ready(function(){
  $(window).resize(function() {
  categoryChart();
  strackingChart();
  pieChart();
donutChart();
        });

  categoryChart();
  strackingChart();
  pieChart();
donutChart();
 
    /*categories chart*/
  function categoryChart(){
      var data = [ ["January", 20], ["February", 8], ["March", 4], ["April", 13], ["May", 5], ["June", 9] ];

    $.plot("#placeholder", [ data ], {
      series: {
        bars: {
          show: true,
          barWidth: 0.6,
          align: "center"
        }
      },
      xaxis: {
        mode: "categories",
        tickLength: 0
      }
    });
  };

    /*Stracking chart*/
 function strackingChart(){
    var d1 = [];
    for (var i = 0; i <= 10; i += 1) {
      d1.push([i, parseInt(Math.random() * 30)]);/*yellow*/
    }

    var d2 = [];
    for (var i = 0; i <= 10; i += 1) {
      d2.push([i, parseInt(Math.random() * 30)]);/*blue*/
    }

    var d3 = [];
    for (var i = 0; i <= 10; i += 1) {
      d3.push([i, parseInt(Math.random() * 30)]);/*red*/
    }

    var stack = 0,
      bars = false,
      lines = true,
      steps = false;

    function plotWithOptions() {
      $.plot("#placeholder1", [ d1, d2, d3 ], {
        series: {
          stack: stack,
          lines: {
            show: lines,
            fill: true,
            steps: steps
          },
          bars: {
            show: bars,
            barWidth: 0.6
          }
        }
      });
    }

    plotWithOptions();
  };

    

   /*pie chart-Withour legend*/
    function pieChart(){
  var data1 = [{
  label: "Sales & Marketing",
  data: 2034,
  color: "#62A83B"
}, {
  label: "Research & Development",
  data: 16410,
  color: "#2897CB"
}, {
  label: "General & Administration",
  data: 4670,
  color: "#DEAB34"
}];
  $.plot('#placeholder2', data1, {
    series: {
        pie: {
            show: true
        }
    },
    legend: {
        show: false
    }
});

  };
   

/*Donut Hole*/
 function donutChart(){
  
var data2 = [{
  label: "Sales & Marketing",
  data: 2034,
  color: "#62A83B"
}, {
  label: "Research & Development",
  data: 16410,
  color: "#2897CB"
}, {
  label: "General & Administration",
  data: 4670,
  color: "#DEAB34"
}];
  $.plot('#placeholder3', data2, {
    series: {
        pie: {
            innerRadius: 0.5,
            show: true
        },
         legend: {
        show: true
    }
    }
});
  };
});


