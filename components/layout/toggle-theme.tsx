"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("theme");

  const themes = [
    { value: "light", label: t("light"), icon: Sun },
    { value: "dark", label: t("dark"), icon: Moon },
    { value: "system", label: t("system"), icon: Monitor },
  ] as const;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          className="w-full justify-start lg:w-auto"
          aria-label={t("toggleTheme")}
        >
          <Sun className="size-5 dark:hidden" aria-hidden="true" />
          <Moon className="hidden size-5 dark:block" aria-hidden="true" />
          <span className="block lg:hidden">{t("toggleTheme")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={theme ?? "system"} onValueChange={setTheme}>
          {themes.map(({ value, label, icon: ThemeIcon }) => (
            <DropdownMenuRadioItem
              key={value}
              value={value}
              className="cursor-pointer"
            >
              <ThemeIcon className="size-4" aria-hidden="true" />
              <span>{label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
