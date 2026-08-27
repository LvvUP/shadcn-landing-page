"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

const planKeys = ["free", "premium", "enterprise"] as const;
const planPrices = [0, 45, 120];
const planPopular = [0, 1, 0];
const planHrefs = [
  "https://github.com/LvvUP/shadcn-landing-page",
  "#contact",
  "#contact",
] as const;

export const PricingSection = () => {
  const t = useTranslations("pricing");
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <p className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("sectionTag")}
      </p>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("title")}
      </h2>
      <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground">
        {t("description")}
      </p>
      <p className="mx-auto pb-14 pt-3 text-center text-sm text-muted-foreground">
        {t("disclaimer")}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {planKeys.map((key, index) => (
          <Card
            key={key}
            className={
              planPopular[index] === PopularPlan.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="pb-2">{t(`plans.${key}.title`)}</CardTitle>
              <CardDescription className="pb-4">
                {t(`plans.${key}.description`)}
              </CardDescription>
              <div>
                <span className="text-3xl font-bold">${planPrices[index]}</span>
                <span className="text-muted-foreground"> {t("perMonth")}</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="flex flex-col gap-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-primary" aria-hidden="true" />
                    <span>{t(`plans.${key}.benefits.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                asChild
                variant={
                  planPopular[index] === PopularPlan.YES ? "default" : "secondary"
                }
                className="w-full"
              >
                <Link
                  href={planHrefs[index]}
                  target={planHrefs[index].startsWith("https://") ? "_blank" : undefined}
                  rel={planHrefs[index].startsWith("https://") ? "noopener noreferrer" : undefined}
                >
                  {t(`plans.${key}.buttonText`)}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
