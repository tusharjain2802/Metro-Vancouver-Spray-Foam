const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const pdf = require('html-pdf');
const path = require('path');
const fs = require('fs');

function convertImageToBase64(filePath) {
    const image = fs.readFileSync(filePath);
    return image.toString('base64');
}
const imagePath = path.join(__dirname, '../public/images/logo.png');
const imageBase64 = convertImageToBase64(imagePath);

router.post('/', async (req, res) => {
    try {
        // Data from client 
        const { generalInfo, projectInfo, materialInfo, equipmentInfo, environmentalConditions, substrateConditions, specialConditions, onSiteTestResults } = req.body;
        console.log(generalInfo, projectInfo, materialInfo, equipmentInfo, environmentalConditions, substrateConditions, specialConditions, onSiteTestResults );
        // Render HTML Template with EJS
        const templatePath = path.resolve(__dirname, '..', 'templates', 'workRecord.ejs');
        const htmlContent = await ejs.renderFile(templatePath, {
            generalInfo,
            projectInfo,
            materialInfo,
            equipmentInfo,
            environmentalConditions,
            substrateConditions,
            specialConditions,
            onSiteTestResults,
            logoPath: imageBase64
        });

        // Convert HTML to PDF
        pdf.create(htmlContent).toBuffer(async function(err, buffer) {
            if (err) {
                console.error('Error creating PDF:', err);
                return res.status(500).json({ message: 'Failed to create PDF' });
            }

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            // Send Email
            let mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'tjain2_be20@thapar.edu, tusharjain2802@gmail.com',
                subject: 'Daily Work Record Submission',
                text: 'Please find attached the PDF.',
                attachments: [{
                    filename: 'workRecord.pdf',
                    content: buffer
                }]
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log('Error sending mail:', error);
                    res.status(500).json({ message: 'Error sending mail' });
                } else {
                    console.log('Email sent: ' + info.response);
                    res.status(200).json({ message: 'Email successfully sent!' });
                }
            });
        });

    } catch (error) {
        console.error('Error in processing request:', error);
        res.status(500).json({ message: 'Error processing request' });
    }
});

module.exports = router;
