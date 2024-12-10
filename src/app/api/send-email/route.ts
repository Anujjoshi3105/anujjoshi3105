import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendToRecipient = (name: string, email: string, msg: string) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.BASE_MAIL,
    subject: `Portfolio Response - ${name}`,
    html: `
        <div style="max-width: 600px; margin: auto; font-family: 'Arial', sans-serif; color: #333; line-height: 1.6;">
          <div style="border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            <!-- Header Section -->
            <header style="background-color: #4F46E5; padding: 20px; text-align: center; color: #fff;">
              <h2 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">
                Portfolio Response
              </h2>
            </header>
            <!-- Main Content -->
            <main style="padding: 40px 30px; background-color: #fafafa;">
              <div style="margin-bottom: 20px;">
                <h4 style="margin: 0; font-size: 18px; color: #555;">
                  <strong style="display: inline-block; width: 100px; color: #4F46E5;">Name:</strong>
                  <span style="font-weight: 400; color: #333;">${name}</span>
                </h4>
              </div>
              <div style="margin-bottom: 20px;">
                <h4 style="margin: 0; font-size: 18px; color: #555;">
                  <strong style="display: inline-block; width: 100px; color: #4F46E5;">Email:</strong>
                  <span style="font-weight: 400; color: #333;">${email}</span>
                </h4>
              </div>
              <div style="padding: 20px; background-color: #efefef; border: 1px solid #e0e0e0; border-radius: 6px;">
                <h5 style="margin: 0; font-size: 16px; font-weight: 400; color: #555; line-height: 1.6;">
                  ${msg}
                </h5>
              </div>
            </main>
            <!-- Footer Section -->
            <footer style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; font-size: 14px; color: #555;">
                Powered by 
                <a href="${
                  process.env.BASE_URL
                }" style="color: #4F46E5; font-weight: bold;">
                  ${process.env.BASE_NAME} Portfolio
                </a>
              </p>
              <p style="margin: 5px 0 0; font-size: 12px; color: #888;">
                All rights reserved &copy; ${new Date().getFullYear()} ${
      process.env.BASE_NAME
    }
              </p>
            </footer>
          </div>
        </div>
      `,
  };
  return mailOptions;
};

const sendThankYouEmail = (name: string, email: string) => {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: `${process.env.BASE_NAME} - Thank You for Reaching Out`,
    html: `
        <div style="max-width: 600px; margin: auto; font-family: 'Arial', sans-serif; color: #333; line-height: 1.6;">
          <div style="border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            <!-- Header Section -->
            <header style="background-color: #4F46E5; padding: 20px; text-align: center; color: #fff;">
              <h2 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">
                Thank you, <span style="text-transform: capitalize;">${name}</span>!
              </h2>
            </header>
            <!-- Main Content -->
            <main style="padding: 30px; background-color: #fafafa;">
              <p style="font-size: 16px; margin: 0 0 15px;">
                We've received your message and will get back to you shortly. Your inquiry is important to us, and we aim to provide you with the best support possible.
              </p>
              <p style="font-size: 16px; margin: 0;">
                If you have any further questions or need immediate assistance, feel free to reply to this email or reach out to us directly.
              </p>
              <div style="margin-top: 40px; text-align: center;">
                <a href="${
                  process.env.BASE_URL
                }" style="display: inline-block; padding: 12px 20px; background-color: #4F46E5; color: #fff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 700; text-transform: uppercase;">
                  Contact Us
                </a>
              </div>
            </main>
            <!-- Footer Section -->
            <footer style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; font-size: 14px; color: #555;">
                Powered by 
                <a href="${
                  process.env.BASE_URL
                }" style="color: #4F46E5; font-weight: bold; text-decoration: none;">
                  ${process.env.BASE_NAME} Portfolio
                </a>
              </p>
              <p style="margin: 5px 0 0; font-size: 12px; color: #888;">
                All rights reserved &copy; ${new Date().getFullYear()} ${
      process.env.BASE_NAME
    }
              </p>
            </footer>
          </div>
        </div>
      `,
  };
  return mailOptions;
};

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await Promise.all([
      transporter.sendMail(sendToRecipient(name, email, message)),
      transporter.sendMail(sendThankYouEmail(name, email)),
    ]);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
