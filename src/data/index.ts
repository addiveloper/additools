import { Category } from "@/types/category";
import { tools } from "./tools";
import { Tool } from "@/types/tool";

export const getCategories = (): Category[] => {
  const categories = tools.flatMap((tool) => tool.category);
  return Array.from(new Set(categories)).sort((a, b) => a.localeCompare(b));
};

export const getCategoriesCount = (
  categories: Category[],
): Record<string, number> => {
  const categoriesCount: Record<string, number> = categories.reduce(
    (acc, category) => {
      acc[category] = tools.filter((tool) =>
        tool.category.includes(category),
      ).length;
      return acc;
    },
    {} as Record<string, number>,
  );

  return categoriesCount;
};

export const getTools = (): Tool[] => {
  return Array.from(new Set(tools)).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
};
