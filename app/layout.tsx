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
    openGraph: {
        type: "website",
        url: "https://certificate.apexia.tech/",
        title: "Apexia Certificate",
        description: "Apexia Certificate",
        siteName: "Apexia Certificate",
        images: [{
            url: "https://certificate.apexia.tech/opengraph-image.png",
        }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
