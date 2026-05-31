"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqGroups } from "@/data/faq";

export function FaqAccordion() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqGroups[0]?.items[0]?.question ?? null,
  );

  return (
    <div className="space-y-10">
      {faqGroups.map((group) => (
        <section
          key={group.title}
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6"
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                {group.title}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {group.description}
              </p>
            </div>

            <div className="space-y-3">
              {group.items.map((item) => {
                const isOpen = openQuestion === item.question;

                return (
                  <article
                    key={item.question}
                    className="rounded-[1.25rem] border border-white/10 bg-black/20"
                  >
                    <button
                      onClick={() =>
                        setOpenQuestion(isOpen ? null : item.question)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold leading-6 text-white">
                        {item.question}
                      </span>

                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-blue-200 transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen ? (
                      <div className="border-t border-white/10 px-5 py-4">
                        <p className="text-sm leading-7 text-slate-400">
                          {item.answer}
                        </p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
