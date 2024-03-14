//getting required home form elements
let homeSecForm = document.querySelector('#homeSecForm');
let homeSecfullname = document.querySelector('#homeSecfullname');
let homeSecEmail = document.querySelector('#homeSecEmail');
let homeSecPhone = document.querySelector('#homeSecPhone');

homeSecForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "elsacleaningzervice@gmail.com",
      Password: "199D230865E3C6AA355D8BE93204F6566976",
      To: "elsacleaningzervice@gmail.com",
      From: 'elsacleaningzervice@gmail.com',
      Subject: "Message from your website",
      Body: `Hi I'm ${homeSecfullname.value}, I'll like to make enquiries on your service. Contact me on ${homeSecPhone.value} or ${homeSecEmail.value} `,
    }).then((message) => alert(message));
    homeSecForm.reset()
  });