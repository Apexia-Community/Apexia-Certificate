import "./globals.css";
import type { Metadata } from "next";
import NextTopLoader from 'nextjs-toploader';
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import { Analytics } from '@vercel/analytics/react';
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
            <head>
                <meta property="og:image" content="https://certificate.apexia.tech/ogimage.png" />
            </head>
            <body style={{ fontFamily: "Borna" }}>
                <ClerkProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <NextTopLoader color="#FF4600" showSpinner={false} />
                        <Header />
                        {children}
                        <Analytics />
                        <Footer />
                        <Toaster />
                    </ThemeProvider>
                </ClerkProvider>
            </body>
        </html>
    );
}
