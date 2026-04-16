import { createDraftSet } from "@/app/actions";

export default function NewProductPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: 32 }}>
      <h1>Create product draft set</h1>
      <p style={{ color: "#cbd5e1" }}>
        Paste product details, then generate Pinterest-ready affiliate drafts. If no OpenRouter key is configured, the app falls back to mock drafts for UI development.
      </p>

      <form action={createDraftSet} style={{ display: "grid", gap: 12, marginTop: 24 }}>
        <input name="sourceUrl" placeholder="Product source URL" style={inputStyle} />
        <input name="title" placeholder="Product title" style={inputStyle} required />
        <input name="imageUrl" placeholder="Image URL" style={inputStyle} />
        <input name="priceText" placeholder="Price" style={inputStyle} />
        <input name="category" placeholder="Category" style={inputStyle} />
        <input name="affiliateUrl" placeholder="Affiliate URL" style={inputStyle} required />
        <textarea name="description" placeholder="Product description" rows={6} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Generate Pinterest drafts</button>
      </form>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  borderRadius: 10,
  border: "1px solid #334155",
  background: "#0f172a",
  color: "#f8fafc",
  padding: 12,
};

const buttonStyle = {
  borderRadius: 10,
  border: "none",
  background: "#f59e0b",
  color: "#111827",
  padding: 14,
  fontWeight: 700,
  cursor: "pointer",
};
