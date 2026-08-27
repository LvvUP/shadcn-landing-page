"use client";

import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("accessibility");

  return (
    <a
      href="#main-content"
      className="sr-only fixed left-4 top-4 z-50 rounded-md bg-background px-4 py-2 font-medium text-foreground shadow-lg focus:not-sr-only"
    >
      {t("skipToContent")}
    </a>
  );
}
