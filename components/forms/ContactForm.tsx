"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Button } from "@/components/ui/Button";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number required"),
  contactMethod: z.enum(["call", "text", "email"]),
  experience: z.enum(["none", "some", "experienced"]),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const CONTACT_OPTIONS = [
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "email", label: "Email" },
];

const EXPERIENCE_OPTIONS = [
  { value: "none", label: "None" },
  { value: "some", label: "Some" },
  { value: "experienced", label: "Experienced" },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} arrow>
      {pending ? "Sending…" : "Send message"}
    </Button>
  );
}

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      contactMethod: "call",
      experience: "none",
    },
  });

  if (state.status === "success") {
    return (
      <div className="space-y-6 py-8">
        <div className="h-1 w-16 bg-blood" />
        <h2 className="font-display uppercase text-4xl md:text-5xl">
          Got it.
        </h2>
        <p className="font-body text-bone/70 text-lg leading-relaxed max-w-md">
          We&apos;ll be in touch soon. If you need us sooner, call or text{" "}
          <a
            href="tel:971-900-3973"
            className="text-bone underline underline-offset-4"
          >
            (971) 900-3973
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-10" noValidate>
      {/* honeypot — hidden from humans, filled by bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="sr-only"
      />

      <div className="grid sm:grid-cols-2 gap-8">
        <Input
          label="Name"
          {...register("name")}
          error={
            state.status === "error"
              ? state.errors?.name?.[0]
              : errors.name?.message
          }
          autoComplete="name"
        />
        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={
            state.status === "error"
              ? state.errors?.email?.[0]
              : errors.email?.message
          }
          autoComplete="email"
        />
      </div>

      <Input
        label="Phone"
        type="tel"
        {...register("phone")}
        error={
          state.status === "error"
            ? state.errors?.phone?.[0]
            : errors.phone?.message
        }
        autoComplete="tel"
      />

      <SegmentedControl
        name="contactMethod"
        label="Preferred contact"
        options={CONTACT_OPTIONS}
        value={watch("contactMethod")}
        onChange={(v) =>
          setValue("contactMethod", v as FormValues["contactMethod"])
        }
        error={
          state.status === "error"
            ? state.errors?.contactMethod?.[0]
            : undefined
        }
      />

      <SegmentedControl
        name="experience"
        label="Boxing experience"
        options={EXPERIENCE_OPTIONS}
        value={watch("experience")}
        onChange={(v) =>
          setValue("experience", v as FormValues["experience"])
        }
      />

      <Textarea
        label="Message (optional)"
        {...register("message")}
        placeholder="Anything you want us to know before you come in…"
      />

      {/* hidden inputs for segmented values (Server Action reads FormData) */}
      <input type="hidden" name="contactMethod" value={watch("contactMethod")} />
      <input type="hidden" name="experience" value={watch("experience")} />

      {state.status === "error" && state.message ? (
        <p className="stamp text-blood">{state.message}</p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
