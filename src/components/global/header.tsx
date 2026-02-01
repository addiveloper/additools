import Link from "next/link";
import { Button } from "../ui/button";
import { Heart, Home, Menu, Send } from "lucide-react";
import { GitHub } from "../icons/github";
import { ThemeButton } from "./theme-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { SidebarLink } from "./sidebar-link";
import { Separator } from "../ui/separator";
import { SidebarCategoryLink } from "./sidebar-category-link";
import { getCategories, getCategoriesCount } from "@/data";

export const Header = () => {
  const categories = getCategories();
  const categoriesCount = getCategoriesCount(categories);
  return (
    <header className="w-full flex justify-between items-center py-3 px-5">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger className=" md:hidden" asChild>
            <Button variant={"ghost"} size={"icon"} className="-ml-2">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="gap-2 flex-col flex">
            <SheetHeader>
              <SheetTitle>
                <Link
                  href={"/"}
                  className="font-black text-lg hover:opacity-80 transition-opacity"
                >
                  additools
                </Link>
              </SheetTitle>
            </SheetHeader>
            <section className="flex flex-col gap-1 px-3">
              <SidebarLink
                href="/"
                icon={<Home className="size-4" />}
                title="Inicio"
              />
              <SidebarLink
                href="/favorites"
                icon={<Heart className="size-4" />}
                title="Favoritos"
              />
            </section>
            <Separator />
            <section className="flex flex-col px-3">
              {categories.map((category, index) => (
                <SidebarCategoryLink
                  key={index}
                  href={`/category/${category.toLowerCase()}`}
                  title={category}
                  count={categoriesCount[category]}
                ></SidebarCategoryLink>
              ))}
            </section>
          </SheetContent>
        </Sheet>
        <Link
          href={"/"}
          className="font-black text-lg hover:opacity-80 transition-opacity"
        >
          additools
        </Link>
      </div>

      <section className=" flex items-center gap-1">
        <ThemeButton />
        <Button size={"icon"} variant={"ghost"} asChild>
          <a
            href="https://github.com/addiveloper/additools"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="size-5 text-foreground fill-foreground" />
          </a>
        </Button>
        <span className="text-muted-foreground opacity-40 text-xl mr-2 font-light">
          |
        </span>
        <Button size={"sm"} asChild>
          <a
            href="https://github.com/addiveloper/additools?tab=readme-ov-file#-cómo-añadir-un-recurso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send />
            Agregar
          </a>
        </Button>
      </section>
    </header>
  );
};
