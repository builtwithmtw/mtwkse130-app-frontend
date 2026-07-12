"use client";

import { useMemo, useState } from "react";
import { useStocks } from "@/hooks/useStocks";
import type { Filters } from "@/lib/types";
import { Header } from "./Header";
import { FilterSidebar } from "./FilterSidebar";
import { StockTable } from "./StockTable";

const INITIAL_FILTERS: Filters = {
  shariahOnly: true,
  sectors: [],
};

export function Screener() {
  const { data, isLoading, isError, refetch } = useStocks();
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);

  const filtered = useMemo(() => {
    const stocks = data ?? [];
    return stocks.filter((s) => {
      if (filters.shariahOnly && !s.isShariah) return false;
      if (filters.sectors.length > 0 && !filters.sectors.includes(s.sector))
        return false;
      return true;
    });
  }, [data, filters]);

  return (
    <div className="flex h-full flex-1 flex-col overflow-hidden">
      <Header />

      <div className="scrollbar-thin mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6 lg:overflow-hidden">
        {isError ? (
          <div className="rounded-xl border border-destructive/40 bg-destructive/5 p-6 text-sm">
            <p className="mb-3 text-destructive">Failed to load stocks.</p>
            <button
              type="button"
              onClick={() => refetch()}
              className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col gap-6 lg:flex-row lg:items-stretch">
            <FilterSidebar filters={filters} onChange={setFilters} />
            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              <StockTable
                data={filtered}
                isLoading={isLoading}
                showShariahBadge={!filters.shariahOnly}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
