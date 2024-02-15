import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function Hero() {
    return (
        <>
            <div className="w-full max-w-[90%] mx-auto justify-center">
                <div className="mb-10 max-sm:text-center">
                    <div className="flex items-center max-sm:justify-center">
                        <Label className="text-4xl font-bold max-sm:text-xl">
                            Welcome to Apexia Certificate
                        </Label>
                    </div>
                    <div className="flex items-center max-sm:justify-center">
                        <Label className="text-lg max-sm:text-sm">
                            Your one stop solution for all your certificate needs
                        </Label>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <Image
                                src="/Coverpage.webp"
                                alt="Converge"
                                width={1200}
                                height={800}
                                className="rounded-lg"
                                style={{
                                    aspectRatio: "16/9",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease-in-out",
                                }} />
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <CardTitle className="flex flex-col gap-2">
                                <Label className="flex items-center text-4xl max-sm:text-2xl">
                                    Converge
                                </Label>
                                <Separator />
                            </CardTitle>
                            <CardDescription>
                                <Label className="flex items-center max-sm:text-sm text-lg gap-2">
                                    <MapPin  size={18} className="max-sm:w-4"/>
                                    Aeronautical Auditorium, SVIT
                                </Label>
                            </CardDescription>
                            <CardDescription>
                                <Label className="flex items-center max-sm:text-sm text-lg gap-2">
                                    <CalendarDays size={18} className="max-sm:w-4"/>
                                    Wednesday, 7th February
                                </Label>
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button className="cursor-pointer" >
                                <Link href="/converge">
                                    <Label className="flex items-center text-lg max-sm:text-sm gap-2 cursor-pointer">
                                        Get Certificate
                                        <ArrowRight size={18} className="max-sm:w-4" />
                                    </Label>
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}
