interface CategoryBadgetProps {
  category: string;
}

export const CategoryBadget = ({ category }: CategoryBadgetProps) => {
  return (
    <span className="px-4 py-1 border border-foreground/10 rounded-xl text-xs flex items-center justify-center text-muted-foreground font-mono">
      {category}
    </span>
  );
};
