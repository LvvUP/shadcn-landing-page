import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([
    getTranslations("metadata"),
    getLocale(),
  ]);
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    applicationName: "Shadcn Landing Page",
    authors: [{ name: "LvvUP", url: "https://github.com/LvvUP" }],
    creator: "LvvUP",
    category: "technology",
    keywords: [
      "Next.js landing page",
      "shadcn/ui",
      "Tailwind CSS",
      "bilingual template",
      "next-intl",
      "React starter",
    ],
    openGraph: {
      type: "website",
      locale: locale.replace("-", "_"),
      alternateLocale: locale === "zh-CN" ? "en_US" : "zh_CN",
      title,
      description,
      siteName: "Shadcn Landing Page",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
