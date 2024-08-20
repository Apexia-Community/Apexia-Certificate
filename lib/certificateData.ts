import type { CertificateData } from "@/types/certificateDataTypes";

export const certificateData = [
    {
        title: "Converge",
        location: "Aeronautical Auditorium, SVIT",
        date: "Wednesday, 7th February 2024",
        image: "/assets/Coverpage.webp",
        Slug: "Converge",
        SheetName: "Converge_Certificate_Data",
        isRegisteredProp: false,
        textToPath: {
            text: "Attendee Name",
            fontPath: "/fonts/MARTIANMONO_SEMIEXPANDED-MEDIUM.otf",
            x: 40,
            y: 306,
            fontSize: 24,
            fill: "red",
            stroke: "black"
        },
        downloadMetadata: {
            title: "Converge Certificate",
            author: "Apexia",
            subject: "Certificate",
            creator: "Apexia"
        }
    },
    {
        title: "Webverse Part One Event 1",
        location: "IT Seminar Hall, SVIT",
        date: "Tuesday, 12th March",
        image: "/assets/WebversePartOneE1.webp",
        Slug: "WebverseP1E1",
        SheetName: "Webverse_Part_One_Event_One_Certificate_Data",
        isRegisteredProp: false,
        textToPath: {
            text: "Attendee Name",
            fontPath: "/fonts/READYFORANYTHINGBB-BOLD.TTF",
            x: 24,
            y: 305,
            fontSize: 24,
            fill: "black",
            stroke: "black"
        },
        downloadMetadata: {
            title: "Webverse Part One Event 1 Certificate",
            author: "Apexia",
            subject: "Certificate",
            creator: "Apexia"
        }
    },
    {
        title: "Webverse Part One Event 2",
        location: "IT Seminar Hall, SVIT",
        date: "Friday, 15th March 2024",
        image: "/assets/WebversePartOneE2.webp",
        Slug: "WebverseP1E2",
        SheetName: "Webverse_Part_One_Event_Two_Certificate_Data",
        isRegisteredProp: false,
        textToPath: {
            text: "Attendee Name",
            fontPath: "/fonts/READYFORANYTHINGBB-BOLD.TTF",
            x: 24,
            y: 305,
            fontSize: 24,
            fill: "white",
            stroke: "black"
        },
        downloadMetadata: {
            title: "Webverse Part One Event 2 Certificate",
            author: "Apexia",
            subject: "Certificate",
            creator: "Apexia"
        }
    },
    {
        title: "Projects to Products",
        location: "New Architecture Auditorium, SVIT",
        date: "Friday, 3rd May 2024",
        image: "/assets/p2p.webp",
        Slug: "P2P",
        SheetName: "Projects_to_Products_Certificate_Data",
        isRegisteredProp: false,
        textToPath: {
            text: "Attendee Name",
            fontPath: "/fonts/Montserrat-SemiBold.ttf",
            x: 50,
            y: 308,
            fontSize: 24,
            fill: "black",
            stroke: "black"
        },
        downloadMetadata: {
            title: "Projects to Products Certificate",
            author: "Apexia",
            subject: "Certificate",
            creator: "Apexia"
        }
    },
    // {
    //     title: "Designiti",
    //     location: "New Architecture Auditorium, SVIT",
    //     date: "Wednesday, 21st August 2024",
    //     image: "/assets/designiti.webp",
    //     Slug: "Designiti",
    //     SheetName: "Designitive_Certificate_Data",
    //     isRegisteredProp: false,
    //     textToPath: {
    //         text: "Attendee Name",
    //         fontPath: "/fonts/Montserrat-SemiBold.ttf",
    //         x: 50,
    //         y: 308,
    //         fontSize: 24,
    //         fill: "black",
    //         stroke: "black"
    //     },
    //     downloadMetadata: {
    //         title: "Projects to Products Certificate",
    //         author: "Apexia",
    //         subject: "Certificate",
    //         creator: "Apexia"
    //     }
    // }
] as unknown as CertificateData[];
