"use server";

import { redirect } from "next/navigation";
import { generatePinterestDrafts } from "@/lib/openrouter";
import { normalizeProductInput, saveDraftSet } from "@/lib/storage";

export async function createDraftSet(formData: FormData) {
  const product = normalizeProductInput(formData);
  const drafts = await generatePinterestDrafts(product);
  const id = crypto.randomUUID();

  saveDraftSet(id, { product, drafts });
  redirect(`/drafts/${id}`);
}
