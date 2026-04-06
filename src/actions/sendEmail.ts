"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  // Simple validation
  if (!message || !senderEmail || !name) {
    return { error: "All fields are required." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Me email eken thama oyata mail eka enne
      to: "chanuldilmith200@gmail.com", // ⚠️ METHANATA OYAGE ATHHTHA EMAIL EKA DANNA! 
      subject: `New Message from ${name}`,
      replyTo: senderEmail,
      text: `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error: unknown) {
    return { error: "Failed to send email. Please try again later." };
  }
}