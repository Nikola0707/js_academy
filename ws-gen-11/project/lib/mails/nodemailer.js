const nodemailer = require('nodemailer');
const events = require('events');
const emitter = new events.EventEmitter();

module.exports = (receiveEmail) => {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    host: 'smtp.office365.com',
    port: 587,
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    user: 'ws-gen-11@outlook.com',
    pass: 'ws-gen-edinaeset'
  }
});

const sendMail = (data) => {
  
  const email = {
    from: 'ws-gen-11@outlook.com',
    to: `${data.to}`,
    subject: `${data.subject}`,
    text: `${data.text}`
  };
  
  transporter.sendMail(email, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent:');
    }
  });
}

emitter
.on('blogPost_created', data => {
  sendMail(data);
})

emitter.emit('blogPost_created', {
  from: 'ws-gen-11@outlook.com',
  to: `${receiveEmail}`,
  subject: 'Reset Password!',
  text: 'Click on the link to reset the password: localhost:3003/api/v1/auth/reset-password',
})
}