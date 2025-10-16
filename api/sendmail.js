import nodemailer from "nodemailer";

// Vercel serverless function
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create transporter (example using Gmail SMTP)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",          // Replace with your email
        pass: "your-app-password"              // Use App Password (Gmail security)
      }
    });

    // Prepare email
    await transporter.sendMail({
      from: email,
      to: "your-email@gmail.com",              // Your email to receive messages
      subject: `New Message from ${firstName} ${lastName}`,
      text: message
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
