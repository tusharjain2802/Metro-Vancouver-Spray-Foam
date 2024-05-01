const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
// const PdfPrinter = require('pdfmake');

// // Define fonts for PDF
// const fonts = {
//     Roboto: {
//         normal: 'fonts/Roboto-Regular.ttf',
//         bold: 'fonts/Roboto-Medium.ttf',
//         italics: 'fonts/Roboto-Italic.ttf',
//         bolditalics: 'fonts/Roboto-MediumItalic.ttf'
//     }
// };

// const printer = new PdfPrinter(fonts);

// // Function to create PDF document
// function createPdfDoc(data) {
//     return {
//         content: [
//             { text: 'Daily Work Record', style: 'header' },
//             `Company: ${data.company}`,
//             `Installer: ${data.installer}`,
//             // Include other fields as needed
//         ],
//         styles: {
//             header: {
//                 fontSize: 18,
//                 bold: true
//             }
//         }
//     };
// }

// Route to handle form submission
router.post('/', async (req, res) => {
    try {
        // Data from client
        const formData = req.body;
        console.log(formData);
        // Create PDF
        // const docDefinition = createPdfDoc(formData);
        // const pdfDoc = printer.createPdfKitDocument(docDefinition);
        // const chunks = [];
        // pdfDoc.on('data', chunk => chunks.push(chunk));
        // pdfDoc.on('end', () => {
        //     const result = Buffer.concat(chunks);
        //     sendEmail(result, formData);
        // });
        // pdfDoc.end();

        res.status(200).json({ message: 'Work record processing.' });
    } catch (error) {
        console.error('Error in processing work record:', error);
        res.status(500).json({ message: 'Error processing work record' });
    }
});

// Function to send email
function sendEmail(pdfBuffer, data) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: data.ownerEmail, // Owner email to send to
        subject: 'Daily Work Record PDF',
        text: 'Attached is the Daily Work Record.',
        attachments: [{
            filename: 'DailyWorkRecord.pdf',
            content: pdfBuffer
        }]
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = router;
