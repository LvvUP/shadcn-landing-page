"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe2, LayoutTemplate, MoonStar } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const previewHighlights = [
  { key: "locales", value: "2", icon: Globe2 },
  { key: "themes", value: "3", icon: MoonStar },
  { key: "sections", value: "12", icon: LayoutTemplate },
] as const;

export const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <section className="container w-full" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-screen-xl place-items-center gap-12 py-20 md:py-32">
        <div className="flex max-w-screen-md flex-col items-center gap-8 text-center">
          <Badge variant="outline" className="gap-2 px-3 py-1.5 text-sm">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            {t("badgeText")}
          </Badge>

          <div className="text-4xl font-bold tracking-tight md:text-6xl">
            <h1 id="hero-title">
              {t("titlePart1")}{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t("titleHighlight")}
              </span>{" "}
              {t("titlePart2")}
            </h1>
          </div>

          <p className="max-w-screen-sm text-lg text-muted-foreground md:text-xl">
            {t("description")}
          </p>

          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="font-semibold">
              <Link href="#features">
                {t("getStarted")}
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link
                href="https://github.com/LvvUP/shadcn-landing-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("githubRepo")}
              </Link>
            </Button>
          </div>
        </div>

        <div
          className="relative w-full max-w-6xl"
          role="img"
          aria-label={t("preview.alt")}
        >
          <div className="absolute inset-x-12 -top-8 h-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/10">
            <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3 sm:px-6">
              <div className="flex gap-2" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-primary/80" />
                <span className="size-2.5 rounded-full bg-primary/40" />
                <span className="size-2.5 rounded-full bg-muted-foreground/25" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {t("preview.canvasLabel")}
              </span>
              <Badge variant="secondary">{t("preview.ready")}</Badge>
            </div>

            <div className="grid gap-6 bg-gradient-to-br from-primary/10 via-background to-muted/60 p-5 sm:p-8 lg:grid-cols-[1.25fr_0.75fr] lg:p-10">
              <div className="flex min-h-72 flex-col justify-center rounded-xl border bg-background/90 p-6 shadow-sm sm:p-10">
                <Badge variant="outline" className="mb-5 w-fit">
                  {t("preview.eyebrow")}
                </Badge>
                <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                  {t("preview.title")}
                </h2>
                <p className="mt-4 max-w-lg text-muted-foreground">
                  {t("preview.description")}
                </p>
                <div className="mt-7 flex flex-wrap gap-3" aria-hidden="true">
                  <span className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                    {t("preview.primaryAction")}
                  </span>
                  <span className="rounded-md border bg-background px-4 py-2 text-sm font-semibold">
                    {t("preview.secondaryAction")}
                  </span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {previewHighlights.map(({ key, value, icon: HighlightIcon }) => (
                  <div
                    key={key}
                    className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <HighlightIcon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-sm text-muted-foreground">
                        {t(`preview.highlights.${key}`)}
                      </div>
                    </div>
                    <Check className="ml-auto size-4 text-primary" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
