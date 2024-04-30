const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = async (emailData) => {
    const { to, subject, name, email, message } = emailData;
    const templatePath = path.join(__dirname, '..', 'templates', 'contactEmail.html');
    let htmlString = fs.readFileSync(templatePath, 'utf-8');

    htmlString = htmlString.replace('{{name}}', name).replace('{{email}}', email).replace('{{message}}', message);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: htmlString,
        attachments: [{
            filename: 'logo.png',
            path: path.join(__dirname, '..', 'public', 'images', 'logo.png'),
            cid: 'companyLogo'
        }]
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
