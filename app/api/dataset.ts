import axios, { AxiosResponse } from 'axios';

interface AttendeeData {
    Attendee_Name: string;
    Email_Address: string;
    Checked_In: string;
}

const fetchData = async (targetEmail: string): Promise<AttendeeData | null> => {
    try {
        const response: AxiosResponse<{ data: AttendeeData[] }> = await axios.get(`https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_SHEET_ID}/exec`);
        const filteredData: AttendeeData | undefined = response.data.data.find((entry: AttendeeData) => entry.Email_Address === targetEmail);
        return filteredData || null;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default fetchData;