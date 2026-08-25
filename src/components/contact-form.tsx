"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { PROFILE } from "@/lib/profile";

/**
 * Contact form — posts to FormSubmit.co's AJAX endpoint, which forwards the
 * message to PROFILE.email. No backend, no API key; spam is filtered by a
 * honeypot field and FormSubmit's own checks.
 */

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "w-full rounded-xl border border-border bg-bg-raised/60 px-4 py-3 text-sm text-fg placeholder:text-fg-dim/70 transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill every field; humans never see this one.
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: `Portfolio message from ${data.get("name")}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card flex items-center gap-3 p-6 text-sm text-fg">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-ok" aria-hidden="true" />
        <p>
          Message sent — thanks for reaching out. I usually reply within a day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-fg-dim">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={FIELD}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-fg-dim">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={FIELD}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-fg-dim">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="A role, a project, or just a question — go ahead."
          className={`${FIELD} resize-y`}
        />
      </label>
      {/* Honeypot — hidden from humans, irresistible to bots. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 font-mono text-sm text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40 hover:brightness-110 disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          )}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="font-mono text-xs text-fg-dim">
          or email me directly:{" "}
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-accent hover:underline"
          >
            {PROFILE.email}
          </a>
        </p>
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-fg-dim">
          <TriangleAlert className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          Something went wrong sending that — please use the email address above
          instead.
        </p>
      )}
    </form>
  );
}
