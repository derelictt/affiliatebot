import { notFound } from "next/navigation";
import { getDraftSet } from "@/lib/storage";

export default async function DraftSetPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const draftSet = getDraftSet(id);

  if (!draftSet) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 32 }}>
      <h1>{draftSet.product.title}</h1>
      <p style={{ color: "#cbd5e1" }}>{draftSet.product.description || "No description provided."}</p>
      <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
        {draftSet.drafts.map((draft, index) => (
          <section key={index} style={{ border: "1px solid #334155", borderRadius: 16, padding: 20, background: "#111827" }}>
            <p style={{ color: "#f59e0b", fontWeight: 700 }}>Draft {index + 1}</p>
            <h2 style={{ marginTop: 8 }}>{draft.title}</h2>
            <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>{draft.description}</p>
            <p><strong>CTA:</strong> {draft.cta}</p>
            <p><strong>Keywords:</strong> {draft.keywords.join(", ")}</p>
            <p><strong>Affiliate URL:</strong> {draftSet.product.affiliateUrl}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
