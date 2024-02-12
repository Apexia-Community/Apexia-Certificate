import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/universal/Header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Apexia Certificate",
    description: "Apexia Certificate",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body style={{ fontFamily: "Borna" }}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
