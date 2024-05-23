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
const UFCimagePath = path.join(__dirname, "../public/images/ufc.png");
const imageBase64 = convertImageToBase64(imagePath);
const UFCimageBase64 = convertImageToBase64(UFCimagePath);

router.post("/", async (req, res) => {
  try {
    const {
      generalInfo,
      projectInfo,
      materialInfo,
      equipmentInfo,
      environmentalConditions,
      substrateConditions,
      specialConditions,
      onSiteTestResults,
    } = req.body;


    const templatePath = path.resolve(
      __dirname,
      "..",
      "templates",
      "workRecord.ejs"
    );
    const htmlContent = await ejs.renderFile(templatePath, {
      generalInfo,
      projectInfo,
      materialInfo,
      equipmentInfo,
      environmentalConditions,
      substrateConditions,
      specialConditions,
      onSiteTestResults,
      logoPath: imageBase64,
      UFClogoPath: UFCimageBase64,
    });

    console.log("HTML content generated");

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setContent(htmlContent);

    console.log("Puppeteer page content set");

    const buffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    console.log("PDF generated");

    await browser.close();

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
      subject: "Daily Work Record Submission",
      text: "Please find attached the PDF.",
      attachments: [
        {
          filename: "workRecord.pdf",
          content: buffer,
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error sending mail:", error);
        res.status(500).json({ message: "Error sending mail" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Email successfully sent!" });
      }
    });

  } catch (error) {
    console.error("Error in processing request:", error);
    res.status(500).json({ message: "Error processing request", error: error });
  }
});

module.exports = router;
