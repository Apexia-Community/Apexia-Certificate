import Link from "next/link";
import Image from "next/image";
import slugify from "typescript-slugify";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface EventCardProps {
    title: string;
    location: string;
    date: string;
    image: string;
    isSignedInProp?: boolean;
}

export default function EventCatd(
    {
        title,
        location,
        date,
        image,
        isSignedInProp,
    }: EventCardProps
) {
    return (
        <>
            <Card>
                <CardHeader>
                    <Image
                        src={image}
                        alt={title}
                        width={1200}
                        height={800}
                        className="rounded-lg pointer-events-none object-cover aspect-video"
                    />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <CardTitle className="flex flex-col gap-2">
                        <Label className="flex items-center text-4xl max-sm:text-2xl">
                            {title}
                        </Label>
                        <Separator />
                    </CardTitle>
                    <CardDescription>
                        <Label className="flex items-center max-sm:text-sm text-lg gap-2">
                            <MapPin size={18} className="max-sm:w-4" />
                            {location}
                        </Label>
                    </CardDescription>
                    <CardDescription>
                        <Label className="flex items-center max-sm:text-sm text-lg gap-2">
                            <CalendarDays size={18} className="max-sm:w-4" />
                            {date}
                        </Label>
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    {isSignedInProp ? (
                        <>
                            <Link href={`/${slugify(title)}`} className="cursor-pointer">
                                <Button className="flex items-center gap-2 cursor-pointer">
                                    <Label className="text-lg max-sm:text-sm cursor-pointer">
                                        Get Certificate
                                    </Label>
                                    <ArrowRight size={18} className="max-sm:w-4 cursor-pointer" />
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in" className="cursor-pointer">
                                <Button className="flex items-center gap-2 cursor-pointer">
                                    <Label className="text-lg max-sm:text-sm cursor-pointer">
                                        Sign In to Get Certificate
                                    </Label>
                                    <ArrowRight size={18} className="max-sm:w-4 cursor-pointer" />
                                </Button>
                            </Link>
                        </>
                    )}
                </CardFooter>
            </Card>
        </>
    );
}