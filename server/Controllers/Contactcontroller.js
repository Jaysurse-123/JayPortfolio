const ContactMessage = require("../Models/Contactmessage");
const nodemailer = require("nodemailer");

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const createContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    // 1. Save message to MongoDB
    const newMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    // 2. Send email notification

    console.log("About to send email...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_TO:", process.env.EMAIL_TO);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
    console.log("EMAIL_PASS length:", process.env.EMAIL_PASS?.length);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Portfolio Contact: ${subject || "New Message"}`,

      text: `
You received a new message from your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject || "No subject"}

Message:
${message}

-------------------------
Jay Portfolio
      `,
    });

    // 3. Send success response
    res.status(201).json({
      message: "Message sent successfully! Email notification sent.",
      data: newMessage,
    });

  } catch (error) {
    console.error("Contact message error:", error.message);

    res.status(500).json({
      message: "Message was not sent. Please try again.",
    });
  }
};

module.exports = {
  createContactMessage,
};