// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){
    $('input#education_search_id').live('click', function() {
        $.ajax({
            url: $('#frm_search_educations').attr("action"),
            data: $('#frm_search_educations').serialize(),
            success: function(data){
                alert(data);
            },
            error: function() {
                alert('We had problems submitting your information. Please try again or email us at "Know Feedback"');
            },
            complete: function() {
            },
            type: "post"
        });
    });
});

