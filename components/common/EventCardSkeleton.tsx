import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function EventCardSkeleton() {
    return (
        <Card>
            <CardHeader>
                <Skeleton className="rounded-lg pointer-events-none object-cover aspect-video" />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <CardTitle className="flex flex-col gap-2">
                    <Skeleton className="flex items-center h-10 w-full text-4xl max-sm:h-8" />
                    <Separator />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="w-full h-7 max-sm:h-5" />
                </CardDescription>
                <CardDescription>
                    <Skeleton className="w-full h-7 max-sm:h-5" />
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Skeleton className="w-full h-7 mb-4" />
                <Skeleton className="flex items-center gap-2 cursor-pointer" />
            </CardFooter>
        </Card>
    );
}
