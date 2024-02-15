"use client";

import Link from "next/link";
import fetchData from "@/app/api/dataset";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import Header from "@/components/universal/Header";

interface AttendeeData {
    Attendee_Name: string;
    Email_Address: string;
    Checked_In: string;
}

interface LumaData {
    allData: AttendeeData[];
}

export default function Certificate() {
    const [lumaData, setLumaData] = useState<LumaData | null>(null);

    useEffect(() => {
        const fetchDataOnClientSide = async () => {
            try {
                const newData = await fetchData();
                if (newData) {
                    setLumaData({ allData: newData });
                } else {
                    console.error('Data fetched is null');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataOnClientSide();
    }, []);

    console.log(lumaData);

    return (
        <>
            <Header />
            <div className="w-full max-w-[90%] mx-auto justify-center">
                <div className="flex items-center">
                    <Link href="./" className="cursor-pointer">
                        <Label className="text-lg cursor-pointer underline">Apexia Certificate</Label>
                    </Link>
                    <ChevronRight />
                    <Label className="text-lg cursor-pointer underline">Converge</Label>
                </div>
            </div>
        </>
    );
}
