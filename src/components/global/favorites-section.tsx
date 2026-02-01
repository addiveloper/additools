"use client";

import { useFavorites } from "@/stores/use-favorites";
import { ToolCard } from "./tool-card";

export const FavoritesSection = () => {
  const { favorites } = useFavorites();
  return (
    <>
      {favorites
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
    </>
  );
};
