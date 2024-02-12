import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Apexia Certificate | Sign up",
    description: "Apexia Certificate | Sign up",
};

export default function Page() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <SignUp />
            </div>
        </>
    )
}
