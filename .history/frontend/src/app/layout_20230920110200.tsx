import type { Metadata } from "next";
// import "@/styles/globals.css";
// import { roboto } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Real Israel Tours",
  description: "Plan your next tour",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
