const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/mailer');
require('dotenv').config();
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tjain2_be20@thapar.edu',
      subject: 'New Contact Form Submission',
      html: `<h1>Contact Form Submission</h1><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    };

    await sendEmail(emailOptions);

    res.status(200).json({ message: 'Contact information received and email sent.' });
  } catch (error) {
    console.error('Failed to receive contact:', error);
    res.status(500).json({ message: 'Failed to process contact form.' });
  }
});

module.exports = router;
