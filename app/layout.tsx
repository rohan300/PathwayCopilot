import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pathway Copilot",
  description:
    "Reconstruct your NHS IBD pathway state from your own letters and draft evidence-backed escalations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
