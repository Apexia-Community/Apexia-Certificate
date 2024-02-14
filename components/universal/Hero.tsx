import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function Hero() {
    return (
        <>
            <div className="w-full max-w-[90%] mx-auto justify-center">
                <div className="mb-10">
                    <div className="flex items-center justify-center">
                        <Label className="text-4xl font-bold">
                            Welcome to Apexia Certificate
                        </Label>
                    </div>
                    <div className="flex items-center justify-center">
                        <Label className="text-lg">
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
                        <CardContent>
                            <CardTitle>
                                <Label className="flex items-center text-4xl">
                                    Converge
                                </Label>
                            </CardTitle>
                            <CardDescription>
                                <Label className="flex items-center text-lg gap-2">
                                    <MapPin />
                                    Aeronautical Auditorium, SVIT
                                </Label>
                            </CardDescription>
                            <CardDescription>
                                <Label className="flex items-center text-lg gap-2">
                                    <CalendarDays />
                                    Wednesday, 7th February
                                </Label>
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link href="/certificate/Converge" className="cursor-pointer">
                                <Button>
                                    <Label className="flex items-center text-lg gap-2">
                                        Get Certificate
                                        <ArrowRight size={20} />
                                    </Label>
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>


        </>
    )
}
