"use server";

import { sendInquiryEmail } from "@/lib/email";
import { serviceOptions } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  if (name.length < 2) {
    return { status: "error", message: "Please enter your name." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!serviceOptions.includes(service as (typeof serviceOptions)[number])) {
    return { status: "error", message: "Please select a service of interest." };
  }

  if (details.length < 20) {
    return {
      status: "error",
      message: "Please share a bit more about the project (at least 20 characters).",
    };
  }

  try {
    await sendInquiryEmail({ name, email, service, details });
    return {
      status: "success",
      message: "Thank you. Your inquiry was sent to AISyntax Studio. We will reply shortly.",
    };
  } catch (error) {
    const configured = Boolean(process.env.RESEND_API_KEY || process.env.SMTP_HOST);
    console.error("Contact form failed", error);
    return {
      status: "error",
      message: configured
        ? "We could not send the message right now. Please email aisyntaxstudios@gmail.com or try WhatsApp."
        : "The email service is not configured on this deployment yet. Please email aisyntaxstudios@gmail.com or message us on WhatsApp.",
    };
  }
}
