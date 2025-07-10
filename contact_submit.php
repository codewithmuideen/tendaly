<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and validate input
    $name    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email   = htmlspecialchars(trim($_POST['email'] ?? ''));
    $subject = htmlspecialchars(trim($_POST['subject'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Basic validation
    if (!$name || !$email || !$subject || !$message) {
        echo "Please fill in all fields.";
        exit;
    }

    // Email settings
    $to      = "muideenakinroye@techtactfin.com";
    $mailSubject = "New Message: $subject";
    $body    = "You received a new message from tendaly contact form:\n\n"
             . "Name: $name\n"
             . "Email: $email\n"
             . "Subject: $subject\n"
             . "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Attempt to send the email
    if (mail($to, $mailSubject, $body, $headers)) {
        echo "Success! Your message has been sent.";
    } else {
        echo "Sorry, your message could not be sent. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
