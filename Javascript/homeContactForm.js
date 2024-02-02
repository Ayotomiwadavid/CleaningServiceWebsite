//getting required home form elements
let homeSecForm = document.querySelector('#homeSecForm');
let homeSecfullname = document.querySelector('#homeSecfullname');
let homeSecEmail = document.querySelector('#homeSecEmail');
let homeSecPhone = document.querySelector('#homeSecPhone');

homeSecForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "olusanyatomiwa97@gmail.com",
      Password: "B9030B407FD5859A93DD5650BC6760428875",
      To: "olusanyatomiwa97@gmail.com",
      From: homeSecEmail.value,
      Subject: "Message from your website",
      Body: `Hi I'm ${homeSecfullname.value}, I'll like to make enquiries on your service. Contact me on ${homeSecPhone.value} or ${homeSecEmail.value} `,
    }).then((message) => alert(message));
    homeSecForm.reset()
  });