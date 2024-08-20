"use client";

import React from "react";
import Link from "next/link";
import { jsPDF } from 'jspdf';
import { useRef } from "react";
import { useUser } from "@clerk/nextjs";
import slugify from 'typescript-slugify';
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import generateSVGText from "@/utils/text_to_svgpath";
import { certificateData } from "@/lib/certificateData";
import { ConvergeCertificate } from "@/components/cert/convergeCert";
import type { CertificateData } from "@/types/certificateDataTypes";
import { getSpecificCertificateData } from "@/lib/getCertificateData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpecificCertificatePage({ params }: { params: { certificateSlug: string } }) {
    const { toast } = useToast()
    const { user, isSignedIn } = useUser();
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [appscriptFetchError, setAppscriptFetchError] = useState<boolean>(false);
    const [noneAttendeeName, setNoneAttendeeName] = useState<string | null>(null);
    const [attendeeName, setAttendeeName] = useState<string | null>(null);
    const [attendeeNameSVG, setAttendeeNameSVG] = useState<string | null>(null);
    const [certificateLocalData, setCertificateLocalData] = useState<CertificateData>();

    useEffect(() => {
        if (
            certificateData.some((certificate) =>
                certificate.Slug.toLowerCase() === params.certificateSlug.toLowerCase()
            )
        ) {
            const data = certificateData.find((certificate) => certificate.Slug.toLowerCase() === params.certificateSlug.toLowerCase()) as unknown as CertificateData;
            if (data) setCertificateLocalData(data);
        } else {
            return notFound();
        }
    }, [params.certificateSlug]);

    useEffect(() => {
        if (!certificateLocalData) return;
        generateSVGText(
            certificateLocalData?.textToPath.text,
            certificateLocalData?.textToPath.fontPath,
            certificateLocalData?.textToPath.x,
            certificateLocalData?.textToPath.y,
            certificateLocalData?.textToPath.fontSize,
            certificateLocalData?.textToPath.fill,
            certificateLocalData?.textToPath.stroke
        ).then(svgResult => {
            setNoneAttendeeName(svgResult);
        }).catch(error => {
            console.error(error);
        });
    }, [certificateLocalData]);

    const downloadSvgAsPdf = (svgElementId: string, fileName: string, metadata = {}, quality = 1.5) => {
        const element = document.getElementById(svgElementId);

        if (!element) {
            console.error(`SVG element with id '${svgElementId}' not found.`);
            return;
        }

        const svgWidth = 1920;
        const svgHeight = 1337.7;

        const canvas = document.createElement('canvas');
        canvas.width = svgWidth * window.devicePixelRatio;
        canvas.height = svgHeight * window.devicePixelRatio;
        canvas.style.width = `${svgWidth}px`;
        canvas.style.height = `${svgHeight}px`;

        const ctx = canvas.getContext('2d', { alpha: false });

        if (!ctx) {
            console.error('Canvas context could not be created.');
            return;
        }
        const svgData = new XMLSerializer().serializeToString(element);
        const img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0, svgWidth * window.devicePixelRatio, svgHeight * window.devicePixelRatio);
            const dataUrl = canvas.toDataURL('image/jpeg', quality);
            const doc = new jsPDF({
                orientation: svgWidth > svgHeight ? 'landscape' : 'portrait',
                unit: 'pt',
                format: [svgWidth, svgHeight]
            });
            doc.setProperties(metadata);
            doc.addImage(dataUrl, 'JPEG', 0, 0, svgWidth, svgHeight, undefined, 'FAST');
            // @ts-ignore
            window.open(doc.output('bloburl', { filename: fileName }));
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    };


    const handleSvgPdfDownload = () => {
        const metadata = {
            title: `${attendeeName} ${certificateLocalData?.downloadMetadata.title}`,
            author: certificateLocalData?.downloadMetadata.author,
            subject: certificateLocalData?.downloadMetadata.subject,
            creator: certificateLocalData?.downloadMetadata.creator
        };
        downloadSvgAsPdf('certificate', `${slugify(attendeeName!)}-${slugify(certificateLocalData?.downloadMetadata.title!)}.pdf`, metadata);
    };

    useEffect(() => {
        const getEmailData = async () => {
            const email = user?.primaryEmailAddress?.emailAddress!;
            const data = await getSpecificCertificateData(certificateLocalData?.SheetName!, email);
            console.log("======data", data);
            if (data && data.Checked_In !== "") {
                setAttendeeName(data.Attendee_Name);
                toast({
                    title: "Data found",
                    description: `Data found for ${data.Attendee_Name}`,
                });
                generateSVGText(
                    `${data.Attendee_Name}`,
                    certificateLocalData?.textToPath.fontPath,
                    certificateLocalData?.textToPath.x,
                    certificateLocalData?.textToPath.y,
                    certificateLocalData?.textToPath.fontSize,
                    certificateLocalData?.textToPath.fill,
                    certificateLocalData?.textToPath.stroke
                ).then(svgResult => {
                    setAttendeeNameSVG(svgResult);
                }).catch(error => {
                    console.error(error);
                });
                toast({
                    title: "Certificate generated",
                    description: `Certificate generated for ${data.Attendee_Name}`,
                });
            } else {
                if (!isSignedIn) {
                    toast({
                        variant: "destructive",
                        title: "You are not signed in",
                        description: `Please sign in to view your certificate.`,
                    });
                }
                else {
                    if (appscriptFetchError === false) {
                        toast({
                            variant: "destructive",
                            title: "Data not found",
                            description: "Data not found for the specified email.",
                        });
                    }
                    else {
                        toast({
                            variant: "destructive",
                            title: "Server is in Maintanence",
                            description: "Please try again later.",
                        });
                    }
                }
                setAttendeeNameSVG(null);
            }
        };

        getEmailData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSignedIn, toast, user]);

    return (
        <>
            <title>{`${certificateLocalData?.title} | Apexia Certificate`}</title>
            <div className="sr-only">
                <h1>Specific Certificate Page: {params.certificateSlug}</h1>
                <h2>Attandee Name: {attendeeName}</h2>
                <pre>
                    {JSON.stringify(certificateLocalData, null, 2)}
                </pre>
            </div>
            <div className="w-full max-w-[90%] mx-auto justify-center min-h-screen">
                <div className="flex items-center">
                    <Link href="../" className="cursor-pointer">
                        <Label className="text-lg cursor-pointer underline">Apexia Certificate</Label>
                    </Link>
                    <ChevronRight />
                    <Label className="text-lg cursor-pointer underline">
                        {certificateLocalData?.title}
                    </Label>
                </div>
                <div className="flex my-5 max-sm:justify-center">
                    <Card className="flex max-sm:flex-col w-full justify-between">
                        <CardHeader>
                            <ConvergeCertificate
                                svgRef={svgRef}
                                attendeeNameSVG={attendeeNameSVG}
                                noneAttendeeName={noneAttendeeName}
                            />
                        </CardHeader>
                        <div className="p-4 flex flex-col w-full max-sm:p-0">
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    <CardTitle className="flex flex-col gap-2">
                                        <Label className="flex items-center text-4xl max-sm:text-2xl">
                                            {certificateLocalData?.title}
                                        </Label>
                                        <Separator />
                                    </CardTitle>
                                    <CardDescription>
                                        <Label className="flex items-center max-sm:text-sm text-lg gap-2">
                                            <MapPin size={18} className="max-sm:w-4" />
                                            {certificateLocalData?.location}
                                        </Label>
                                    </CardDescription>
                                    <CardDescription>
                                        <Label className="flex items-center max-sm:text-sm text-lg gap-2">
                                            <CalendarDays size={18} className="max-sm:w-4" />
                                            {certificateLocalData?.date}
                                        </Label>
                                    </CardDescription>
                                </div>
                            </CardContent>
                            <CardFooter>
                                {attendeeNameSVG && (
                                    <Button className="cursor-pointer" onClick={handleSvgPdfDownload}>
                                        <Label className="flex items-center max-sm:text-sm text-lg gap-2 cursor-pointer">
                                            Download Certificate
                                            <Download size={18} className="max-sm:w-4" />
                                        </Label>
                                    </Button>
                                )}
                            </CardFooter>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
