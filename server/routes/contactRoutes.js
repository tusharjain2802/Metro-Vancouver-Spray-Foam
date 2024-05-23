const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/mailer');
require('dotenv').config();
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send email
    const emailData = {
      to: 'metrovancouversprayfoam@gmail.com',  // or any other recipient
      subject: 'New Contact Form Submission',
      name,
      email,
      message
    };
    await sendEmail(emailData);

    res.status(200).json({ message: 'Contact information received and email sent.' });
  } catch (error) {
    console.error('Failed to receive contact:', error);
    res.status(500).json({ message: 'Failed to process contact form.' });
  }
});

module.exports = router;
