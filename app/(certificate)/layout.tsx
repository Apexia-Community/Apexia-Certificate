import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Apexia Certificate",
    description: "Apexia Certificate",
};

export default function CertificateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
