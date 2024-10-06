<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true); // Pass true to enable exceptions

// Set up the email
$mail->setFrom('info@umbrainterior.ru', 'UMBRA design group');
$mail->addAddress('umbrainterior@yandex.ru');
$mail->Subject = 'Новое сообщение с сайта UMBRA design group';

// Set up the email body
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$mail->Body = "Имя: $name \r\n"."Телефон: $phone \r\n"."Email: $email \r\n"."Текст сообщения: ".wordwrap($message, 70);
$mail->CharSet = 'UTF-8';

// Set up the SMTP server
$mail->isSMTP();
$mail->Host = 'smtp.spaceweb.ru';
$mail->SMTPAuth = true;
$mail->Username = 'info@umbrainterior.ru';
$mail->Password = 'Um640iNru';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

// Send the email
if (!$mail->send()) {
    echo 'Email not sent: ' . $mail->ErrorInfo;
} else {
    echo 'Email sent successfully';
}
?>