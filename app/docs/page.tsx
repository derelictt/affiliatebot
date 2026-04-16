import { readFileSync } from "fs";
import path from "path";

function loadDoc(fileName: string) {
  const filePath = path.join(process.cwd(), "docs", fileName);
  return readFileSync(filePath, "utf8");
}

export default function DocsPage() {
  const mvpSpec = loadDoc("mvp-spec.md");
  const architecture = loadDoc("architecture.md");

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 32 }}>
      <h1>Docs</h1>
      <h2>MVP Spec</h2>
      <pre style={{ whiteSpace: "pre-wrap", background: "#111827", padding: 16, borderRadius: 12 }}>{mvpSpec}</pre>
      <h2>Architecture</h2>
      <pre style={{ whiteSpace: "pre-wrap", background: "#111827", padding: 16, borderRadius: 12 }}>{architecture}</pre>
    </main>
  );
}
