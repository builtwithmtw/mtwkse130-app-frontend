// Domain types for the PSX stock screener.

export const SECTORS = [
  "COMMERCIAL BANKS",
  "OIL & GAS EXPLORATION COMPANIES",
  "FERTILIZER",
  "CEMENT",
  "FOOD & PERSONAL CARE PRODUCTS",
  "INV. BANKS / INV. COS. / SECURITIES COS.",
  "AUTOMOBILE ASSEMBLER",
  "TECHNOLOGY & COMMUNICATION",
  "POWER GENERATION & DISTRIBUTION",
  "PHARMACEUTICALS",
  "TEXTILE COMPOSITE",
  "OIL & GAS MARKETING COMPANIES",
  "CHEMICAL",
  "REFINERY",
  "TRANSPORT",
  "ENGINEERING",
  "LEATHER & TANNERIES",
  "PAPER & BOARD",
  "REAL ESTATE INVESTMENT TRUST",
  "GLASS & CERAMICS",
  "CABLE & ELECTRICAL GOODS",
  "PROPERTY",
  "TEXTILE WEAVING",
  "MISCELLANEOUS",
] as const;

export type Sector = (typeof SECTORS)[number];

/**
 * Performance figures are percentage returns over the given horizon.
 * `null` means we don't have enough price history to compute that horizon
 * (the free PSX EOD feed only goes back ~5 years).
 */
export type Performance = {
  d1: number | null; // 1 day (vs previous close)
  m1: number | null; // 1 month
  m6: number | null; // 6 months
  ytd: number | null; // year to date
  y5: number | null; // 5 years
};

export type Stock = {
  ticker: string;
  sector: Sector;
  isShariah: boolean;
  perf: Performance;
};

/** Filter state shared between the sidebar and the table. */
export type Filters = {
  shariahOnly: boolean;
  sectors: Sector[]; // empty = all sectors
};
