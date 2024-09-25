import type { Metadata } from "next";
import "@/app/components/global.css";

export const metadata: Metadata = {
  title: "Food App",
  description: "A food app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
