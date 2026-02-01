import Link from "next/link";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { GitHub } from "../icons/github";
import { ThemeButton } from "./theme-button";

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-3 px-5">
      <Link
        href={"/"}
        className="font-black text-lg hover:opacity-80 transition-opacity"
      >
        additools
      </Link>
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
        <Button size={"sm"}>
          <Send />
          Agregar
        </Button>
      </section>
    </header>
  );
};
