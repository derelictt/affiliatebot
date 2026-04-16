import { DraftSetView, ProductInput } from "./types";

const store = globalThis as typeof globalThis & {
  affiliateBotDrafts?: Map<string, DraftSetView>;
};

function getStore() {
  if (!store.affiliateBotDrafts) {
    store.affiliateBotDrafts = new Map<string, DraftSetView>();
  }
  return store.affiliateBotDrafts;
}

export function saveDraftSet(id: string, data: DraftSetView) {
  getStore().set(id, data);
}

export function getDraftSet(id: string) {
  return getStore().get(id);
}

export function listDraftSets() {
  return Array.from(getStore().entries()).map(([id, value]) => ({
    id,
    title: value.product.title,
    category: value.product.category,
    createdAt: new Date().toISOString(),
    draftCount: value.drafts.length,
  }));
}

export function normalizeProductInput(formData: FormData): ProductInput {
  return {
    sourceUrl: String(formData.get("sourceUrl") || ""),
    title: String(formData.get("title") || ""),
    description: String(formData.get("description") || ""),
    imageUrl: String(formData.get("imageUrl") || ""),
    priceText: String(formData.get("priceText") || ""),
    category: String(formData.get("category") || ""),
    affiliateUrl: String(formData.get("affiliateUrl") || ""),
  };
}
