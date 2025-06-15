import type { NextApiRequest, NextApiResponse } from "next"
import sgMail from "@sendgrid/mail"

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
//sgMail.setDataResidency('eu'); 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { name, email, subject, message } = req.body

  try {
    const msg = {
      to: "msoltys.biz@gmail.com", // Your email where you want to receive messages
      from: "msoltys.biz@gmail.com", // Verified sender in SendGrid
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\n\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <p>You have received a new message from your website contact form.</p>
        <p>Here are the details:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Subject:</strong> ${subject}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    }

    await sgMail.send(msg)
    res.status(200).json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    res.status(500).json({ message: "Error sending email" })
  }
}