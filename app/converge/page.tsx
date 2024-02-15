"use client";

import Link from "next/link";
import Image from "next/image";
import fetchData from "@/app/api/dataset";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Header from "@/components/universal/Header";
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Download } from "lucide-react";
import ConvergeCertificate from "./certificateDesign";
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";



interface AttendeeData {
    Attendee_Name: string;
    Email_Address: string;
    Checked_In: string;
}

interface LumaData {
    allData: AttendeeData[];
}

export default function Certificate() {
    // const [lumaData, setLumaData] = useState<LumaData | null>(null);

    // useEffect(() => {
    //     const fetchDataOnClientSide = async () => {
    //         try {
    //             const newData = await fetchData();
    //             if (newData) {
    //                 setLumaData({ allData: newData });
    //             } else {
    //                 console.error('Data fetched is null');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchDataOnClientSide();
    // }, []);

    // console.log(lumaData);

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
                {/* Certificate Section */}
                <div className="flex justify-center my-10">
                    <Card>
                        <CardHeader>
                            <ConvergeCertificate />
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-2">
                                <CardTitle className="flex flex-col gap-2">
                                    <Label className="flex items-center text-4xl">
                                        Converge
                                    </Label>
                                    <Separator />
                                </CardTitle>
                                <CardDescription>
                                    <Label className="flex items-center max-sm:text-sm text-lg gap-2">
                                        <MapPin size={18} className="max-sm:w-4" />
                                        Aeronautical Auditorium, SVIT
                                    </Label>
                                </CardDescription>
                                <CardDescription>
                                    <Label className="flex items-center max-sm:text-sm text-lg gap-2">
                                        <CalendarDays size={18} className="max-sm:w-4" />
                                        Wednesday, 7th February
                                    </Label>
                                </CardDescription>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="cursor-pointer">
                                <Link href="/converge">
                                    <Label className="flex items-center max-sm:text-sm text-lg gap-2 cursor-pointer">
                                        Download Certificate
                                        <Download size={18} className="max-sm:w-4" />
                                    </Label>
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

        </>
    );
}
