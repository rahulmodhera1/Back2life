"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Faq as FaqItem } from "@/data/ink";

type FaqProps = {
  items: FaqItem[];
};

/** Accessible FAQ accordion with eased open/close. */
export function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-white transition-colors duration-200 hover:text-mid"
              >
                {item.question}
                <Plus
                  className={`size-5 flex-none text-gold transition-transform duration-300 [transition-timing-function:var(--ease-out-strong)] ${
                    open ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out-strong)]"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose pb-5 text-sm leading-relaxed text-white/70">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
