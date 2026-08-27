"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessagesSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export const CommunitySection = () => {
  const t = useTranslations("community");
  return (
    <section id="community" className="py-12" aria-labelledby="community-title">
      <Separator />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <MessagesSquare className="mx-auto mb-4 size-12 text-primary" aria-hidden="true" />
              <h2 id="community-title" className="text-4xl font-bold md:text-5xl">
                <span>
                  {t("titlePart1")}
                  {" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {t("titlePart2")}
                  </span>
                </span>
              </h2>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              {t("description")}
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a
                  href="https://github.com/LvvUP/shadcn-landing-page/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("joinButton")}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Separator />
    </section>
  );
};
