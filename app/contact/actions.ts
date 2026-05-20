"use server";

import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  contactMethod: z.enum(["call", "text", "email"]),
  experience: z.enum(["none", "some", "experienced"]),
  message: z.string().max(2000).optional(),
  // honeypot — must be empty; bots fill it, humans leave it blank
  website: z.string().max(0, "Bot detected"),
});

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors: Partial<Record<string, string[]>>; message?: string };

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    contactMethod: formData.get("contactMethod"),
    experience: formData.get("experience"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    // honeypot triggered — silently succeed so bots don't learn
    if (parsed.error.flatten().fieldErrors.website) {
      return { status: "success" };
    }
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await sendContactEmail(parsed.data);
    return { status: "success" };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      status: "error",
      errors: {},
      message: "Something went wrong sending your message. Call or text us instead.",
    };
  }
}
