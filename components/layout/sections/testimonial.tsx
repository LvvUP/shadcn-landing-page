"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const reviewKeys = ["review1", "review2", "review3", "review4", "review5", "review6"] as const;

export const TestimonialSection = () => {
  const t = useTranslations("testimonials");
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <p className="text-lg text-primary text-center mb-2 tracking-wider">
          {t("sectionTag")}
        </p>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          {t("title")}
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          {t("disclaimer")}
        </p>
      </div>

      <Carousel
        opts={{ align: "start" }}
        labels={{
          region: t("carousel.region"),
          previous: t("carousel.previous"),
          next: t("carousel.next"),
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewKeys.map((key) => {
            const reviewerName = t(`reviews.${key}.name`);
            const initials = reviewerName
              .split(/\s+/)
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <CarouselItem
                key={key}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full bg-muted/50 dark:bg-card">
                  <CardContent className="pt-6 pb-0">
                    <div className="flex gap-1 pb-6" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="size-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="sr-only">{t("fiveStarRating")}</span>
                    <blockquote>“{t(`reviews.${key}.comment`)}”</blockquote>
                  </CardContent>

                  <CardHeader>
                    <div className="flex flex-row items-center gap-4">
                      <Avatar aria-hidden="true">
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col">
                        <CardTitle className="text-lg">{reviewerName}</CardTitle>
                        <CardDescription>{t(`reviews.${key}.role`)}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
