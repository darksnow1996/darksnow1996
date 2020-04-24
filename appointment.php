<?php
$result = '';
// $message = $_POST['message'];
// $name = $_POST['name'];
// $email = $_POST['email'];
// $subject = $_POST['subject'];
if($_SERVER['REQUEST_METHOD'] == 'POST'){
   $name = $_POST['name'];
   $message = $_POST['message'];
   $email = $_POST['email'];
   
   $to = 'gigaloluwa.ilori@gmail.com';
$subject = "Agnosys Appointment Form";
$txt = 'User email: '.$email."\r\n".'message: '.$message;
$headers = "From: no-reply@agnosys.com" . "\r\n" .
"CC: oluyemodamola@example.com";

$sendMail = mail($to,$subject,$txt,$headers);
if($sendMail){
$result = array(
    'success' => true,
    'message'=> 'Form submitted successfully'
);
}else{
    $result = array(
    'success' => false,
    'message'=> 'Unable to send: Please try again'
);
}
}



echo json_encode($result);
?>