import { Draft, ProductInput } from "./types";
import { generateMockPinterestDrafts } from "./mock-generator";

export async function generatePinterestDrafts(product: ProductInput): Promise<Draft[]> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || "google/gemini-3.1-pro-preview";

  if (!apiKey) {
    return generateMockPinterestDrafts(product);
  }

  const prompt = [
    "You are an expert affiliate copywriter for Pinterest.",
    "Generate 5 Pinterest affiliate drafts as JSON.",
    "Return an array. Each item must have: title, description, cta, keywords.",
    "Keywords must be an array of 4 short strings.",
    `Product title: ${product.title}`,
    `Product description: ${product.description}`,
    `Category: ${product.category}`,
    `Price: ${product.priceText}`,
    `Affiliate URL: ${product.affiliateUrl}`,
  ].join("\n");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "Return only valid JSON." },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return generateMockPinterestDrafts(product);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  try {
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed)) return parsed;
    if (Array.isArray(parsed?.drafts)) return parsed.drafts;
  } catch {}

  return generateMockPinterestDrafts(product);
}
