"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icon";
import { useTranslations } from "next-intl";

const featureKeys = [
  "mobileFriendly", "socialProof", "targetedContent",
  "strongVisuals", "clearCTA", "clearHeadline",
] as const;
const featureIcons: IconName[] = [
  "TabletSmartphone", "BadgeCheck", "Goal",
  "PictureInPicture", "MousePointerClick", "Newspaper",
];

export const FeaturesSection = () => {
  const t = useTranslations("features");
  const tItems = useTranslations("featureItems");
  return (
    <section id="features" className="container py-24 sm:py-32">
      <p className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("sectionTag")}
      </p>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("title")}
      </h2>
      <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {t("description")}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureKeys.map((key, index) => (
          <div key={key}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={featureIcons[index]}
                    size={24}
                    color="currentColor"
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle>{tItems(`${key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                {tItems(`${key}.description`)}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
