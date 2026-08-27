"use client";
import { ChevronsDown, GitFork, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations("navbar");

  const routeList = [
    { href: "#testimonials", label: t("testimonials") },
    { href: "#team", label: t("team") },
    { href: "#contact", label: t("contact") },
    { href: "#faq", label: t("faq") },
  ];

  const featureList = [
    { title: t("featureList.showcaseTitle"), description: t("featureList.showcaseDesc") },
    { title: t("featureList.trustTitle"), description: t("featureList.trustDesc") },
    { title: t("featureList.leadsTitle"), description: t("featureList.leadsDesc") },
  ];

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <ChevronsDown aria-hidden="true" className="mr-2 size-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/70 to-primary text-primary-foreground" />
        {t("brand")}
      </Link>
      {/* Mobile */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={t("openMenu")}
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            closeLabel={t("closeMenu")}
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown aria-hidden="true" className="mr-2 size-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/70 to-primary text-primary-foreground" />
                    {t("brand")}
                  </Link>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  {t("menuDescription")}
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
              <LanguageSwitcher />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              {t("features")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <div
                  className="flex min-h-56 flex-col justify-end rounded-xl border bg-gradient-to-br from-primary/20 via-background to-muted p-6"
                  role="img"
                  aria-label={t("featureImageAlt")}
                >
                  <ChevronsDown className="mb-4 size-10 rounded-lg border border-primary/20 bg-primary p-2 text-primary-foreground" />
                  <p className="text-xl font-bold">{t("brand")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("featureImageAlt")}
                  </p>
                </div>
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <LanguageSwitcher />
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label={t("viewOnGithub")}>
          <Link
            aria-label={t("viewOnGithub")}
            href="https://github.com/LvvUP/shadcn-landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitFork aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
