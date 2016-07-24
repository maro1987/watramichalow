<?php

if($_POST){
    $email = $_POST['form_email'];
    $message = $_POST['form_message'];

 $headers = 'Reply-To: '.$email.PHP_EOL;
 $headers .= 'From: '.$email.PHP_EOL;
 $headers .= "MIME-Version: 1.0".PHP_EOL;
 $headers .="Content-type: text/html; charset=utf-8";

//send email
    mail("info@watramichalow.pl", "Wiadomość od " .$email, $message, $headers);
}
?>
