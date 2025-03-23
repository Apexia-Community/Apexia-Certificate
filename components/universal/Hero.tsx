"use client";

import _ from "lodash"
import { useUser } from "@clerk/nextjs";
import { Suspense } from "react";
import axios, { AxiosResponse } from 'axios';
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import EventCard from "@/components/common/EventCard";
import EventCardSkeleton from "@/components/common/EventCardSkeleton";
import { useSuspenseQuery } from "@/hooks/useSuspenseQuery";

interface AttendeeData {
    Attendee_Name: string;
    Email_Address: string;
    Checked_In: string;
    SheetName: string;
}

const defaultEventData = [
    {
        title: "Genesis",
        location: "New Architecture Auditorium, SVIT",
        date: "Monday, 24th March",
        image: "/assets/genesis.webp",
        slug: "genesis",
        SheetName: "Genesis_Certificate_Data",
        isRegisteredProp: false
    },
    {
        title: "Desigनीति",
        location: "New Architecture Auditorium, SVIT",
        date: "Friday, 21st August",
        image: "/assets/designiti.webp",
        slug: "designiti",
        SheetName: "Designiti_Certificate_Data",
        isRegisteredProp: false
    },
    {
        title: "Projects to Products",
        location: "New Architecture Auditorium, SVIT",
        date: "Friday, 3rd May",
        image: "/assets/p2p.webp",
        slug: "p2p",
        SheetName: "Projects_to_Products_Certificate_Data",
        isRegisteredProp: false
    },
    {
        title: "Webverse P1 E2",
        location: "IT Seminar Hall, SVIT",
        date: "Friday, 15th March",
        image: "/assets/WebversePartOneE2.webp",
        slug: "webversep1e2",
        SheetName: "Webverse_Part_One_Event_Two_Certificate_Data",
        isRegisteredProp: false
    },
    {
        title: "Webverse P1 E1",
        location: "IT Seminar Hall, SVIT",
        date: "Tuesday, 12th March",
        image: "/assets/WebversePartOneE1.webp",
        slug: "webversep1e1",
        SheetName: "Webverse_Part_One_Event_One_Certificate_Data",
        isRegisteredProp: false
    },
    {
        title: "Converge",
        location: "Aeronautical Auditorium, SVIT",
        date: "Wednesday, 7th February",
        image: "/assets/Coverpage.webp",
        slug: "converge",
        SheetName: "Converge_Certificate_Data",
        isRegisteredProp: false
    },
];

const EventListSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {Array(defaultEventData.length).fill(0).map((_, index) => (
                <EventCardSkeleton key={`skeleton-${index}`} />
            ))}
        </div>
    );
};

const EventListContent = ({ isSignedIn }: { isSignedIn: boolean | undefined }) => {
    const { user } = useUser();
    const email = user?.primaryEmailAddress?.emailAddress || '';

    const fetchAttendanceData = async (): Promise<AttendeeData[]> => {
        if (!isSignedIn || !email) return [];

        try {
            const response: AxiosResponse<{ data: AttendeeData[] }> = await axios.get(
                `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_SHEET_FOR_USER_REGISTERED_OR_NOT_FOR_SPECIFIC_EVENT}/exec`
            );
            return response.data.data.filter((entry: AttendeeData) => entry.Email_Address === email);
        } catch (error) {
            console.error('Error fetching attendance data:', error);
            return [];
        }
    };

    const { data: attendanceData, isLoading, error } = useSuspenseQuery<AttendeeData[]>(
        fetchAttendanceData,
        [email, isSignedIn]
    );

    const processedEventData = _.cloneDeep(defaultEventData).map(event => {
        if (attendanceData && attendanceData.length > 0) {
            const matchingRecord = attendanceData.find(
                record => event.SheetName === record.SheetName && record.Checked_In && record.Checked_In !== ''
            );
            event.isRegisteredProp = !!matchingRecord;
        }
        return event;
    });

    if (error) {
        return (
            <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md">
                There was an error loading the events. Please try again later.
            </div>
        );
    }

    if (isLoading) {
        return <EventListSkeleton />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            {processedEventData.map((event) => (
                <EventCard
                    key={event.slug}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                    slug={event.slug}
                    isSignedInProp={isSignedIn}
                    isRegisteredProp={event.isRegisteredProp}
                />
            ))}
        </div>
    );
};

export default function Hero() {
    const { isSignedIn } = useUser();

    return (
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

                <Suspense fallback={<EventListSkeleton />}>
                    <EventListContent isSignedIn={isSignedIn} />
                </Suspense>
            </div>
        </div>
    );
}
