"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const faqKeys = ["item1", "item2", "item3", "item4", "item5"] as const;

export const FAQSection = () => {
  const t = useTranslations("faq");
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <p className="text-lg text-primary text-center mb-2 tracking-wider">
          {t("sectionTag")}
        </p>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {t("title")}
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {faqKeys.map((key) => (
          <AccordionItem key={key} value={key}>
            <AccordionTrigger className="text-left">
              {t(`items.${key}.question`)}
            </AccordionTrigger>
            <AccordionContent>{t(`items.${key}.answer`)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
