import { Heart, Home } from "lucide-react";
import { SidebarLink } from "./sidebar-link";
import { Separator } from "../ui/separator";
import { getCategories, getCategoriesCount } from "@/data";
import { SidebarCategoryLink } from "./sidebar-category-link";

export const Sidebar = () => {
  const categories = getCategories();
  const categoriesCount = getCategoriesCount(categories);

  return (
    <aside className="px-3 md:pl-0 md:pr-3 min-w-3xs hidden md:flex flex-col gap-2">
      <section className="flex flex-col gap-1">
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
      <section className="flex flex-col">
        {categories.map((category, index) => (
          <SidebarCategoryLink
            key={index}
            href={`/category/${category.toLowerCase()}`}
            title={category}
            count={categoriesCount[category]}
          ></SidebarCategoryLink>
        ))}
      </section>
    </aside>
  );
};
