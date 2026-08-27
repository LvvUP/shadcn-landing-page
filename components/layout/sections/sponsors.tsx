"use client";

import { Icon, type IconName } from "@/components/ui/icon";
import { useTranslations } from "next-intl";

interface Sponsor {
  icon: IconName;
  name: string;
}

const sponsors: Sponsor[] = [
  { icon: "Crown", name: "Acmebrand" },
  { icon: "Vegan", name: "Acmelogo" },
  { icon: "Ghost", name: "Acmesponsor" },
  { icon: "Puzzle", name: "Acmeipsum" },
  { icon: "Squirrel", name: "Acme" },
  { icon: "Cookie", name: "Accmee" },
  { icon: "Drama", name: "Acmetech" },
];

export const SponsorsSection = () => {
  const t = useTranslations("sponsors");
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center">
        {t("title")}
      </h2>
      <p className="mb-6 mt-2 text-center text-sm text-muted-foreground">
        {t("description")}
      </p>

      <div className="group mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {[0, 1].map((track) => (
          <div
            key={track}
            aria-hidden={track === 1}
            className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 pr-12 group-hover:[animation-play-state:paused]"
          >
            {sponsors.map(({ icon, name }) => (
              <div
                key={name}
                className="flex items-center text-xl font-medium md:text-2xl"
              >
                <Icon
                  name={icon}
                  size={32}
                  color="currentColor"
                  className="mr-2 text-primary"
                  aria-hidden="true"
                />
                {name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
