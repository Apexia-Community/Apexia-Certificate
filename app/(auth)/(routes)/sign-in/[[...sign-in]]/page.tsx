import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Apexia Certificate | Sign in",
    description: "Apexia Certificate | Sign in",
};

export default function Page() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <SignIn />
            </div>
        </>
    )
}
