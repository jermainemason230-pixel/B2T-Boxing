"use server";

import { z } from "zod";
import { sendWaiverEmail } from "@/lib/email";

const schema = z.object({
  participantName: z.string().min(2, "Full name is required"),
  date: z.string().min(1),
  emergencyContact: z.string().min(2, "Emergency contact name is required"),
  emergencyPhone: z.string().min(7, "Emergency contact phone is required"),
  parentSignature: z.string().optional(),
  signatureDataUrl: z.string().startsWith("data:image/", "Signature is required"),
  website: z.string().max(0, "Bot detected"),
});

export type WaiverFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors: Partial<Record<string, string[]>>; message?: string };

export async function submitWaiver(
  _prev: WaiverFormState,
  formData: FormData,
): Promise<WaiverFormState> {
  const raw = {
    participantName: formData.get("participantName"),
    date: formData.get("date"),
    emergencyContact: formData.get("emergencyContact"),
    emergencyPhone: formData.get("emergencyPhone"),
    parentSignature: formData.get("parentSignature") || undefined,
    signatureDataUrl: formData.get("signatureDataUrl"),
    website: formData.get("website"),
  };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    if (parsed.error.flatten().fieldErrors.website) {
      return { status: "success" };
    }
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await sendWaiverEmail(parsed.data);
    return { status: "success" };
  } catch (err) {
    console.error("Waiver email error:", err);
    return {
      status: "error",
      errors: {},
      message: "Something went wrong. Please try again or sign in person at the gym.",
    };
  }
}
