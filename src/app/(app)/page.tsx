import { ToolCard } from "@/components/global/tool-card";
import { getTools } from "@/data";

export default function Home() {
  const tools = getTools();

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-min gap-4 border border-muted-foreground/20 rounded-md w-full p-5">
      {tools.map((tool, index) => (
        <ToolCard key={index} tool={tool} />
      ))}
    </section>
  );
}
