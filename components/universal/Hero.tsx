"use client";

import { useUser } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import EventCatd from "@/components/common/EventCard";

const EventData = [
    {
        title: "Converge",
        location: "Aeronautical Auditorium, SVIT",
        date: "Wednesday, 7th February",
        image: "/Coverpage.webp",
    },
    {
        title: "Webverse Part One Event 1",
        location: "IT Seminar Hall, SVIT",
        date: "Tuesday, 12th March",
        image: "/WebversePartOne.webp",
    }
];

export default function Hero() {
    const { isSignedIn } = useUser();

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
                        {EventData.map((event) => (
                            <>
                                <EventCatd
                                    title={event.title}
                                    location={event.location}
                                    date={event.date}
                                    image={event.image}
                                    isSignedInProp={isSignedIn}
                                />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
