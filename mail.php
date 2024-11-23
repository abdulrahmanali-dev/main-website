<?php
// mail.php - Handles the contact form submission

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form inputs
    $project_name = htmlspecialchars($_POST['project_name'] ?? 'Message from Website');
    $admin_email = htmlspecialchars($_POST['admin_email'] ?? ''); // Email to send the form data
    $form_subject = htmlspecialchars($_POST['form_subject'] ?? 'Contact Form Message');

    $name = htmlspecialchars($_POST['Name'] ?? '');
    $email = htmlspecialchars($_POST['E-mail'] ?? '');
    $store_link = htmlspecialchars($_POST['Store-link'] ?? '');
    $message = htmlspecialchars($_POST['Message'] ?? '');
    $newsletter = isset($_POST['Newsletter']) ? 'Yes' : 'No';

    // Validation
    if (empty($name) || empty($email) || empty($store_link)) {
        http_response_code(400); // Bad Request
        echo "Please fill in all required fields.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400); // Bad Request
        echo "Invalid email address.";
        exit;
    }

    // Email content
    $email_body = "You have received a new submission from the website contact form.\n\n";
    $email_body .= "Project Name: $project_name\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Store Link: $store_link\n";
    $email_body .= "Message: $message\n";
    $email_body .= "Newsletter Subscription: $newsletter\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($admin_email, $form_subject, $email_body, $headers)) {
        http_response_code(200); // Success
        echo "Your request has been submitted successfully.";
    } else {
        http_response_code(500); // Server Error
        echo "Failed to send your request. Please try again later.";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Invalid request method.";
}
?>
