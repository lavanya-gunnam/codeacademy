import axios from "axios";
const commonapiURL="https://codecademy-7f8e6-default-rtdb.firebaseio.com";
export const getEmployee = async () => {
    try {
        const response = await axios.get(`${commonapiURL}/employee.json`);
        const jsonData = response.data;

        if (jsonData === null) {
            return [];
        } else {
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    } catch (error) {
        console.error('Error fetching employee data:', error);
        return [];
    }
}