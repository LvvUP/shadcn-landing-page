"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useLocale } from "@/components/locale-provider";

export const ContactSection = () => {
  const t = useTranslations("contact");
  const { locale } = useLocale();
  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, t("form.validation.minLength"))
      .max(255, t("form.validation.maxLength")),
    lastName: z
      .string()
      .min(2, t("form.validation.minLength"))
      .max(255, t("form.validation.maxLength")),
    email: z.email(t("form.validation.invalidEmail")),
    subject: z.enum([
      "webDev",
      "mobileDev",
      "figmaDesign",
      "restApi",
      "fullstack",
    ]),
    message: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "webDev",
      message: "",
    },
  });

  useEffect(() => {
    form.clearErrors();
  }, [form, locale]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    const subjectLabel = t(`form.${subject}`);
    const body = t("form.mailBody", {
      firstName,
      lastName,
      email,
      message,
    });
    const mailToLink = `mailto:${t("email")}?subject=${encodeURIComponent(subjectLabel)}&body=${encodeURIComponent(body)}`;
    window.location.assign(mailToLink);
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4">
            <p className="text-lg text-primary mb-2 tracking-wider">
              {t("sectionTag")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">{t("title")}</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            {t("description")}
          </p>
          <p className="mb-8 rounded-lg border bg-muted/40 p-3 text-sm text-muted-foreground lg:w-5/6">
            {t("disclaimer")}
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 aria-hidden="true" />
                <div className="font-bold">{t("findUs")}</div>
              </div>
              <div>{t("address")}</div>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <Phone aria-hidden="true" />
                <div className="font-bold">{t("callUs")}</div>
              </div>
              <div>{t("phone")}</div>
            </div>
            <div>
              <div className="flex gap-2 mb-1">
                <Mail aria-hidden="true" />
                <div className="font-bold">{t("mailUs")}</div>
              </div>
              <div>{t("email")}</div>
            </div>
            <div>
              <div className="flex gap-2">
                <Clock aria-hidden="true" />
                <div className="font-bold">{t("visitUs")}</div>
              </div>
              <div>
                <div>{t("weekdays")}</div>
                <div>{t("hours")}</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader>
            <CardTitle>{t("form.title")}</CardTitle>
            <CardDescription>{t("form.description")}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>{t("form.firstName")}</FormLabel>
                        <FormControl>
                          <Input autoComplete="given-name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>{t("form.lastName")}</FormLabel>
                        <FormControl>
                          <Input autoComplete="family-name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.email")}</FormLabel>
                        <FormControl>
                          <Input type="email" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.subject")}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={t("form.selectSubject")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="webDev">{t("form.webDev")}</SelectItem>
                              <SelectItem value="mobileDev">{t("form.mobileDev")}</SelectItem>
                              <SelectItem value="figmaDesign">{t("form.figmaDesign")}</SelectItem>
                              <SelectItem value="restApi">{t("form.restApi")}</SelectItem>
                              <SelectItem value="fullstack">{t("form.fullstack")}</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.message")}</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder={t("form.messagePlaceholder")}
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="mt-4">{t("form.submit")}</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
