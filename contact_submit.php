<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Initialize status message
$statusMessage = "";
$success = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and validate input
    $name    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email   = htmlspecialchars(trim($_POST['email'] ?? ''));
    $subject = htmlspecialchars(trim($_POST['subject'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Basic validation
    if (!$name || !$email || !$subject || !$message) {
        $statusMessage = "Please fill in all fields.";
    } else {
        // Email settings
        $to      = "help@tendaly.com";
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
            $statusMessage = "Success! Your message has been sent.";
            $success = true;
        } else {
            $statusMessage = "Sorry, your message could not be sent. Please try again later.";
        }
    }
} else {
    $statusMessage = "Invalid request.";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Contact Status</title>
    <style>
        /* Simple modal styles */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }
        .modal-content {
            background: white;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }
        .modal-content h2 {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>

<div class="modal" id="statusModal">
    <div class="modal-content">
        <h2><?php echo $success ? "Message Sent" : "Error"; ?></h2>
        <p><?php echo $statusMessage; ?></p>
        <?php if ($success): ?>
            <p>You will be redirected in 3 seconds...</p>
        <?php endif; ?>
    </div>
</div>

<?php if ($success): ?>
    <script>
        setTimeout(() => {
            window.location.href = "https://tendaly.com";
        }, 3000);
    </script>
<?php endif; ?>

</body>
</html>
