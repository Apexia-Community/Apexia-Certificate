"use client";

import fetchData from "@/app/api/dataset";
import { useEffect, useState } from "react";
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
        </>
    );
}
