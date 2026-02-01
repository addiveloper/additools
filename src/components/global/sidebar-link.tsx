"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

export const SidebarLink = ({ href, icon, title }: SidebarLinkProps) => {
  const slug = usePathname();
  const isActive = slug === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex text-sm gap-2 items-center rounded-md hover:bg-foreground/5 w-full py-1.5 px-2.5 transition-colors",
        isActive ? "bg-foreground/5 hover:bg-foreground/10" : "opacity-60",
      )}
    >
      {icon} {title}
    </Link>
  );
};
