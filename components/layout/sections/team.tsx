"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

type TeamRoleKey =
  | "frontendDeveloper"
  | "websiteCreator"
  | "uiUxDesigner"
  | "machineLearningEngineer"
  | "tensorflowTinkerer"
  | "cloudNativeDeveloper"
  | "kubernetesOrchestrator"
  | "devopsEngineer"
  | "cicdMastermind"
  | "javascriptEvangelist"
  | "denoChampion"
  | "backendDeveloper"
  | "fullstackDeveloper"
  | "uxResearcher";

interface TeamMember {
  firstName: string;
  lastName: string;
  positionKeys: TeamRoleKey[];
}

const teamList: TeamMember[] = [
  {
    firstName: "Ava",
    lastName: "Chen",
    positionKeys: ["frontendDeveloper", "websiteCreator"],
  },
  {
    firstName: "Noah",
    lastName: "Williams",
    positionKeys: ["uiUxDesigner"],
  },
  {
    firstName: "Mia",
    lastName: "Patel",
    positionKeys: ["machineLearningEngineer", "tensorflowTinkerer"],
  },
  {
    firstName: "Ethan",
    lastName: "Kim",
    positionKeys: ["cloudNativeDeveloper", "kubernetesOrchestrator"],
  },
  {
    firstName: "Sofia",
    lastName: "Rossi",
    positionKeys: ["devopsEngineer", "cicdMastermind"],
  },
  {
    firstName: "Lucas",
    lastName: "Martin",
    positionKeys: ["javascriptEvangelist", "denoChampion"],
  },
  {
    firstName: "Emma",
    lastName: "Garcia",
    positionKeys: ["backendDeveloper"],
  },
  {
    firstName: "Liam",
    lastName: "Taylor",
    positionKeys: ["fullstackDeveloper", "uxResearcher"],
  },
];

export const TeamSection = () => {
  const t = useTranslations("team");

  return (
    <section id="team" className="container py-24 sm:py-32 lg:w-[75%]">
      <div className="mb-8 text-center">
        <p className="mb-2 text-center text-lg tracking-wider text-primary">
          {t("sectionTag")}
        </p>
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {t("disclaimer")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamList.map(({ firstName, lastName, positionKeys }) => {
          const fullName = `${firstName} ${lastName}`;
          const initials = `${firstName[0]}${lastName[0]}`;

          return (
            <Card
              key={fullName}
              className="group flex h-full flex-col overflow-hidden bg-muted/60 dark:bg-card"
            >
              <div
                className="grid aspect-square place-items-center bg-gradient-to-br from-primary/25 via-background to-muted text-5xl font-bold text-primary transition-transform duration-200 group-hover:scale-[1.01]"
                aria-hidden="true"
              >
                {initials}
              </div>
              <CardHeader className="pb-3">
                <CardTitle aria-label={fullName}>
                  {firstName}
                  <span className="ml-2 text-primary">{lastName}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                  {positionKeys.map((positionKey) => (
                    <li key={positionKey}>{t(`roles.${positionKey}`)}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
