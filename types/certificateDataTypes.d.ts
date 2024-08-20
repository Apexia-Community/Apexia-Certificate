export interface AttendeeData {
    Checked_In: string;
    Attendee_Name: string;
    Email_Address: string;
    SheetName: string;
};

export interface CertificateData {
    title: string;
    location: string;
    date: string;
    image: string;
    Slug: string;
    SheetName: string;
    isRegisteredProp: boolean;
    textToPath: {
        text: string;
        fontPath: string;
        x: number;
        y: number;
        fontSize: number;
        fill: string;
        stroke: string;
    };
    downloadMetadata: {
        title: string;
        author: string;
        subject: string;
        creator: string;
    };
};
