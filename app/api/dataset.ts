import axios, { AxiosResponse } from 'axios';

interface AttendeeData {
    Attendee_Name: string;
    Email_Address: string;
    Checked_In: string;
}

const fetchData = async (): Promise<AttendeeData[] | null> => {
    try {
        const response: AxiosResponse<{ data: AttendeeData[] }> = await axios.get(`https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_SHEET_ID}/exec`);
        const filteredData: AttendeeData[] = response.data.data.filter((entry: AttendeeData) => entry.Checked_In !== "");
        return filteredData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default fetchData;