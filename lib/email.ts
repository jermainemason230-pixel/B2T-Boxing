import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  contactMethod: "call" | "text" | "email";
  experience: "none" | "some" | "experienced";
  message?: string;
};

const FROM_ADDRESS = "B2T Boxing <onboarding@resend.dev>";

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.OWNER_EMAIL;

  if (!apiKey || !to) {
    throw new Error(
      "Email not configured. Set RESEND_API_KEY and OWNER_EMAIL.",
    );
  }

  const resend = new Resend(apiKey);

  const subject = `[B2T] Free trial inquiry — ${payload.name}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Preferred contact: ${payload.contactMethod}`,
    `Experience: ${payload.experience}`,
    "",
    "Message:",
    payload.message ?? "(none)",
  ].join("\n");

  return resend.emails.send({
    from: FROM_ADDRESS,
    to,
    replyTo: payload.email,
    subject,
    text,
  });
}
