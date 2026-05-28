"use client";

import { useRef, useState, useEffect, useActionState } from "react";
import { submitWaiver, type WaiverFormState } from "@/app/waiver/actions";
import { Button } from "@/components/ui/Button";

function SignaturePad({
  onChange,
  error,
}: {
  onChange: (dataUrl: string | null) => void;
  error?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = "#111111";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, []);

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    setIsDrawing(true);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
    if (isEmpty) {
      setIsEmpty(false);
      onChange(canvas!.toDataURL("image/png"));
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas && !isEmpty) {
      onChange(canvas.toDataURL("image/png"));
    }
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsEmpty(true);
    onChange(null);
  };

  return (
    <div className="space-y-2">
      <div className={`relative border ${error ? "border-blood" : "border-smoke"} bg-white`}>
        <canvas
          ref={canvasRef}
          width={600}
          height={160}
          className="w-full touch-none cursor-crosshair block"
          style={{ height: "120px" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
        {isEmpty && (
          <span className="absolute inset-0 flex items-center justify-center text-ink/30 font-body text-sm pointer-events-none select-none">
            Sign here
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="stamp text-bone/40 text-xs">Draw your signature above</span>
        <button
          type="button"
          onClick={clear}
          className="stamp text-bone/50 hover:text-blood transition-colors text-xs"
        >
          Clear
        </button>
      </div>
      {error && <p className="stamp text-blood text-xs">{error}</p>}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  defaultValue,
  readOnly,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  readOnly?: boolean;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="stamp text-bone/60 text-xs block">
        {label}{required && <span className="text-blood ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        readOnly={readOnly}
        className={`w-full bg-transparent border ${error ? "border-blood" : "border-smoke"} px-4 py-3 font-body text-bone text-base focus:outline-none focus:border-bone ${readOnly ? "opacity-50 cursor-default" : ""}`}
      />
      {error && <p className="stamp text-blood text-xs">{error}</p>}
    </div>
  );
}

const initialState: WaiverFormState = { status: "idle" };

export function WaiverForm() {
  const [state, action, pending] = useActionState(submitWaiver, initialState);
  const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null);
  const [sigError, setSigError] = useState<string | undefined>();

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!signatureDataUrl) {
      e.preventDefault();
      setSigError("Please sign the waiver before submitting.");
      return;
    }
    setSigError(undefined);
    const form = e.currentTarget;
    const hiddenInput = form.querySelector<HTMLInputElement>('[name="signatureDataUrl"]');
    if (hiddenInput) hiddenInput.value = signatureDataUrl;
  };

  if (state.status === "success") {
    return (
      <div className="border border-smoke p-10 space-y-4 text-center">
        <p className="font-display uppercase text-3xl text-bone">Waiver received.</p>
        <p className="font-body text-bone/60 text-base leading-relaxed">
          Your signed waiver has been submitted. See you at the gym.
        </p>
      </div>
    );
  }

  const fieldErrors = state.status === "error" ? state.errors : {};

  return (
    <form action={action} onSubmit={handleSubmit} className="space-y-8">
      {/* honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="signatureDataUrl" defaultValue="" />
      <input type="hidden" name="date" value={today} />

      {state.status === "error" && state.message && (
        <p className="stamp text-blood text-sm border border-blood px-4 py-3">{state.message}</p>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Participant's Full Name"
          name="participantName"
          placeholder="Print your full name"
          required
          error={fieldErrors.participantName?.[0]}
        />
        <Field
          label="Date"
          name="_date_display"
          defaultValue={today}
          readOnly
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field
          label="Emergency Contact Name"
          name="emergencyContact"
          placeholder="Full name"
          required
          error={fieldErrors.emergencyContact?.[0]}
        />
        <Field
          label="Emergency Contact Phone"
          name="emergencyPhone"
          type="tel"
          placeholder="(000) 000-0000"
          required
          error={fieldErrors.emergencyPhone?.[0]}
        />
      </div>

      <Field
        label="Parent / Guardian Signature (if participant is under 18)"
        name="parentSignature"
        placeholder="Parent or guardian full name (leave blank if 18+)"
        error={fieldErrors.parentSignature?.[0]}
      />

      <div className="space-y-2">
        <label className="stamp text-bone/60 text-xs block">
          Participant Signature <span className="text-blood">*</span>
        </label>
        <SignaturePad onChange={setSignatureDataUrl} error={sigError} />
      </div>

      <div className="pt-2">
        <Button type="submit" disabled={pending} className="w-full sm:w-auto">
          {pending ? "Submitting…" : "Submit Signed Waiver"}
        </Button>
      </div>
    </form>
  );
}
