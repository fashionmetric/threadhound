$(function() {
    $('#formbar').height($("#topform").height());
    
    $('#topform').affix({
        offset: { top: $('#topform').offset().top }
    });
});