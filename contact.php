<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

// Include the PHPMailer Autoload file
require 'path/to/phpmailer/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create a new PHPMailer instance
    $mail = new PHPMailer();

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'your_smtp_host'; // Your SMTP host (e.g., smtp.gmail.com)
    $mail->SMTPAuth = true;
    $mail->Username = 'your_email@example.com'; // Your SMTP username (usually your email)
    $mail->Password = 'your_smtp_password'; // Your SMTP password
    $mail->SMTPSecure = 'tls'; // Encryption (tls or ssl)
    $mail->Port = 587; // SMTP port (465 for SSL, 587 for TLS)

    // Email content
    $mail->setFrom('your_email@example.com', 'Your Name'); // Your email and name
    $mail->addAddress('muhbenn@gmail.com'); // Recipient email
    $mail->Subject = 'Contact Form Submission from ' . $name;
    $mail->Body = $message;

    // Send email
    if ($mail->send()) {
        $response = array(
            "status" => "success",
            "message" => "Message sent successfully!"
        );
    } else {
        $response = array(
            "status" => "error",
            "message" => "Failed to send message. Please try again later."
        );
    }

    // Return the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
}
?>

error_reporting(E_ALL);
ini_set('display_errors', '1');
