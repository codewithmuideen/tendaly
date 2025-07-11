<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fullName = htmlspecialchars(trim($_POST["fullName"] ?? ''));
    $email = htmlspecialchars(trim($_POST["email"] ?? ''));
    $requestType = htmlspecialchars(trim($_POST["requestType"] ?? ''));
    $details = htmlspecialchars(trim($_POST["details"] ?? ''));
    $isAgent = isset($_POST["isAgent"]) ? "Yes" : "No";
    $agentDetails = htmlspecialchars(trim($_POST["agentDetails"] ?? ''));

    if (!$fullName || !$email || !$requestType) {
        echo "<h3 style='color: red;'>All required fields must be filled.</h3>";
        exit;
    }

    $to = "help@tendaly.com";
    $subject = "Privacy Request - $requestType";

    $message = "Privacy Request Submitted:\n\n" .
               "Name: $fullName\n" .
               "Email: $email\n" .
               "Request Type: $requestType\n" .
               "Details: $details\n\n" .
               "Is Agent: $isAgent\n" .
               ($isAgent === "Yes" ? "Agent Details: $agentDetails\n" : "");

    $headers = "From: no-reply@tendaly.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "<h2 style='color: green;'>Thank you! Your request has been submitted successfully.</h2>";
        echo "<p>You will be redirected shortly...</p>";
        echo "<script>setTimeout(function(){ window.location.href = 'https://tendaly.com'; }, 3000);</script>";
    } else {
        echo "<h3 style='color: red;'>Failed to send the request. Please try again later.</h3>";
    }
} else {
    echo "<h3 style='color: red;'>Invalid request method.</h3>";
}
