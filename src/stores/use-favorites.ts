import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Tool } from "@/types/tool";

interface FavoritesState {
  favorites: Tool[];
  addFavorite: (tool: Tool) => void;
  removeFavorite: (toolId: string | number) => void;
  isFavorite: (toolId: string | number) => boolean;
  toggleFavorite: (tool: Tool) => void;
}

export const useFavorites = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (tool) =>
        set((state) => ({
          favorites: [...state.favorites, tool],
        })),

      removeFavorite: (toolId) =>
        set((state) => ({
          favorites: state.favorites.filter((t) => (t.id ?? t.url) !== toolId),
        })),

      isFavorite: (toolId) =>
        get().favorites.some((t) => (t.id ?? t.url) === toolId),

      toggleFavorite: (tool) => {
        const toolId = tool.id ?? tool.url;
        const isFav = get().isFavorite(toolId);

        if (isFav) {
          get().removeFavorite(toolId);
        } else {
          get().addFavorite(tool);
        }
      },
    }),
    {
      name: "additools-favorites-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
