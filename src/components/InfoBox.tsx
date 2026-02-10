"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import {
  EnvelopeIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
  ReadCvLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";
import { JobTitle } from "../utils/client-constants";
import { InfoBoxIconLink } from "./InfoBoxIconLink";
import { InfoSubSection } from "./InfoSubSection";

export const InfoBox = () => {
  const handleDownloadCV = () => {
    window.open(
      "/assets/cv/01Arthur-Dias-FullStack-F-Resume.pdf",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <Card className="relative mx-auto w-full overflow-hidden md:max-w-[332px]">
      <div
        className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500"
        aria-hidden
      />
      <CardHeader className="space-y-2 pb-2 pl-5 pt-10 text-center md:pt-8 md:pl-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Arthur Dias
        </h2>
        <p className="rounded-lg bg-primary-500/10 px-3 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-500/20 dark:text-primary-300">
          {JobTitle}
        </p>
      </CardHeader>
      <CardContent className="space-y-5 pl-5 pr-6 pb-6 pt-1 md:pl-6">
        <div
          className="flex flex-wrap justify-center gap-2"
          role="list"
          aria-label="Social links"
        >
          <InfoBoxIconLink
            icon={<LinkedinLogoIcon className="h-5 w-5" aria-hidden />}
            href="https://linkedin.com/in/arthur-dias/"
            label="LinkedIn"
          />
          <InfoBoxIconLink
            icon={<TwitterLogoIcon className="h-5 w-5" aria-hidden />}
            href="https://twitter.com/ArthurODS_"
            label="Twitter"
          />
          <InfoBoxIconLink
            icon={<InstagramLogoIcon className="h-5 w-5" aria-hidden />}
            href="https://www.instagram.com/arthurddias/"
            label="Instagram"
          />
          <InfoBoxIconLink
            icon={<GithubLogoIcon className="h-5 w-5" aria-hidden />}
            href="https://github.com/ArthurDias01"
            label="GitHub"
          />
          <InfoBoxIconLink
            icon={<ReadCvLogoIcon className="h-5 w-5" aria-hidden />}
            href="/assets/cv/01Arthur-Dias-FullStack-F-Resume.pdf"
            label="Download CV (PDF)"
          />
        </div>
        <div className="rounded-lg border border-neutral-200/80 bg-neutral-50/80 p-4 dark:border-neutral-700 dark:bg-neutral-800/50 gap-4 flex flex-col">
          <InfoSubSection
            icon={
              <PhoneIcon
                className="h-5 w-5 text-primary-500 dark:text-primary-400"
                aria-hidden
              />
            }
            title="Phone"
            info="+1 (980) 269-9602"
            hasLink
            linktype="tel"
            href="+19802699602"
          />
          <InfoSubSection
            icon={
              <EnvelopeIcon
                className="h-5 w-5 text-primary-500 dark:text-primary-400"
                aria-hidden
              />
            }
            title="Email"
            info="arthursantos01@gmail.com"
            hasLink
            linktype="mailto"
            href="arthursantos01@gmail.com"
          />
          <InfoSubSection
            icon={
              <MapPinIcon
                className="h-5 w-5 text-primary-500 dark:text-primary-400"
                aria-hidden
              />
            }
            title="Location"
            info="São Paulo, SP – Brazil"
          />
        </div>
        <Button onClick={handleDownloadCV} className="w-full" size="lg">
          Download CV
        </Button>
      </CardContent>
    </Card>
  );
};
