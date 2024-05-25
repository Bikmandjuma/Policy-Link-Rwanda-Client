  'use strict';
$(document).ready(function() {
			/* Example 1 */
			$('#ex1').slider({
				formatter: function(value) {
					return value;
				}
			});

			/* Example 2 */
			$("#ex2").slider({});

			/* Example 3 */
			var RGBChange = function() {
				$('#RGB').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
			};

			var r = $('#R').slider()
					.on('slide', RGBChange)
					.data('slider');
			var g = $('#G').slider()
					.on('slide', RGBChange)
					.data('slider');
			var b = $('#B').slider()
					.on('slide', RGBChange)
					.data('slider');

			/* Example 4 */
			$("#ex4").slider({
				reversed: true
			});

			/* Example 5 */
			$("#ex5").slider();
			$("#destroyEx5Slider").on('click',function() {
				$("#ex5").slider('destroy');
			});

			/* Example 6 */
			$("#ex6").slider();
			$("#ex6").on('slide', function(slideEvt) {
				$("#ex6SliderVal").text(slideEvt.value);
			});

			/* Example 7 */
			$("#ex7").slider();
			$("#ex7-enabled").on('click',function() {
				if (this.checked) {
					$("#ex7").slider("enable");
				} else {
					$("#ex7").slider("disable");
				}
			});

			/* Example 8 */
			$("#ex8").slider({
				tooltip: 'always'
			});

			/* Example 9 */
			$("#ex9").slider({
				precision: 2,
				value: 8.115,
				step: 0.1, min: 0, max: 10
			});

			/* Example 10 */
			$("#ex10").slider({});

			/* Example 11 */
			$("#ex11").slider({
				step: 20000,
				min: 0,
				max: 200000
			});

			/* Example 12 */
			$("#ex12a").slider({
				id: "slider12a",
				min: 0,
				max: 10,
				value: 5
			});
			$("#ex12b").slider({
				id: "slider12b",
				min: 0,
				max: 10,
				range: true,
				value: [3, 7]
			});
			$("#ex12c").slider({
				id: "slider12c",
				min: 0,
				max: 10,
				range: true,
				value: [3, 7]
			});

			/* Example 13 */
			$("#ex13").slider({
				ticks: [0, 100, 200, 300, 400],
				ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
				ticks_snap_bounds: 30,
				value: 200
			});

			/* Example 14 */
			$("#ex14").slider({
				ticks: [0, 100, 200, 300, 400],
				ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
				ticks_positions: [0, 30, 70, 90, 100],
				ticks_snap_bounds: 20,
				value: 200,
				reversed: true
			});

			/* Example 15 */
			$("#ex15").slider({
				min: 10,
				max: 1000,
				scale: 'logarithmic',
				step: 10
			});

			/* Example 16 */
			$("#ex16a").slider({
				min: 0,
				max: 10,
				value: 0,
				focus: true
			});
			$("#ex16b").slider({
				min: 0,
				max: 10,
				value: [0, 10],
				focus: true
			});

			/* Example 17 */
			$("#ex17a").slider({
				min: 0,
				max: 10,
				value: 0,
				tooltip_position: 'bottom'
			});
			$("#ex17b").slider({
				min: 0,
				max: 10,
				value: 0,
				orientation: 'vertical',
				tooltip_position: 'left'
			});

			/* Example 18 */
			$('#ex18a').slider({
				min: 0,
				max: 10,
				value: 5,
				labelledby: 'ex18-label-1'
			});

			$('#ex18b').slider({
				min: 0,
				max: 10,
				value: [3, 6],
				labelledby: ['ex18-label-2a', 'ex18-label-2b']
			});

			$('#ex20a').on('click', function(e) {
				$('#ex20a')
						.parent()
						.find(' >.well')
						.toggle()
						.find('input')
						.slider('relayout');
				e.preventDefault();
			});


			/* Example 23 */
			$('#ex23').slider({
				ticks: [0, 1, 2, 3, 4],
				ticks_positions: [0, 30, 70, 90, 100],
				formatter: function(value) {
					return  value;
				},
				step: 0.01,
				ticks_tooltip: true
			});
		});