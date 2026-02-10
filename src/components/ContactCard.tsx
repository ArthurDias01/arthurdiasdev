"use client";

import { Envelope, MapPin, Phone } from "@phosphor-icons/react";
import { Card, CardContent } from "@/src/components/ui/card";

interface Props {
  type: "email" | "phone" | "address";
  info: string;
}

const labels = { email: "Email", phone: "Phone", address: "Address" } as const;

export const ContactCard = ({ type, info }: Props) => {
  const label = labels[type];
  const href =
    type === "email"
      ? `mailto:${info}`
      : type === "phone"
        ? `tel:${info.replace(/\D/g, "")}`
        : undefined;

  return (
    <Card>
      <CardContent className="flex flex-row items-start gap-4 p-5">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400"
          aria-hidden
        >
          {type === "email" && <Envelope size={22} />}
          {type === "phone" && <Phone size={22} />}
          {type === "address" && <MapPin size={22} />}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            {label}
          </h2>
          {href ? (
            <a
              href={href}
              className="mt-0.5 block truncate text-neutral-900 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-neutral-100"
            >
              {info}
            </a>
          ) : (
            <p className="mt-0.5 truncate text-neutral-900 dark:text-neutral-100">
              {info}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
