<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName  = htmlspecialchars($_POST['lastName']);
    $email     = htmlspecialchars($_POST['email']);
    $message   = htmlspecialchars($_POST['message']);

    // 👑 Admin Email
    $to = "babasheri322@gmail.com"; // ← Yahan apna admin email likho
    $subject = "New Contact Form Message from $firstName $lastName";

    $body = "You have received a new message:\n\n".
            "Name: $firstName $lastName\n".
            "Email: $email\n".
            "Message:\n$message";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2 style='font-family:sans-serif;color:green;'>✅ Message sent successfully!</h2>";
    } else {
        echo "<h2 style='font-family:sans-serif;color:red;'>❌ Failed to send message. Please try again.</h2>";
    }
}
?>
