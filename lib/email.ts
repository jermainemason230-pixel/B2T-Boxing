import { Resend } from "resend";

type WaiverPayload = {
  participantName: string;
  date: string;
  emergencyContact: string;
  emergencyPhone: string;
  parentSignature?: string;
  signatureDataUrl: string;
};

export async function sendWaiverEmail(payload: WaiverPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.OWNER_EMAIL;

  if (!apiKey || !to) {
    throw new Error("Email not configured. Set RESEND_API_KEY and OWNER_EMAIL.");
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
      <h2 style="background:#111;color:#fff;padding:20px;margin:0">B2T Boxing — Signed Waiver</h2>
      <div style="padding:24px;border:1px solid #ddd">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;font-weight:bold;width:180px">Participant Name</td><td>${payload.participantName}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Date Signed</td><td>${payload.date}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Emergency Contact</td><td>${payload.emergencyContact}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold">Emergency Phone</td><td>${payload.emergencyPhone}</td></tr>
          ${payload.parentSignature ? `<tr><td style="padding:8px 0;font-weight:bold">Parent / Guardian</td><td>${payload.parentSignature}</td></tr>` : ""}
        </table>
        <div style="margin-top:24px;border-top:1px solid #ddd;padding-top:24px">
          <p style="font-weight:bold;margin:0 0 8px">Signature:</p>
          <img src="${payload.signatureDataUrl}" alt="Participant signature" style="border:1px solid #ddd;background:#fff;max-width:400px" />
        </div>
        <p style="margin-top:24px;font-size:12px;color:#888">Submitted electronically via b2tboxing.com on ${payload.date}</p>
      </div>
    </div>
  `;

  return resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject: `[B2T] Signed Waiver — ${payload.participantName}`,
    html,
  });
}

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
