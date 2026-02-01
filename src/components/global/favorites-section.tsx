"use client";

import { useFavorites } from "@/stores/use-favorites";
import { ToolCard } from "./tool-card";
import Link from "next/link";

export const FavoritesSection = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center min-h-100 border border-dashed border-muted-foreground/20 rounded-md w-full p-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          No tienes favoritos
        </h2>
        <p className="text-muted-foreground mt-2">
          No tienes marcado ningún elemento como favorito
        </p>
        <Link href="/" className="mt-6 text-sm underline hover:text-primary">
          Volver al inicio
        </Link>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-min gap-4 md:border md:border-muted-foreground/20 rounded-md w-full md:p-5">
      {favorites
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
    </section>
  );
};
