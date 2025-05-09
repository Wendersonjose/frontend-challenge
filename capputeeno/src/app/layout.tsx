import Header from "@/components/header";
import "./globals.css";
import { Saira } from "next/font/google";
import { FilterContextProvider } from "@/contexts/filter-context";

const saira = Saira({
  weight: ["300","400", "500", "600",],
  subsets: ["latin"],
})
export const metadata = {
  title: "Capputeeno",
  description: "A simple and powerful tool to generate images from text.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
            <Header/>
            {children}
        </FilterContextProvider>
        </body>
    </html>
  );
}