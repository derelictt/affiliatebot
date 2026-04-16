export type ProductInput = {
  sourceUrl: string;
  title: string;
  description: string;
  imageUrl: string;
  priceText: string;
  category: string;
  affiliateUrl: string;
};

export type Draft = {
  title: string;
  description: string;
  cta: string;
  keywords: string[];
};

export type DraftSetView = {
  product: ProductInput;
  drafts: Draft[];
};
