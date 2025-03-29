import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("Received application submission request");
    const formData = await req.formData();

    // Extract form data
    const jobTitle = formData.get("jobTitle") as string;
    const jobLocation = formData.get("jobLocation") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const experience = formData.get("experience") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resume = formData.get("resume") as File;

    console.log("Form data received:", {
      jobTitle,
      jobLocation,
      fullName,
      email,
      phone,
      experience,
      hasResume: resume ? true : false,
      resumeSize: resume ? resume.size : 0,
    });

    // Validate required fields
    if (!jobTitle || !jobLocation || !fullName || !email || !phone || !experience) {
      console.log("Missing required fields");
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    console.log("Creating email transporter");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com",
        pass: "zfie hmte iyxt wyto", // Store securely using environment variables
      },
    });

    // Prepare email content
    const emailContent = `
      <h1>New Job Application</h1>
      <h2>Position: ${jobTitle} (${jobLocation})</h2>
      
      <h3>Applicant Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Experience:</strong> ${experience} years</li>
      </ul>
      
      ${coverLetter ? `<h3>Cover Letter:</h3><p>${coverLetter}</p>` : ""}
      
      <p>Date: ${new Date().toLocaleString()}</p>
    `;

    // Prepare email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: "chvamshi03@gmail.com",
      to: "chvamshi03@gmail.com , hrg.maxpo@gmail.com",
      subject: `New Application: ${jobTitle} - ${fullName}`,
      html: emailContent,
      replyTo: email,
    };

    // Add resume attachment if provided
    if (resume && resume.size > 0) {
      console.log("Processing resume attachment:", resume.name);
      try {
        const buffer = Buffer.from(await resume.arrayBuffer());
        mailOptions.attachments = [
          {
            filename: resume.name,
            content: buffer,
          },
        ];
      } catch (attachmentError) {
        console.error("Error processing attachment:", attachmentError);
      }
    }

    // Send email
    console.log("Attempting to send email to:", mailOptions.to);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
