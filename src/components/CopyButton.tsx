import { toast } from "sonner";

export const CopyButton = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(url);
    toast.success("Copied to clipboard!");
  };

  return (
    <button onClick={onCopy} className="active:scale-90 transition-transform">
      {children}
    </button>
  );
};
