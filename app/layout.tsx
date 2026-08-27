import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LocaleProvider } from "@/components/locale-provider";
import { getLocale, getMessages } from "next-intl/server";
import { type Locale, timeZone } from "@/lib/i18n-config";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, messages] = await Promise.all([
    getLocale() as Promise<Locale>,
    getMessages(),
  ]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider
            initialLocale={locale}
            initialMessages={messages}
            timeZone={timeZone}
          >
            <SkipLink />
            <Navbar />
            <main id="main-content">{children}</main>
            <FooterSection />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
