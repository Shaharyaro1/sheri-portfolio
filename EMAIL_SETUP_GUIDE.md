# Email Setup Guide for Portfolio Contact Form

## EmailJS Configuration Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (recommended) or any other email provider
4. Connect your Gmail account (babasheri322@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Message: {{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down the **Template ID** (e.g., "template_xyz789")

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "user_abcdef123456")

### 5. Update Your Code
Open `script.js` and replace these placeholders:

```javascript
// Replace this line:
emailjs.init("YOUR_PUBLIC_KEY");
// With your actual public key:
emailjs.init("user_abcdef123456");

// Replace these lines:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
// With your actual IDs:
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

### 6. Test the Form
1. Open your portfolio website
2. Fill out the contact form
3. Submit it
4. Check babasheri322@gmail.com for the email

## Template Variables Used
- `{{from_name}}` - User's first and last name
- `{{from_email}}` - User's email address  
- `{{message}}` - User's message
- `{{to_email}}` - Your email (babasheri322@gmail.com)

## Free Plan Limits
- 200 emails per month
- Perfect for a portfolio contact form

## Troubleshooting
- Make sure your Gmail account is connected properly
- Check spam folder for test emails
- Verify all IDs are correct in the code
- Check browser console for any error messages

## Security Note
The public key is safe to use in client-side code - it's designed for this purpose.