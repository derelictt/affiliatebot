export default function NewProductPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: 32 }}>
      <h1>Create product draft set</h1>
      <p style={{ color: "#cbd5e1" }}>
        This is the first MVP input screen. Next step is wiring this form to a database and generation pipeline.
      </p>

      <form style={{ display: "grid", gap: 12, marginTop: 24 }}>
        <input placeholder="Product source URL" style={inputStyle} />
        <input placeholder="Product title" style={inputStyle} />
        <input placeholder="Image URL" style={inputStyle} />
        <input placeholder="Price" style={inputStyle} />
        <input placeholder="Category" style={inputStyle} />
        <input placeholder="Affiliate URL" style={inputStyle} />
        <textarea placeholder="Product description" rows={6} style={inputStyle} />
        <button type="button" style={buttonStyle}>Generate Pinterest drafts</button>
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
