"use client";

import { cn } from "@/src/utils/cn";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const tabs = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];

function goToTab(tabId: string) {
  if (tabId === "all") return "/projects";
  const tab = tabs.find((t) => t.id === tabId);
  return tab ? `/projects?category=${tab.label}` : "/projects";
}

export function NavMenuProjects() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [activeTab, setActiveTab] = useState(
    category === "Web" ? "web" : category === "Mobile" ? "mobile" : "all",
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setActiveTab(
      category === "Web" ? "web" : category === "Mobile" ? "mobile" : "all",
    );
  }, [category]);

  const selectTab = useCallback(
    (tabId: string) => {
      setActiveTab(tabId);
      router.push(goToTab(tabId));
    },
    [router],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, currentIndex: number) => {
      let nextIndex: number | null = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextIndex = Math.min(currentIndex + 1, tabs.length - 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        nextIndex = Math.max(currentIndex - 1, 0);
      } else if (e.key === "Home") {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        nextIndex = tabs.length - 1;
      }
      if (nextIndex !== null && nextIndex !== currentIndex) {
        const nextId = tabs[nextIndex].id;
        selectTab(nextId);
        tabRefs.current[nextIndex]?.focus();
      }
    },
    [selectTab],
  );

  return (
    <div
      className="flex flex-wrap gap-6 border-b border-rule"
      role="tablist"
      aria-label="Project category filter"
    >
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => {
            tabRefs.current[index] = el;
          }}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls="project-list"
          id={`tab-${tab.id}`}
          onClick={() => selectTab(tab.id)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={cn(
            "relative -mb-px pb-3 text-[0.75rem] uppercase tracking-label transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-copper",
            activeTab === tab.id
              ? "border-b border-copper text-ink"
              : "text-muted hover:text-ink",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
