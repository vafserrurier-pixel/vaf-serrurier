"use client";

import { useState } from "react";

export type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <button
              type="button"
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 py-4 text-left font-heading font-semibold text-navy"
            >
              {item.question}
              <span className="text-steel text-xl leading-none shrink-0" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="pb-4 text-slate text-sm leading-relaxed"
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
