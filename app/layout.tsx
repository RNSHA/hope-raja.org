import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "HOPE | Hope Organization for Development & Improvement",
  description:
    "A woman-led Iraqi NGO advancing recovery, peacebuilding, reintegration and community resilience.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
