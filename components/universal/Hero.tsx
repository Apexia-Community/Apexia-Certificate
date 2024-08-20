"use client";

import _ from "lodash"
import { useUser } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import EventCard from "@/components/common/EventCard";
import { certificateData } from "@/lib/certificateData";
import type { AttendeeData, CertificateData } from "@/types/certificateDataTypes";

// interface AttendeeData {
//     Attendee_Name: string;
//     Email_Address: string;
//     Checked_In: string;
//     SheetName: string;
// }

interface updatedEventData {
    title: string;
    location: string;
    date: string;
    image: string;
    SheetName: string;
    Slug: string;
    isRegisteredProp: boolean;
}

// let EventData = [
//     {
//         title: "Converge",
//         location: "Aeronautical Auditorium, SVIT",
//         date: "Wednesday, 7th February",
//         image: "/assets/Coverpage.webp",
//         SheetName: "Converge_Certificate_Data",
//         isRegisteredProp: false
//     },
//     {
//         title: "Webverse Part One Event 1",
//         location: "IT Seminar Hall, SVIT",
//         date: "Tuesday, 12th March",
//         image: "/assets/WebversePartOneE1.webp",
//         SheetName: "Webverse_Part_One_Event_One_Certificate_Data",
//         isRegisteredProp: false
//     },
//     {
//         title: "Webverse Part One Event 2",
//         location: "IT Seminar Hall, SVIT",
//         date: "Friday, 15th March",
//         image: "/assets/WebversePartOneE2.webp",
//         SheetName: "Webverse_Part_One_Event_Two_Certificate_Data",
//         isRegisteredProp: false
//     },
//     {
//         title: "Projects to Products",
//         location: "New Architecture Auditorium, SVIT",
//         date: "Friday, 3rd May",
//         image: "/assets/p2p.webp",
//         SheetName: "Projects_to_Products_Certificate_Data",
//         isRegisteredProp: false
//     }
// ]

let EventData: updatedEventData[] = certificateData.map((data: CertificateData) => {
    return {
        title: data.title,
        location: data.location,
        date: data.date,
        image: data.image,
        SheetName: data.SheetName,
        Slug: data.Slug,
        isRegisteredProp: data.isRegisteredProp
    }
})

export default function Hero() {
    const { user, isSignedIn } = useUser();
    const [updatedEventData, setUpdatedEventData] = useState<updatedEventData[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (targetEmail: string): Promise<AttendeeData[]> => {
        try {
            setLoading(true)
            const response: AxiosResponse<{ data: AttendeeData[] }> = await axios.get(`https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_ATTENDEE_DATA_API_KEY}/exec?Email_Address=${targetEmail}`);
            const filteredData: AttendeeData[] = response.data.data.filter((entry: AttendeeData) => entry.Email_Address === targetEmail);
            console.log("=====================filteredData", [filteredData]);
            if (filteredData.length > 0) { return filteredData as AttendeeData[]; } else { return []; }
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
        finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        const getEmailData = async () => {
            const email = user?.primaryEmailAddress?.emailAddress!;
            const data = await fetchData(email);
            const updated_EventData = _.forEach(EventData, (event: updatedEventData) => {
                const index = _.findIndex(data, (record: any) => {

                    return event.SheetName == record.SheetName && record.Checked_In && record.Checked_In != ''
                })
                event.isRegisteredProp = index >= 0 ? true : false
            })
            setUpdatedEventData([...updated_EventData]);
        };

        getEmailData();
    }, [user?.primaryEmailAddress?.emailAddress]);

    return (
        <>
            <div className="w-full max-w-[90%] mx-auto gap-5 min-h-screen flex flex-col">
                <div className="max-sm:text-center flex flex-col gap-2">
                    <div className="flex items-center max-sm:justify-center">
                        <Label className="text-4xl font-bold max-sm:text-xl">
                            Welcome to Apexia Certificate
                        </Label>
                    </div>
                    <div className="flex items-center max-sm:justify-center">
                        <Label className="text-lg max-sm:text-sm">
                            Your one stop solution for all your certificate needs for all the event held by Apexia.
                        </Label>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <Separator />
                    <div className="flex gap-2 max-sm:gap-1 items-center">
                        <h2 className="text-lg max-sm:text-sm">Find all the events</h2>
                        <ChevronRight size={18} className="max-sm:w-4 -mt-px" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                        {updatedEventData.map((event) => (
                            <>
                                <EventCard
                                    title={event.title}
                                    location={event.location}
                                    date={event.date}
                                    image={event.image}
                                    Slug={event.Slug}
                                    isSignedInProp={isSignedIn}
                                    isRegisteredProp={event.isRegisteredProp}
                                />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
