import type { Metadata } from "next";
import "@/styles/globals.css";
import { roboto } from "@/app/fonts";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
      <body className={roboto.className}>
        <div style={{ overflowX: "hidden" }}>{children}</div>
      </body>
    </html>
  );
}
