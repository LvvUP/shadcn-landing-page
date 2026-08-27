"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { NextIntlClientProvider } from "next-intl";
import { type Locale, defaultLocale, locales } from "@/lib/i18n-config";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

interface LocaleProviderProps {
  children: React.ReactNode;
  initialLocale: Locale;
  initialMessages: Record<string, unknown>;
  timeZone: string;
}

export function LocaleProvider({
  children,
  initialLocale,
  initialMessages,
  timeZone,
}: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [messages, setMessages] = useState(initialMessages);

  const setLocale = useCallback(async (newLocale: Locale) => {
    if (!locales.includes(newLocale)) return;
    const newMessages = (await import(`../messages/${newLocale}.json`)).default;
    const metadata = newMessages.metadata as {
      title: string;
      description: string;
    };
    setMessages(newMessages);
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.cookie = `locale=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = newLocale;
    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone={timeZone}
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
