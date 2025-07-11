<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize inputs
    $fullName = htmlspecialchars(trim($_POST['fullName'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $role = htmlspecialchars(trim($_POST['role'] ?? ''));
    $location = htmlspecialchars(trim($_POST['location'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));
    $preferredNotification = htmlspecialchars(trim($_POST['preferredNotification'] ?? ''));

    // Care types (checkboxes)
    $careTypes = $_POST['careTypes'] ?? [];
    $careTypesText = is_array($careTypes)
        ? implode(", ", array_map('htmlspecialchars', $careTypes))
        : 'None';

    // Validate required fields
    if (!$fullName || !$email || !$role) {
        http_response_code(400);
        echo "<script>alert('Missing required fields.'); window.history.back();</script>";
        exit;
    }

    // Email settings
    $to = "help@tendaly.com";
    $mailSubject = "New Waitlist Signup - Tendaly";

    $body = "A new user has joined the Tendaly waitlist:\n\n" .
            "Full Name: $fullName\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Role: $role\n" .
            "Care Types Interested In: $careTypesText\n" .
            "Preferred Notification: $preferredNotification\n" .
            "Zip Code: $location\n" .
            "Message:\n$message\n";

    $headers = "From: noreply@tendaly.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $mailSubject, $body, $headers)) {
        // Success modal HTML
        echo "
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta http-equiv='refresh' content='3;url=/' />
            <title>Submission Received</title>
            <style>
                body {
                    background-color: #f8fafc;
                    font-family: 'Segoe UI', sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .modal {
                    background: #fff;
                    padding: 30px 40px;
                    border-radius: 12px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .modal h2 {
                    color: #16a34a;
                    margin-bottom: 10px;
                }
                .modal p {
                    color: #475569;
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <div class='modal'>
                <h2>✅ Thank You!</h2>
                <p>Your waitlist submission has been received.<br>Redirecting you to the homepage...</p>
            </div>
        </body>
        </html>
        ";
    } else {
        echo "<script>alert('Sorry, your message could not be sent. Please try again later.'); window.history.back();</script>";
    }
} else {
    echo "Invalid request.";
}
?>
