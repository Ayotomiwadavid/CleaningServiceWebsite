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
    Username: "elsacleaningzervice@gmail.com",
    Password: "199D230865E3C6AA355D8BE93204F6566976",
    To: "elsacleaningzervice@gmail.com",
    From: 'elsacleaningzervice@gmail.com',
    Subject: "Message from your website",
    Body: message.value + `my email ${email.value} and my phone number ${phoneNumber.value}`,
  }).then((message) => alert("Thank you for reaching out to us, we've received your message and we'll get back to you very soon"));
  contactPageForm.reset()
});
