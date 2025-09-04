# EmailJS Setup for Contact Forms

This guide explains how to set up EmailJS for your contact forms in the Harsha Interiors website, including both the main Contact page form and the popup contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for your contact forms

## Step 2: Create an Email Service

1. In your EmailJS dashboard, click on "Email Services" in the left menu
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the prompts to connect your email account (use the mdirreef@gmail.com account)
5. Give your service a name (e.g., "Harsha Interiors Contact")
6. Save the service and note down the **Service ID**

## Step 3: Create Email Templates

You'll need to create two templates:

### Admin Notification Template

1. In your EmailJS dashboard, click on "Email Templates" in the left menu
2. Click "Create New Template"
3. Design your email template for the admin notification:

**Subject**:
```
New Contact Form Submission: {{subject}}
```

**Content**:
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}
Project Type: {{project_type}}
Budget Range: {{budget}}

Message:
{{message}}

This email was sent to: {{to_email}}
Reply to this email to respond directly to the customer.
```

4. Save the template and note down the **Admin Template ID**

### User Confirmation Template

1. Click "Create New Template" again
2. Design your email template for the user confirmation:

**Subject**:
```
Thank You for Contacting Harsha Interiors
```

**Content**:
```
Dear {{to_name}},

Thank you for contacting Harsha Interiors. We have received your inquiry and our team will get back to you shortly.

Here's a summary of the information you provided:

Name: {{to_name}}
Email: {{to_email}}
Phone: {{phone}} (if provided)
Subject: {{subject}} (if provided)
Project Type: {{project_type}} (if provided)
Budget Range: {{budget}} (if provided)

Your Message:
{{message}}

If you have any urgent questions, please contact us directly at:
Phone: +91 9361757753
Email: mdirreef@gmail.com
WhatsApp: Click here to chat: https://wa.me/919361757753

We look forward to working with you!

Best regards,
The Harsha Interiors Team
```

3. Save the template and note down the **User Template ID**

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, click on "Account" in the left menu
2. Find your **Public Key** under the API Keys section

## Step 5: Update Your Code

You need to update two files with your EmailJS credentials:

### 1. Contact.jsx
Open `src/pages/Contact.jsx` and replace the placeholder values:

1. Replace `YOUR_PUBLIC_KEY` in the `initEmailJS` function with your actual public key
2. In the `handleSubmit` function, update these values:
   - `serviceId`: Your EmailJS service ID
   - `adminTemplateId`: Your Admin Template ID
   - `userTemplateId`: Your User Template ID
   - `publicKey`: Your EmailJS public key (same as in step 1)

### 2. PopupContactForm.jsx
Open `src/components/PopupContactForm.jsx` and update the same values in the `handleSubmit` function:
   - `serviceId`: Your EmailJS service ID
   - `adminTemplateId`: Your Admin Template ID
   - `userTemplateId`: Your User Template ID
   - `publicKey`: Your EmailJS public key

## Security Considerations

Keep in mind that your public key will be visible in the client-side code. This is normal for EmailJS, as the public key is designed to be used in browser applications. However, make sure you never expose your private key.

## Testing

Test both contact forms by sending test messages:
1. Open the main Contact page and submit the form
2. Click on a "Contact Us" button that opens the popup form and submit it
3. Check your admin email (mdirreef@gmail.com) to verify you received both submissions
4. Check the test email address you used to verify you received the confirmation emails

## Troubleshooting

If you encounter any issues:

1. Check the browser console for errors
2. Verify your EmailJS credentials are correct
3. Make sure your email service is properly connected
4. Check if you've reached your monthly email limit
5. Ensure your templates have the correct variables defined
