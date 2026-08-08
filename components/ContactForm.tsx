"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
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
        throw new Error(body.error || "Envoi impossible");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Envoi impossible");
    }
  }

  if (status === "success") {
    return (
      <p className="bg-steel/10 border border-steel/30 text-navy rounded-lg p-4 text-sm">
        Votre message a bien été transmis, réponse sous 24h.
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
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-navy/20 px-3 py-2 text-navy bg-white focus:border-steel outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-md border border-navy/20 px-3 py-2 text-navy bg-white focus:border-steel outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 3 : 4}
          placeholder="Type de porte, urgence ou non..."
          className="w-full rounded-md border border-navy/20 px-3 py-2 text-navy bg-white focus:border-steel outline-none"
        />
      </div>
      {status === "error" && (
        <p className="text-urgent text-sm">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 bg-urgent text-white font-semibold rounded-md px-5 py-2.5 hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}
