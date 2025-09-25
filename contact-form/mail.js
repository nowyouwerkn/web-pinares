/* FORMULARIO DE CONTACTO */
form = $('#contactForm');
email = $('#email');
f_name = $('#name');
phone = $('#phone');
birthday = $('#birthday');
contact_num = $('#contact_num');
info = $('#info');
submit = $("#submitForm");

form.on('input change', '#email, #name, #phone, #birthday, #contact_num', function () {
  $(this).css('border-color', 'green');
  info.html('').fadeIn();
});

submit.on('click', function (e) {
  e.preventDefault();

  if (validate()) {
    info.html('Procesando el formulario. Unos momentos por favor.').css('color', 'blue').fadeIn();

    $.ajax({
      type: "POST",
      url: "./contact-form/mailer.php",
      data: form.serialize(),
      dataType: "json",
      success: function (data) {
        if (data.success) {
          email.val('');
          f_name.val('');
          phone.val('');
          birthday.val('');
          contact_num.val('');

          info.html('¡Mensaje Enviado! Nos comunicaremos pronto.').css('color', 'green').fadeIn();
        } else {
          info.html('¡No se pudo enviar el correo! ¡Intenta de nuevo!').css('color', 'red').fadeIn();
        }
      },
      error: function () {
        info.html('Error al procesar el formulario. ¡Intenta de nuevo! Si el problema persiste comunicate con nosotros en redes.').css('color', 'red').fadeIn();
      }
    });
  }
});

function validate() {
  var valid = true;
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!regex.test(email.val())) {
    email.css('border-color', 'red');
    valid = false;
  }

  if ($.trim(f_name.val()) === "") {
    f_name.css('border-color', 'red');
    valid = false;
  }

  if ($.trim(phone.val()) === "") {
    phone.css('border-color', 'red');
    valid = false;
  }

  return valid;
}