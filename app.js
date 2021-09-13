const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD
  }
});

const mailOptions = {
  from: process.env.SENDER_EMAIL,
  to: process.env.RECEIPIENT_EMAIL,
  subject: 'Sending Email using Node.js',
  html: `
    <html>
      <div style="width: 100%; height: auto; background-color: rgba(168, 50, 139, 0.3); border-radius: 5px; padding: 10px;">
        <div style="margin: 20px;">
          <h1 style="color: white;">Hello, Customer</h1>
        </div>
        <div style="margin: 20px; color: gray; line-height: 1.6; font-size: 18px;">
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, <br /> but also the leap into electronic typesetting, remaining essentially unchanged.</span>
          <br />
          <br />
          <button style="border: none; background-color: rgb(0, 8, 255); color: white; padding: 10px 20px; border-radius: 3px; margin-bottom: 40px; font-size: 18px;">Click here to do nothing</button>
        </div>
      </div>
    </html>
  `
};

transporter.sendMail(mailOptions, (error, info) => {
  
  if (error) console.log(error);
  console.log(`Email sent: ${info.response}`);

});  