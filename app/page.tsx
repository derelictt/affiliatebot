const steps = [
  "Paste a product URL or enter product details manually",
  "Generate 5 to 10 Pinterest-ready affiliate drafts",
  "Review, edit, approve, and publish manually",
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 32 }}>
      <div style={{ padding: 24, border: "1px solid #25304a", borderRadius: 16, background: "#121a2b" }}>
        <p style={{ color: "#f59e0b", fontWeight: 700, marginBottom: 8 }}>AffiliateBot MVP</p>
        <h1 style={{ fontSize: 40, margin: "0 0 16px" }}>Turn product links into Pinterest affiliate drafts</h1>
        <p style={{ color: "#cbd5e1", fontSize: 18, lineHeight: 1.6, marginBottom: 24 }}>
          A focused AI copilot for affiliate marketers who want faster content production without unsafe full autoposting.
        </p>
        <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
          {steps.map((step, index) => (
            <div key={step} style={{ padding: 16, borderRadius: 12, background: "#0f172a", border: "1px solid #1e293b" }}>
              <strong>0{index + 1}.</strong> {step}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/products/new" style={{ background: "#f59e0b", color: "#111827", padding: "12px 18px", borderRadius: 10, fontWeight: 700 }}>
            Create first product
          </a>
          <a href="/docs" style={{ border: "1px solid #334155", padding: "12px 18px", borderRadius: 10 }}>
            View MVP docs
          </a>
        </div>
      </div>
    </main>
  );
}
