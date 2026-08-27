"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

enum ProService {
  YES = 1,
  NO = 0,
}

const serviceKeys = ["customDomain", "socialMedia", "emailMarketing", "seo"] as const;
const servicePro = [0, 0, 0, 1];

export const ServicesSection = () => {
  const t = useTranslations("services");
  return (
    <section id="services" className="container py-24 sm:py-32">
      <p className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("sectionTag")}
      </p>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("title")}
      </h2>
      <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {t("description")}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceKeys.map((key, index) => (
          <Card
            key={key}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{t(`items.${key}.title`)}</CardTitle>
              <CardDescription>{t(`items.${key}.description`)}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === servicePro[index]}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              {t("proBadge")}
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
