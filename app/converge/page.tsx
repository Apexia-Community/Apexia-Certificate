import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Header from "@/components/universal/Header";
import { MapPin, CalendarDays } from "lucide-react";
import { ChevronRight, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ConvergeCertificate from "./certificateDesign";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Certificate() {

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
                <div className="flex my-5 max-sm:justify-center">
                    <Card className="flex max-sm:flex-col w-full justify-between">
                        <CardHeader>
                            <ConvergeCertificate className="max-sm:w-full t max-sm:h-fit rounded-md shadow-sm shadow-black" />
                        </CardHeader>
                        <div className="p-4 flex flex-col w-full max-sm:p-0">
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    <CardTitle className="flex flex-col gap-2">
                                        <Label className="flex items-center text-4xl max-sm:text-2xl">
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
                        </div>
                    </Card>
                </div>
            </div>

        </>
    );
}