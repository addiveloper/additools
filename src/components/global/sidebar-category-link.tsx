"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarCategoryLinkProps {
  href: string;
  title: string;
  count: number;
}

export const SidebarCategoryLink = ({
  href,
  title,
  count,
}: SidebarCategoryLinkProps) => {
  const slug = usePathname();
  const isActive = slug === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex justify-between text-sm gap-2 items-center rounded-md hover:bg-foreground/5 w-full py-1.5 px-2.5 transition-colors",
        isActive ? "bg-foreground/5 hover:bg-foreground/10" : "opacity-60",
      )}
    >
      <span>{title}</span>
      <span className="border border-foreground/20 rounded-lg px-3 text-xs font-mono">
        {count}
      </span>
    </Link>
  );
};
