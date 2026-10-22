import nodemailer from "nodemailer";

const CONTACT_TO = process.env.CONTACT_TO ?? "aisyntaxstudios@gmail.com";

export type InquiryPayload = {
  name: string;
  email: string;
  service: string;
  details: string;
};

function isConfigured() {
  return Boolean(process.env.RESEND_API_KEY || process.env.SMTP_HOST);
}

export async function sendInquiryEmail(payload: InquiryPayload) {
  if (!isConfigured()) {
    throw new Error(
      "Email is not configured. Add RESEND_API_KEY or SMTP_HOST, SMTP_USER, and SMTP_PASS to the environment.",
    );
  }

  const subject = `New inquiry from ${payload.name} — ${payload.service}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Service of interest: ${payload.service}`,
    "",
    "Project details:",
    payload.details,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Service of interest:</strong> ${escapeHtml(payload.service)}</p>
      <p><strong>Project details:</strong></p>
      <p>${escapeHtml(payload.details).replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  if (process.env.RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "AISyntax Studio <onboarding@resend.dev>",
        to: [CONTACT_TO],
        reply_to: payload.email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Resend rejected the message (${response.status}): ${body}`);
    }

    return;
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM ?? process.env.SMTP_USER ?? CONTACT_TO,
    to: CONTACT_TO,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
