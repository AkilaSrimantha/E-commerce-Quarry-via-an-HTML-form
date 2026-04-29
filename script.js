
const PUBLIC_KEY = "df5fxmIW3mcK2yIKa";
const SERVICE_ID = "service_abta8kw";
const CLIENT_TEMPLATE_ID = "template_twl6o52";
const ADMIN_TEMPLATE_ID = "template_ytg8mwi";


const ADMIN_EMAIL = "srimanthaakila@gmail.com";

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

const queryForm = document.getElementById("queryForm");
const submitBtn = document.getElementById("submitBtn");
const statusMessage = document.getElementById("statusMessage");

queryForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const userName = document.getElementById("userName").value.trim();
  const userEmail = document.getElementById("userEmail").value.trim();
  const querySubject = document.getElementById("querySubject").value.trim();
  const queryMessage = document.getElementById("queryMessage").value.trim();

  if (!userName || !userEmail || !querySubject || !queryMessage) {
    showMessage("Please fill all fields.", "error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  showMessage("", "");

  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    query_subject: querySubject,
    query_message: queryMessage,
    admin_email: ADMIN_EMAIL,
    to_email: userEmail
  };

  try {
    // 1. Send confirmation email to client
    await emailjs.send(SERVICE_ID, CLIENT_TEMPLATE_ID, templateParams);

    // 2. Send actual query details to admin
    await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);

    showMessage("Query submitted successfully. Confirmation email sent.", "success");
    queryForm.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    showMessage("Failed to send query. Please check EmailJS configuration.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Query";
  }
});

function showMessage(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = type;
}
