import { Header } from "@/components/global/header";
import { Sidebar } from "@/components/global/sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <div className="grid grid-cols-[auto_1fr] flex-1 py-3 pr-5">
        <Sidebar />
        <main className="flex flex-1 overflow-h-auto">{children}</main>
      </div>
    </div>
  );
}
