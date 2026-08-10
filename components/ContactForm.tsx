"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/locale";

type Status = "idle" | "sending" | "success" | "error";

const strings = {
  fr: {
    success: "Votre message a bien été transmis, réponse sous 24h.",
    name: "Nom",
    phone: "Téléphone",
    message: "Message",
    placeholder: "Type de porte, urgence ou non...",
    sending: "Envoi en cours...",
    send: "Envoyer",
    genericError: "Envoi impossible",
  },
  en: {
    success: "Your message has been sent, I'll reply within 24h.",
    name: "Name",
    phone: "Phone",
    message: "Message",
    placeholder: "Type of door, urgent or not...",
    sending: "Sending...",
    send: "Send",
    genericError: "Could not send the message",
  },
};

export default function ContactForm({
  compact = false,
  locale = "fr",
}: {
  compact?: boolean;
  locale?: Locale;
}) {
  const t = strings[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      message: data.get("message"),
      website: data.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || t.genericError);
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : t.genericError);
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="bg-steel/10 border border-steel/30 text-navy rounded-lg p-4 text-sm"
      >
        {t.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Honeypot anti-spam — laissé vide par les humains */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-md border border-navy/20 px-3 py-2 text-navy bg-white focus:border-steel"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
          {t.phone}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="w-full rounded-md border border-navy/20 px-3 py-2 text-navy bg-white focus:border-steel"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 3 : 4}
          placeholder={t.placeholder}
          className="w-full rounded-md border border-navy/20 px-3 py-2 text-navy bg-white focus:border-steel"
        />
      </div>
      <div role="alert">
        {status === "error" && <p className="text-urgent text-sm">{errorMessage}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
        className="mt-1 bg-urgent text-white font-semibold rounded-md px-5 py-2.5 hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
