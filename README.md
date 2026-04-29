# E-Commerce Query Form with EmailJS

## Assignment Task

Perform email configuration to send query received confirmation to the client and send the actual query to admin once a client submits a query through an HTML form.

## Technologies Used

- HTML
- CSS
- JavaScript
- EmailJS

## Project Files

```text
index.html
style.css
script.js
README.md
```

## How the System Works

1. Client fills the HTML query form.
2. JavaScript collects the form data.
3. EmailJS sends a confirmation email to the client.
4. EmailJS sends the full query details to the admin.

## EmailJS Setup Steps

### Step 1: Create EmailJS Account

Go to EmailJS website and create an account.

### Step 2: Add Email Service

Connect your Gmail or another email service.

Copy your:

```text
SERVICE_ID
```

### Step 3: Create Client Confirmation Template

Create a template for the client confirmation email.

Example subject:

```text
We received your query
```

Example body:

```text
Hello {{user_name}},

Thank you for contacting us.

We have received your query about:
{{query_subject}}

Our support team will contact you soon.

Thank you,
E-Commerce Support Team
```

Template variable for recipient email:

```text
{{to_email}}
```

Copy the:

```text
CLIENT_TEMPLATE_ID
```

### Step 4: Create Admin Query Template

Create another template for admin.

Example subject:

```text
New Customer Query Received
```

Example body:

```text
A new customer query has been submitted.

Customer Name: {{user_name}}
Customer Email: {{user_email}}
Subject: {{query_subject}}
Message: {{query_message}}
```

Template variable for recipient email:

```text
{{admin_email}}
```

Copy the:

```text
ADMIN_TEMPLATE_ID
```

### Step 5: Get Public Key

In EmailJS Account settings, copy your:

```text
PUBLIC_KEY
```

### Step 6: Update `script.js`

Replace these values:

```javascript
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const SERVICE_ID = "YOUR_SERVICE_ID";
const CLIENT_TEMPLATE_ID = "YOUR_CLIENT_TEMPLATE_ID";
const ADMIN_TEMPLATE_ID = "YOUR_ADMIN_TEMPLATE_ID";
const ADMIN_EMAIL = "youradmin@gmail.com";
```

### Step 7: Run the Project

Open `index.html` in a browser.

Recommended method:

Use VS Code Live Server extension.

## Screenshots to Add in Word Document

Add screenshots for:

1. Project folder in VS Code
2. EmailJS email service
3. Client confirmation template
4. Admin query template
5. Updated `script.js`
6. HTML query form
7. Filled form
8. Success message
9. Confirmation email received by client
10. Query email received by admin

## Important Note

Do not share your real EmailJS keys publicly in GitHub if possible. For assignment submission, screenshots can show the configuration, but hide sensitive values.
