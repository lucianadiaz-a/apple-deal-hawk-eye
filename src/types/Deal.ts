
export interface Deal {
  id: string;
  title: string;
  currentPrice: number;
  originalPrice: number;
  retailer: string;
  promoKeywords: string[];
  timestamp: string;
  productUrl: string;
  imageId: string;
  category: string;
}
