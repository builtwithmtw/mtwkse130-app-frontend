"use client";

import { ShieldCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SECTORS, type Filters, type Sector } from "@/lib/types";
import { SECTOR_TICKERS } from "@/lib/seed";

type Props = {
  filters: Filters;
  onChange: (next: Filters) => void;
};

export function FilterSidebar({ filters, onChange }: Props) {
  function toggleSector(sector: Sector, checked: boolean) {
    const set = new Set(filters.sectors);
    if (checked) set.add(sector);
    else set.delete(sector);
    onChange({ ...filters, sectors: [...set] });
  }

  return (
    <aside className="w-full shrink-0 lg:w-96">
      <div className="flex flex-col rounded-xl border bg-card">
        {/* Shariah toggle — compact single-line row */}
        <label className="flex cursor-pointer select-none items-center gap-2 px-3 py-2.5">
          <ShieldCheck className="size-4 text-brand" />
          <span className="flex-1 text-sm font-medium">Shariah Only</span>
          <Checkbox
            checked={filters.shariahOnly}
            onCheckedChange={(v) =>
              onChange({ ...filters, shariahOnly: v === true })
            }
          />
        </label>

        <Separator />

        {/* Sectors */}
        <div className="p-2">

          <div className="grid grid-cols-1 gap-0.5">
            {SECTORS.map((sector) => {
              const checked = filters.sectors.includes(sector);
              return (
                <label
                  key={sector}
                  className={cn(
                    "flex cursor-pointer select-none items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent",
                    checked && "bg-accent/60",
                  )}
                >
                  <Checkbox
                    className="mt-0.5 shrink-0 self-start"
                    checked={checked}
                    onCheckedChange={(v) => toggleSector(sector, v === true)}
                  />
                  <span className="flex-1 whitespace-nowrap text-[13px] leading-snug">
                    {sector}
                  </span>
                  <span className="mt-0.5 shrink-0 text-xs tabular-nums text-muted-foreground">
                    {SECTOR_TICKERS[sector].length}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
