'use strict';


//Validation forms
function validateForm(selector) {
    Array.from(document.querySelectorAll(selector)).forEach(item => {
        item.addEventListener('input', (e) => {
            if (e.target.value === '') {
                item.dataset.touched = false;
            }
        });
        item.addEventListener('invalid', () => {
            item.dataset.touched = true;
        });
        item.addEventListener('blur', () => {
            if (item.value !== '') item.dataset.touched = true;
        });
    });
};

validateForm('.js-form .form-field');

var form = document.querySelector('.js-form');
var formName = '.js-form';

form.addEventListener('submit', function (e) {
    submitForm(e, formName);
});

function submitForm(e, formName) {
    e.preventDefault();
    var name = $(formName + ' .js-field-name').val();
    var email = $(formName + ' .js-field-email').val();
    var message = $(formName + ' .js-field-message').val();

    var params = {
        name: name,
        email: email,
        message: message
    };

    const serviceID = "service_ot3aj0n";
    const templateID = "template_qe2lsej";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            $("#alvin-contactform")[0].reset();
            alert("Thank you for reaching out to me. I will respond to your message as soon as possible.")
        })
        .catch(err => console.log(err));

    // $.ajax({
    //     type: "POST",
    //     url: 'mail.php',
    //     data: formData,
    //     success: function () {
    //         console.log('success');
    //         //...
    //     },
    //     error: function () {
    //         console.log('error');
    //         //...
    //     }
    // });
}