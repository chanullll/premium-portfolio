"use server";

import { Resend } from "resend";

// Resend API key එක
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // "as string" දාලා TypeScript error එක නැති කරනවා
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;
  const name = formData.get("name") as string;

  // Validation
  if (!senderEmail || !message || !name) {
    return { error: "Invalid form data" };
  }

  try {
    const data = await resend.emails.send({
      // Resend free tier එක නිසා මේක වෙනස් කරන්න එපා
      from: "Portfolio Contact Form <onboarding@resend.dev>", 
      
      // ඔයාගේ ඇත්ත ඊමේල් එක
      to: "chanuldilmith200@gmail.com", 
      
      subject: `New Message from ${name} via Portfolio`,
      reply_to: senderEmail,
      text: `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`,
    });

    return { data };
  } catch (error: unknown) {
    console.error("Resend Error:", error);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
};