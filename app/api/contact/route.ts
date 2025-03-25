import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      "first-name": firstName,
      "last-name": lastName,
      company,
      email,
      phone,
      message,
      interestedIn,
      budget,
    } = body

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email address
        pass: 'zfie hmte iyxt wyto', // Your email password or app password
      },
    })

    // Email content
    const mailOptions = {
        from: "Maxpo<chvamshi03@gmail.com>",
      to: "digital.maxpo@gmail.com, vamshi.maxpo@gmail.com",
      subject: "New Enquiry from DIGITECH Contact Form",
      html: `
        <h1>New Enquiry</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Interested In:</strong> ${interestedIn || "Not specified"}</p>
        <p><strong>Budget Range:</strong> ${budget || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Form submitted successfully and email sent!" }, { status: 200 })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ message: "Failed to submit form or send email." }, { status: 500 })
  }
}

