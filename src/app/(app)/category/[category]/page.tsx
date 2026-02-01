import { ToolCard } from "@/components/global/tool-card";
import { getCategories, getTools } from "@/data";
import { Category } from "@/types/category";
import Link from "next/link";

interface PageProps {
  params: Promise<{ category: Category }>;
}

export default async function Home({ params }: PageProps) {
  const category = await params.then((p) => p.category);
  const availableCategories = getCategories();
  const categoryExists = availableCategories
    .flatMap((a) => a.toLowerCase())
    .includes(category);

  if (!categoryExists) {
    return (
      <section className="flex flex-col items-center justify-center min-h-100 border border-dashed border-muted-foreground/20 rounded-md w-full p-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Categoría no encontrada
        </h2>
        <p className="text-muted-foreground mt-2">
          La sección <code className="bg-muted px-1 rounded">{category}</code>{" "}
          no existe o aún no tiene recursos.
        </p>
        <Link href="/" className="mt-6 text-sm underline hover:text-primary">
          Volver al inicio
        </Link>
      </section>
    );
  }

  const tools = getTools().filter((tool) =>
    tool.category.some((cat) => cat.toLowerCase() === category.toLowerCase()),
  );

  return (
    <section className="grid grid-cols-5 auto-rows-min gap-4 border border-muted-foreground/20 rounded-md w-full p-5">
      {tools.map((tool, index) => (
        <ToolCard key={index} tool={tool} />
      ))}
    </section>
  );
}
