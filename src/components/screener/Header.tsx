import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative mx-auto flex h-14 w-full max-w-350 items-center justify-center px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <Logo className="size-8" />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">MtwKSE130</p>
            <p className="text-[11px] text-muted-foreground">
              Pakistan Stock Exchange
            </p>
          </div>
        </div>
        <div className="absolute right-4 sm:right-6">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
