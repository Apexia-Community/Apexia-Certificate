import "./globals.css";
import type { Metadata, Viewport } from "next";
import NextTopLoader from 'nextjs-toploader';
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/universal/Footer";
import Header from "@/components/universal/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

export const metadata: Metadata = {
    title: {
        default: "Apexia Certificate",
        template: "%s | Apexia Certificate"
    },
    manifest: "/manifest.json",
    description: "Get your personalized certificate !!",
};

export const viewport: Viewport = {
    themeColor: "#020817",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* <meta property="og:image" content="https://certificate.apexia.club/ogimage.png" /> */}
                <meta name="description" content="Get your personalized certificate!!" />
                <meta property="og:url" content="https://certificate.apexia.club/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Apexia Certificate" />
                <meta property="og:description" content="Get your personalized Certificate!!" />
                <meta property="og:image" content="https://certificate.apexia.club/ogimage.webp" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="certificate.apexia.club" />
                <meta property="twitter:url" content="https://certificate.apexia.club/" />
                <meta name="twitter:title" content="Apexia" />
                <meta name="twitter:description" content="Bits to brilliance, together!" />
                <meta name="twitter:image" content="https://certificate.apexia.club/ogimage.webp" />
                <meta name="google-site-verification" content="FISUPmmn-Mfa9MvlbzIsyEtfKJ8JYOsdkgiJNMEuNj0" />

                {/* google Analytics */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DZK7TGGK9L"></Script>
                <Script id="google-analytics">
                    {
                        `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-DZK7TGGK9L');
                        `
                    }
                </Script>
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
                        <Footer />
                        <Toaster />
                    </ThemeProvider>
                </ClerkProvider>
            </body>
        </html>
    );
}
