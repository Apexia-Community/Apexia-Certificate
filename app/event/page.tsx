import type { Metadata } from "next";
import Header from "@/components/universal/Header";

export const metadata: Metadata = {
    title: "Apexia Certificate | Event",
    description: "Apexia Certificate | Event",
};

export default function Dashboard() {
    return (
        <>
            <Header />
        </>
    )
}