const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'rgbstore0@gmail.com', // generated ethereal user
    pass: 'fzaeizjoghjrneex', // generated ethereal password
  },
});

transporter.verify().then(() => console.log('ready'));

module.exports = transporter;
