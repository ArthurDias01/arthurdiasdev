"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

// Match tailwind.config.js theme.extend.colors.neutral (avoids importing config in client)
const CAL_BG_DARK = "#23272e"; // neutral[950]
const CAL_BG_LIGHT = "#68788f"; // neutral[500]

export function ScheduleAmeetButton() {
  const { theme } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "arthurdias/30min",
        hideButtonIcon: true,
      });
      cal("ui", {
        theme: "dark",
        styles: {
          body: {
            background: theme === "dark" ? CAL_BG_DARK : CAL_BG_LIGHT,
          },
          branding: {
            brandColor: "#000000",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [theme]);

  return null;
}
