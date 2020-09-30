$(document).ready(function() {
    var myDatepicker = $(this).closest('.dateSplitDropdown').find('.datepicker').datepicker().data('datepicker');



    $('.dateDropdown__content').click(function(event){
        $(this).closest('.dateSplitDropdown').find('.dateSplitDropdown__calendar').slideToggle('fast');
    });

    $('.dateSplitDropdown__applyButton').click(function(event){
        console.log($(".datepicker-here").val().substr(0, 10));
        console.log($(".datepicker-here").val().substr(10, 10));
        // $(".dateDropdown__content").text("text")
        $(this).closest('.dateSplitDropdown').find('.dateDropdown__content').first().text($(".datepicker-here").val().substr(0, 10));
        $(this).closest('.dateSplitDropdown').find('.dateDropdown__content').last().text($(".datepicker-here").val().substr(10, 10));
        $(this).closest('.dateSplitDropdown').find('.dateSplitDropdown__calendar').slideToggle('fast');
    });

    $('.dateSplitDropdown__clearButton').click(function(event){
        $(this).closest('.dateSplitDropdown').find('.dateDropdown__content').text("ДД.ММ.ГГГГ");
        $(this).closest('.dateSplitDropdown').find('.dateSplitDropdown__calendar').slideToggle('fast');
    });

});

// $(this).siblings(hiddenList).toggleClass('visually-hidden');
// $(this).siblings(hiddenList).slideToggle('fast');