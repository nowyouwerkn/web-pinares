<?php
if ($_POST) {
  $to = "info@pinares.com.mx"; // your mail here
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $name = filter_var($_POST["name"], FILTER_DEFAULT);
  $phone = filter_var($_POST["phone"], FILTER_DEFAULT);
  $birthday = filter_var($_POST["birthday"], FILTER_DEFAULT);
  $contact_num = filter_var($_POST["contact_num"], FILTER_DEFAULT);
  $subject = "Nuevo Petición de Contacto en tu Página - Asesoría de Financiamiento";
  $body = "
  El siguiente prospecto solicita asesoría de financiamiento y trámites: \n\n
  Nombre: $name\n 
  Teléfono: $phone\n 
  E-mail: $email
  Cumpleaños: $birthday\n
  NSS/CURP FOVISSSTE: $contact_num\n
  ";

  $mailResult = @mail($to, $subject, $body);

  if ($mailResult) {
      // Mail sent successfully
      $output = json_encode(array('success' => true));
      die($output);
  } else {
      // Error sending mail
      $error_message = "Error: No se pudo enviar el correo. ¡Intenta de nuevo!";
      $output = json_encode(array('success' => false, 'error_message' => $error_message));
      die($output);
  }
}
?>
