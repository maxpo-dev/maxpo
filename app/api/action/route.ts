"use server"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

// Email validation schema
const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const email = formData.get("email")

    if (typeof email !== "string") {
      return NextResponse.json({ success: false, message: "Invalid email format" }, { status: 400 })
    }

    // Validate email
    const result = subscribeSchema.safeParse({ email })

    if (!result.success) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com",
        pass: "zfie hmte iyxt wyto",
      },
    })

    // Email content
    const mailOptions = {
      from: "Maxpo Mail Submission<chvamshi03@gmail.com>",
      to: "anu.maxpo@gmail.com, digital.maxpo@gmail.com",
      subject: "New subscription for Maxpo",
      html: `
        <h1>New Newsletter Subscription</h1>
        <p>A new user has subscribed to your newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Date: ${new Date().toLocaleString()}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Thank you for subscribing. We will get back to you soon!" }, { status: 200 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ success: false, message: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
