"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icon";
import { useTranslations } from "next-intl";

const benefitKeys = ["brandTrust", "moreLeads", "higherConversions", "testIdeas"] as const;
const benefitIcons: IconName[] = ["Blocks", "LineChart", "Wallet", "Sparkle"];

export const BenefitsSection = () => {
  const t = useTranslations("benefits");
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <p className="text-lg text-primary mb-2 tracking-wider">
            {t("sectionTag")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitKeys.map((key, index) => (
            <Card
              key={key}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={benefitIcons[index]}
                    size={32}
                    color="currentColor"
                    className="mb-6 text-primary"
                    aria-hidden="true"
                  />
                  <span aria-hidden="true" className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>
                <CardTitle>{t(`items.${key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {t(`items.${key}.description`)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
