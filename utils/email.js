const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter

  const transporter = nodemailer.createTransport({
    // service: 'Gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Dawit Solomon, <dawit8908@gmail.com>',
    to: options.to,
    subject: options.subject,
    text: options.message,
    // html:
  };

  // 3) Actually sent the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
