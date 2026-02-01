/* eslint-disable @next/next/no-img-element */
"use client";

import { Tool } from "@/types/tool";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CategoryBadget } from "./category-badget";
import { Button } from "../ui/button";
import { Check, Copy, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/stores/use-favorites";

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const categories =
    tool.category.length > 1 ? [tool.category[1], "⋅⋅⋅"] : tool.category;
  const isFav = isFavorite(tool.id ?? tool.url);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(tool.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  const handleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(tool);
  };

  return (
    <a href={tool.url} target="_blank" rel="noopener noreferrer">
      <Card className="hover:bg-accent/1 dark:hover:bg-muted-foreground/5 transition overflow-hidden relative group">
        <CardHeader className="justify-center items-center flex flex-col">
          <img
            src={`https://www.google.com/s2/favicons?domain=${tool.url}&sz=64`}
            alt="Icon"
            className="size-12 rounded-sm"
          />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle className="text-center">{tool.title}</CardTitle>
          <div className="gap-2 flex justify-center">
            {categories.map((category, index) => (
              <CategoryBadget key={index} category={category} />
            ))}
          </div>
          <Button
            variant={"ghost"}
            size={"icon-sm"}
            onClick={handleCopy}
            className={cn(
              "absolute left-3 top-3 transition-all duration-300",
              copied
                ? "opacity-100 scale-110"
                : "md:opacity-0 group-hover:opacity-100 scale-100 duration-150",
            )}
          >
            <div className="relative size-4 flex items-center justify-center">
              <Check
                className={cn(
                  "absolute transition-all duration-300 transform text-muted-foreground",
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
              />
              <Copy
                className={cn(
                  "absolute transition-all duration-300 transform text-muted-foreground",
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100",
                )}
              />
            </div>
          </Button>
          <Button
            variant={"ghost"}
            size={"icon-sm"}
            className={cn(
              "absolute right-3 top-3 transition-all",
              "group-hover:opacity-100",
              isFav ? "opacity-100" : "md:opacity-0",
            )}
            onClick={handleFavorite}
          >
            <Heart
              className={cn(
                "size-4 transition-colors",
                isFav ? "fill-rose-500 text-rose-500" : "text-muted-foreground",
              )}
            />
          </Button>
        </CardContent>
      </Card>
    </a>
  );
};
