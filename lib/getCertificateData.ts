import axios, { AxiosResponse } from "axios";
import type { AttendeeData } from "@/types/certificateDataTypes";

export async function getSpecificCertificateData(
    sheetName: string,
    targetEmail: string
): Promise<AttendeeData | null> {
    try {
        const response: AxiosResponse<{ data: AttendeeData[] }> = await axios.get(
            `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_ATTENDEE_DATA_API_KEY}/exec?SheetName=${sheetName}&Email_Address=${targetEmail}`
        );
        const data = response.data.data as AttendeeData[];
        if (data.length > 0) {
            console.log("getMethod",data);
            return data[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
