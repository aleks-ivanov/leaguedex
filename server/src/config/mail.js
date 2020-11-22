const { resolve } = require('path');
const dotenv = require('dotenv');
const { inProduction } = require('../Application');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

dotenv.config({ path: resolve(__dirname, '../.env') });

if (inProduction) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

async function sendEmail(to, subject, mjmlTemplate) {
  const message = {
    to: to,
    from: inProduction
      ? process.env.SENDGRID_EMAIL
      : 'development@leaguedex.com',
    subject,
    html: mjmlTemplate,
  };

  if (inProduction) {
    await sgMail.send(message);
  } else {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    const info = await transporter.sendMail(message);
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
}

module.exports = { sendEmail };
