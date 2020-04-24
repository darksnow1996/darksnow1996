/*
--------------------------------
Ajax Contact Form
--------------------------------
+ https://github.com/mehedidb/Ajax_Contact_Form
+ A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
+ Has a fallback in jQuery for browsers that do not support HTML5 form validation.
+ version 1.0.1
+ Copyright 2016 Mehedi Hasan Nahid
+ Licensed under the MIT license
+ https://github.com/mehedidb/Ajax_Contact_Form
*/

$(document).ready(function () {  
    //'use strict';

    var $form = $('#contact-form');

    $form.submit(function (e) {
        e.preventDefault();
      //  console.log('im gehrljfl');
        // remove the error class
        $('.form-group').removeClass('has-error');
        $('.help-block').remove();

        // get the form data
        // var formData = {
        //     'name' : 'damola',
        //     'email' : $('input[name="email"]').val(),
        //     // 'subject' : $('input[name="subject"]').val(),
        //     'message' : $('textarea[name="message"]').val()
        // };

       let formData = $('#contact-form').serialize();
        let data = $(this).serialize();
      //  alert(formData.email);

        // process the form
        $.ajax({
            method : 'POST',
            url  : 'appointment.php',
            data : formData,
            dataType : 'json',
            encode : true
        }).done(function (data) {
            // handle errors
            console.log('done');
            if (!data.success) {
                $('#form-error').html('<div class="alert alert-danger">' + data.message + '</div>');
                if (data.errors.name) {
                    $('#name-field').addClass('has-error');
                    $('#name-field').find('.col-lg-10').append('<span class="help-block">' + data.errors.name + '</span>');
                }

                if (data.errors.email) {
                    $('#email-field').addClass('has-error');
                    $('#email-field').find('.col-lg-10').append('<span class="help-block">' + data.errors.email + '</span>');
                }

                if (data.errors.subject) {
                    $('#subject-field').addClass('has-error');
                    $('#subject-field').find('.col-lg-10').append('<span class="help-block">' + data.errors.subject + '</span>');
                }

                if (data.errors.message) {
                    $('#message-field').addClass('has-error');
                    $('#message-field').find('.col-lg-10').append('<span class="help-block">' + data.errors.message + '</span>');
                }
            } else {
            //   alert('passed');
                // display success message
                $form.html('<div class="alert alert-success">' + data.message + '</div>');
            }
        }).fail(function (data) {
            // for debug
          //  alert('fail')
            console.log(data)
        });

        
    });
});
