"use strict";
$(document).ready(function() {

    $('.checkbox-ripple').rkmd_checkboxRipple();
    change_checkbox_color();

    // Single Search Select
    $(".js-example-basic-single").select2();
    $(".js-example-disabled-results").select2();
    // Multi Select
    $(".js-example-basic-multiple").select2();

    // With Placeholder
    $(".js-example-placeholder-multiple").select2({
        placeholder: "Select Your Name"
    });

    //Limited Numbers
    $(".js-example-basic-multiple-limit").select2({
        maximumSelectionLength: 2
    });

    // Tagging Suppoort
    $(".js-example-tags").select2({
        tags: true
    });

    // Automatic tokenization
    $(".js-example-tokenizer").select2({
        tags: true,
        tokenSeparators: [',', ' ']
    });

    // Loading Array Data
    var data = [{
        id: 0,
        text: 'enhancement'
    }, {
        id: 1,
        text: 'bug'
    }, {
        id: 2,
        text: 'duplicate'
    }, {
        id: 3,
        text: 'invalid'
    }, {
        id: 4,
        text: 'wontfix'
    }];

    $(".js-example-data-array").select2({
        data: data
    });

    //RTL Suppoort

    $(".js-example-rtl").select2({
        dir: "rtl"
    });
    // Diacritics support
    $(".js-example-diacritics").select2();

    // Responsive width Search Select
    $(".js-example-responsive").select2();

    $(".js-example-basic-hide-search").select2({
        minimumResultsForSearch: Infinity
    });

    $(".js-example-disabled").select2({
        disabled: true
    });
    $(".js-programmatic-enable").on("click", function() {
        $(".js-example-disabled").prop("disabled", false);
    });
    $(".js-programmatic-disable").on("click", function() {
        $(".js-example-disabled").prop("disabled", true);
    });

    $(".js-example-theme-single").select2({
        theme: "classic"
    });

    function formatRepo(repo) {
        if (repo.loading) return repo.text;

        var markup = "<div class='select2-result-repository clearfix'>" +
            "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
            "<div class='select2-result-repository__meta'>" +
            "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";

        if (repo.description) {
            markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
        }

        markup += "<div class='select2-result-repository__statistics'>" +
            "<div class='select2-result-repository__forks'><i class='icofont icofont-flash'></i> " + repo.forks_count + " Forks</div>" +
            "<div class='select2-result-repository__stargazers'><i class='icofont icofont-star'></i> " + repo.stargazers_count + " Stars</div>" +
            "<div class='select2-result-repository__watchers'><i class='icofont icofont-eye-alt'></i> " + repo.watchers_count + " Watchers</div>" +
            "</div>" +
            "</div></div>";

        return markup;
    }

    function formatRepoSelection(repo) {
        return repo.full_name || repo.text;
    }

    $(".js-data-example-ajax").select2({
        ajax: {
            url: "https://api.github.com/search/repositories",
            dataType: 'json',
            delay: 250,
            data: function(params) {
                return {
                    q: params.term, // search term
                    page: params.page
                };
            },
            processResults: function(data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                params.page = params.page || 1;

                return {
                    results: data.items,
                    pagination: {
                        more: (params.page * 30) < data.total_count
                    }
                };
            },
            cache: true
        },
        escapeMarkup: function(markup) {
            return markup;
        }, // let our custom formatter work
        minimumInputLength: 1,
        templateResult: formatRepo, // omitted for brevity, see the source of this page
        templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
    });
    // ====== Max-length js starts ====== //

    // Default max-length
    $('input[maxlength]').maxlength();

    // Thresold value
    $('input.thresold-i').maxlength({
        threshold: 20
    });

    //Color class
    $('input.color-class').maxlength({
        alwaysShow: true,
        threshold: 10,
        warningClass: "label label-success",
        limitReachedClass: "label label-danger"
    });

    //Position class
    $('input.position-class').maxlength({
        alwaysShow: true,
        placement: 'top-left'
    });

    // Textareas max-length
    $('textarea.max-textarea').maxlength({
        alwaysShow: true
    });

    // ======= multi-select js start ======== //
    $('#my-select').multiSelect();
    $('#public-methods').multiSelect();
    $('#select-all').on('click',function() {
        $('#public-methods').multiSelect('select_all');
        return false;
    });
    $('#deselect-all').on('click',function() {
        $('#public-methods').multiSelect('deselect_all');
        return false;
    });
    $('#select-5').on('click',function() {
        $('#public-methods').multiSelect('select', ['elem_1', 'elem_3', 'elem_4', 'elem_5']);
        return false;
    });
    $('#deselect-5').on('click',function() {
        $('#public-methods').multiSelect('deselect', ['elem_1', 'elem_3', 'elem_4', 'elem_5']);
        return false;
    });
    $('#refresh').on('click', function() {
        $('#public-methods').multiSelect('refresh');
        return false;
    });
    $('#add-option').on('click', function() {
        $('#public-methods').multiSelect('addOption', {
            value: 42,
            text: 'test 42',
            index: 0
        });
        return false;
    });
    $('#optgroup').multiSelect({
        selectableOptgroup: true
    });
    $('#custom-headers1').multiSelect({
        selectableHeader: "<div class='custom-header'>Selectable items</div>",
        selectionHeader: "<div class='custom-header'>Selection items</div>",
        selectableFooter: "<div class='custom-header'>Selectable footer</div>",
        selectionFooter: "<div class='custom-header'>Selection footer</div>"
    });
    // Single Select
    $('#example-single').multiselect();

    // Multi Select
    $('#example-multiple-selected').multiselect();

    // Multi Group Select
    $('#example-multiple-optgroups').multiselect();

    // Select all group select
    $('#example-enableClickableOptGroups').multiselect({
        enableClickableOptGroups: true
    });

    // Disable Options Select
    $('#example-enableClickableOptGroups-init').multiselect({
        enableClickableOptGroups: true
    });

    // Collapse group select
    $('#example-enableCollapsibleOptGroups').multiselect({
        enableCollapsibleOptGroups: true
    });
    $('.searchable').multiSelect({
        selectableHeader: "<input type='text' class='form-control' autocomplete='off' placeholder='try \"12\"'>",
        selectionHeader: "<input type='text' class='form-control' autocomplete='off' placeholder='try \"4\"'>",
        afterInit: function(ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                $selectionSearch = that.$selectionUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

            that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
                .on('keydown', function(e) {
                    if (e.which === 40) {
                        that.$selectableUl.focus();
                        return false;
                    }
                });

            that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
                .on('keydown', function(e) {
                    if (e.which == 40) {
                        that.$selectionUl.focus();
                        return false;
                    }
                });
        },
        afterSelect: function() {
            this.qs1.cache();
            this.qs2.cache();
        },
        afterDeselect: function() {
            this.qs1.cache();
            this.qs2.cache();
        }
    });
    // ===== Tags js ===== //

    // simple input

    $(".tags_add_multiple").tagsinput('items');
    // Max tags
    $('.tags_add_max').tagsinput({
        maxTags: 3
    });

    // max character in tags
    $('.tags_max_char').tagsinput({
        maxChars: 8
    });

    //====== Bootstrap Date-Picker js ======//
    // Minimum setup
    $('#datetimepicker1').datetimepicker({
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });
    // Using Locales
    $('#datetimepicker2').datetimepicker({
        locale: 'ru',
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });
    // Custom Formats
    $('#datetimepicker3').datetimepicker({
        format: 'LT',
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });
    // No Icon (input field only)
    $('#datetimepicker4').datetimepicker({
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });
    // Enabled/Disabled Dates
    $('#datetimepicker5').datetimepicker({
        defaultDate: "11/1/2013",
        disabledDates: [
            moment("12/25/2013"),
            new Date(2013, 11 - 1, 21),
            "11/22/2013 00:53"
        ],
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });
    // Linked Pickers
    $('#datetimepicker6').datetimepicker({
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });
    $('#datetimepicker7').datetimepicker({
        useCurrent: false, //Important! See issue #1075
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });
    $("#datetimepicker6").on("dp.change", function(e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function(e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });

    // Custom icons
    $('#datetimepicker8').datetimepicker({
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down"
        }
    });

    // View Mode
    $('#datetimepicker9').datetimepicker({
        viewMode: 'years',
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });

    // Min View Mode
    $('#datetimepicker10').datetimepicker({
        viewMode: 'years',
        format: 'MM/YYYY',
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });
    // Disabled Days of the Week
    $('#datetimepicker11').datetimepicker({
        daysOfWeekDisabled: [0, 6],
        icons: {
            time: "icofont icofont-clock-time",
            date: "icofont icofont-ui-calendar",
            up: "icofont icofont-rounded-up",
            down: "icofont icofont-rounded-down",
            next: "icofont icofont-rounded-right",
            previous: "icofont icofont-rounded-left"
        }
    });

    //Date and time picker
    $(document).ready(function() {
        $('#date').bootstrapMaterialDatePicker({
            time: false,
            clearButton: true
        });

        $('#time').bootstrapMaterialDatePicker({
            date: false,
            shortTime: false,
            format: 'HH:mm'
        });

        $('#date-format').bootstrapMaterialDatePicker({
            format: 'dddd DD MMMM YYYY - HH:mm'
        });
        $('#date-fr').bootstrapMaterialDatePicker({
            format: 'DD/MM/YYYY HH:mm',
            lang: 'fr',
            weekStart: 1,
            cancelText: 'ANNULER',
            nowButton: true,
            switchOnClick: true
        });

        $('#date-end').bootstrapMaterialDatePicker({
            weekStart: 0,
            format: 'DD/MM/YYYY HH:mm'
        });
        $('#date-start').bootstrapMaterialDatePicker({
            weekStart: 0,
            format: 'DD/MM/YYYY HH:mm',
            shortTime: true
        }).on('change', function(e, date) {
            $('#date-end').bootstrapMaterialDatePicker('setMinDate', date);
        });

        $('#min-date').bootstrapMaterialDatePicker({
            format: 'DD/MM/YYYY HH:mm',
            minDate: new Date()
        });
        $('#date-fr').bootstrapMaterialDatePicker({
            format: 'DD/MM/YYYY HH:mm',
            lang: 'fr',
            weekStart: 1,
            cancelText: 'ANNULER'
        });
        /* $.material.init();*/
    });
});
// date Range Picker
$('input[name="daterange"]').daterangepicker();
$(function() {
    $('input[name="birthdate"]').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true
        },
        function(start, end, label) {
            var years = moment().diff(start, 'years');
            alert("You are " + years + " years old.");
        });

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        "drops": "up",
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

    $('.input-daterange input').each(function() {
        $(this).datepicker();
    });
    $('#sandbox-container .input-daterange').datepicker({
        todayHighlight: true
    });
    $('.input-group-date-custom').datepicker({
        todayBtn: true,
        clearBtn: true,
        keyboardNavigation: false,
        forceParse: false,
        todayHighlight: true,
        defaultViewDate: {
            year: '2017',
            month: '01',
            day: '01'
        }
    });
    $('.multiple-select').datepicker({
        todayBtn: true,
        clearBtn: true,
        multidate: true,
        keyboardNavigation: false,
        forceParse: false,
        todayHighlight: true,
        defaultViewDate: {
            year: '2017',
            month: '01',
            day: '01'
        }
    });
    $('#config-demo').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        "timePicker": true,
        "timePicker24Hour": true,
        "timePickerSeconds": true,
        "showCustomRangeLabel": false,
        "alwaysShowCalendars": true,
        "startDate": "11/30/2016",
        "endDate": "12/06/2016",
        "drops": "up"
    }, function(start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });
});
(function($) {

    $.fn.rkmd_checkboxRipple = function() {
        var self, checkbox, ripple, size, rippleX, rippleY, eWidth, eHeight;
        self = this;
        checkbox = self.find('.input-checkbox');

        checkbox.on('mousedown', function(e) {
            if (e.button === 2) {
                return false;
            }

            if ($(this).find('.ripple').length === 0) {
                $(this).append('<span class="ripple"></span>');
            }
            ripple = $(this).find('.ripple');

            eWidth = $(this).outerWidth();
            eHeight = $(this).outerHeight();
            size = Math.max(eWidth, eHeight);
            ripple.css({
                'width': size,
                'height': size
            });
            ripple.addClass('animated');

            $(this).on('mouseup', function() {
                setTimeout(function() {
                    ripple.removeClass('animated');
                }, 200);
            });

        });
    }

}(jQuery));

function change_checkbox_color() {
    $('.color-box .show-box').on('click', function() {
        $(".color-box").toggleClass("open");
    });

    $('.colors-list a').on('click', function() {
        var curr_color = $('main').data('checkbox-color');
        var color = $(this).data('checkbox-color');
        var new_colot = 'checkbox-' + color;

        $('.rkmd-checkbox .input-checkbox').each(function(i, v) {
            var findColor = $(this).hasClass(curr_color);

            if (findColor) {
                $(this).removeClass(curr_color);
                $(this).addClass(new_colot);
            }

            $('main').data('checkbox-color', new_colot);

        });
    });
}
// Color picker
$("#custom").spectrum({
    color: "#f00"
});
$("#flat").spectrum({
    flat: true,
    showInput: true
});
$("#flatClearable").spectrum({
    flat: true,
    showInput: true,
    allowEmpty: true
});
