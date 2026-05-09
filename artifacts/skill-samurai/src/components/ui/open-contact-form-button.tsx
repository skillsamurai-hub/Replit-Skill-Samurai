"use client";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function OpenContactFormButton({ className, children }: Props) {
  const handleClick = () => {
    const iframe = document.getElementById("popup-IQgM9f88Vnnv8Lep8JV0") as HTMLIFrameElement | null;
    if (iframe) {
      iframe.style.display = "block";
      // Fire GHL re-trigger event if available
      iframe.dispatchEvent(new Event("hl:open", { bubbles: true }));
    }
    // Fallback: GHL exposes a global trigger on some versions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (typeof w.hl === "function") {
      w.hl("popup", "show", "popup-IQgM9f88Vnnv8Lep8JV0");
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
