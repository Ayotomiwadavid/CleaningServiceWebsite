//getting contact page required elements
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phoneNumber");
let message = document.querySelector("#message");
let contactsubmitBtn = document.querySelector("#contactsubmitBtn");
let contactPageForm = document.querySelector("#contactPageForm");

contactPageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "olusanyatomiwa97@gmail.com",
    Password: "B9030B407FD5859A93DD5650BC6760428875",
    To: "olusanyatomiwa97@gmail.com",
    From: email.value,
    Subject: "Message from your website",
    Body: message.value,
  }).then((message) => alert("Thank you for reaching out to us, we've received your message and we'll get back to you very soon"));
  contactPageForm.reset()
});
