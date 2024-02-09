import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Strechar-dev",
  description: "Portfolio developed with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blackRussian">{children}</body>
    </html>
  );
}
