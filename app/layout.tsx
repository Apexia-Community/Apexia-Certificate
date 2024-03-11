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
    title: {
        default: "Apexia Certificate",
        template: "%s | Apexia Certificate"
    },
    description: "Get your personalized certificate !!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* <meta property="og:image" content="https://certificate.apexia.tech/ogimage.png" /> */}
                <meta name="description" content="Get your personalized certificate!!" />
                <meta property="og:url" content="https://certificate.apexia.tech/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Apexia Certificate" />
                <meta property="og:description" content="Get your personalized Certificate!!" />
                <meta property="og:image" content="https://certificate.apexia.tech/ogimage.webp" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="certificate.apexia.tech" />
                <meta property="twitter:url" content="https://certificate.apexia.tech/" />
                <meta name="twitter:title" content="Apexia" />
                <meta name="twitter:description" content="Bits to brilliance, together!" />
                <meta name="twitter:image" content="https://certificate.apexia.tech/ogimage.webp" />
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
