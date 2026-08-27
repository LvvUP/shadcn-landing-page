"use client";

import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const repositoryUrl = "https://github.com/LvvUP/shadcn-landing-page";

const footerGroups = [
  {
    titleKey: "project",
    links: [
      { labelKey: "github", href: repositoryUrl },
      { labelKey: "issues", href: `${repositoryUrl}/issues` },
      { labelKey: "discussions", href: `${repositoryUrl}/discussions` },
    ],
  },
  {
    titleKey: "resources",
    links: [
      { labelKey: "nextjs", href: "https://nextjs.org/docs" },
      { labelKey: "shadcn", href: "https://ui.shadcn.com/docs" },
      { labelKey: "nextIntl", href: "https://next-intl.dev/docs" },
    ],
  },
  {
    titleKey: "contribute",
    links: [
      { labelKey: "readme", href: `${repositoryUrl}#readme` },
      { labelKey: "contributing", href: `${repositoryUrl}/blob/main/CONTRIBUTING.md` },
      { labelKey: "security", href: `${repositoryUrl}/blob/main/SECURITY.md` },
    ],
  },
  {
    titleKey: "legal",
    links: [
      { labelKey: "license", href: `${repositoryUrl}/blob/main/LICENSE` },
      { labelKey: "attribution", href: `${repositoryUrl}/blob/main/NOTICE.md` },
    ],
  },
] as const;

export const FooterSection = () => {
  const t = useTranslations("footer");

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="rounded-2xl border border-secondary bg-card p-10">
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4 xl:grid-cols-6">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex items-center font-bold">
              <ChevronsDownIcon aria-hidden="true" className="mr-2 size-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/70 to-primary p-1.5 text-primary-foreground" />
              <span className="text-2xl">{t("brand")}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {t("tagline")}
            </p>
          </div>

          {footerGroups.map(({ titleKey, links }) => (
            <div key={titleKey} className="flex flex-col gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {t(titleKey)}
              </h2>
              {links.map(({ labelKey, href }) => (
                <Link
                  key={labelKey}
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(labelKey)}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <Separator className="my-6" />
        <p className="text-sm text-muted-foreground">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};
