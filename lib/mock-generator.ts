import { Draft, ProductInput } from "./types";

function compact(text: string) {
  return text.trim().replace(/\s+/g, " ");
}

export function generateMockPinterestDrafts(product: ProductInput): Draft[] {
  const titleBase = compact(product.title || "Featured product");
  const category = compact(product.category || "lifestyle");
  const price = compact(product.priceText || "great value");

  return [
    {
      title: `Why ${titleBase} is trending in ${category}`,
      description: `Save this idea if you want a ${category} find that feels practical and worth the ${price}. Tap through to see details and pricing.`,
      cta: "See why people are saving this",
      keywords: [category, "amazon finds", "affiliate picks", "best buys"],
    },
    {
      title: `${titleBase} you will want to try this week`,
      description: `A simple product pick for anyone shopping ${category}. Clean value proposition, easy to recommend, and ready to test as an affiliate offer.`,
      cta: "Check the product here",
      keywords: [category, "product recommendation", "shopping finds", "pin ideas"],
    },
    {
      title: `${titleBase} review style pin idea`,
      description: `This draft is designed for Pinterest style affiliate promotion. Highlight the problem, the benefit, and a low friction click through with your affiliate link.`,
      cta: "View product details",
      keywords: [category, "review", "affiliate marketing", "pinterest marketing"],
    },
    {
      title: `Best ${category} pick under ${price}`,
      description: `If your audience likes practical recommendations, this pin angle can work well. Lead with benefit, add trust, then invite the click.`,
      cta: "Open the product page",
      keywords: [category, "budget finds", "amazon affiliate", "best products"],
    },
    {
      title: `${titleBase} for people who want an easy upgrade`,
      description: `Use this draft when you want a lighter, creator style tone. It is positioned as a quick recommendation instead of a hard sell.`,
      cta: "See the full listing",
      keywords: [category, "creator pin", "shopping", "recommended products"],
    },
  ];
}
