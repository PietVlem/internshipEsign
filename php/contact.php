<?php
    if(!empty($_POST['name_input']) && !empty($_POST['mail_input']) && !empty($_POST['phone_input']) && !empty($_POST['message_input']))
    {
        //variables
        $email_to = "pieter.vlem@gmail.com";
        $email_subject = "Contact form esign";

        $name = $_POST['name_input']; 
        $mail = $_POST['mail_input']; 
        $company = $_POST['company_input']; 
        $phone = $_POST['phone_input']; 
        $message = $_POST['message_input'];  

        $email_message .= "name: ".$name."\n";
        $email_message .= "E-mail: ".$mail."\n";
        $email_message .= "company: ".$company."\n";
        $email_message .= "Telephone: ".$phone."\n\n";
        $email_message .= "Comments: "."\n".$message."\n";

        // create email headers
        $headers = 'From: '.$mail."\r\n".
        'Reply-To: '.$mail."\r\n" .
        'X-Mailer: PHP/' . phpversion();

        //mail
        @mail($email_to, $email_subject, $email_message, $headers); 

        //alert + retrun
        echo ("<SCRIPT LANGUAGE='JavaScript'>
        window.alert('Send Succesfully!')
        window.location.href='../index.html';
        </SCRIPT>");

    }
    else
    {
        //return
        header('Location: ../index.html');
    }
?>