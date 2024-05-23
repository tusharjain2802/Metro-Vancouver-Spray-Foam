const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");

function convertImageToBase64(filePath) {
  const image = fs.readFileSync(filePath);
  return image.toString("base64");
}

const imagePath = path.join(__dirname, "../public/images/logo.png");
const imageBase64 = convertImageToBase64(imagePath);

router.post("/", async (req, res) => {
  try {
    const complaintData = req.body;
    console.log("Received complaint data:", complaintData);

    const templatePath = path.resolve(
      __dirname,
      "..",
      "templates",
      "safetyComplaint.ejs"
    );
    const htmlContent = await ejs.renderFile(templatePath, {
      complaintData,
      logoPath: imageBase64,
    });

    console.log("HTML content generated");

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }).catch(error => {
      console.error("Error launching Puppeteer:", error);
      res.status(500).json({ message: "Error launching Puppeteer", error });
      return;
    });

    if (!browser) return;

    const page = await browser.newPage().catch(error => {
      console.error("Error creating new page:", error);
      res.status(500).json({ message: "Error creating new page", error });
      return;
    });

    await page.setContent(htmlContent).catch(error => {
      console.error("Error setting page content:", error);
      res.status(500).json({ message: "Error setting page content", error });
      return;
    });

    console.log("Puppeteer page content set");

    const buffer = await page.pdf({
      format: "A4",
      printBackground: true,
    }).catch(error => {
      console.error("Error generating PDF:", error);
      res.status(500).json({ message: "Error generating PDF", error });
      return;
    });

    console.log("PDF generated");

    await browser.close().catch(error => {
      console.error("Error closing Puppeteer:", error);
      res.status(500).json({ message: "Error closing Puppeteer", error });
      return;
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "tusharjain2802@gmail.com",
      subject: "Safety Complaint Submission",
      text: "Please find attached the PDF.",
      attachments: [
        {
          filename: "safetyComplaint.pdf",
          content: buffer,
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ message: "Error sending mail", error });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Email successfully sent!" });
      }
    });

  } catch (error) {
    console.error("Error in processing request:", error);
    res.status(500).json({ message: "Error processing request", error });
  }
});

module.exports = router;