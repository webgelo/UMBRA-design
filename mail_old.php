<?php
    ini_set('SMTP','mail.hosting.reg.ru');
    ini_set('smtp_port',587);
    $to = "umbrainterior@yandex.ru";
    $subject = "Новое сообщение с сайта UMBRA design group";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $message = "Имя: $name \r\n"."Телефон: $phone \r\n"."Email: $email \r\n"."Текст сообщения: ".wordwrap($message, 70);
    $headers = "From: info@product-om.ru \r\n" .
               "Reply-To: $email \r\n";

    if(mail($to, $subject, $message, $headers)) echo "Email sent successfully";
    else echo "0";
?>