export type PortfolioCategory = "School" | "Corp";

export interface PortfolioItem {
    id: string;
    name: string;
    category: PortfolioCategory;
    detail: string;
    count: string;
    year: string;
    month: string;
}
