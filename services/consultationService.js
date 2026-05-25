import axios from "axios";

// Fetch consultation history
export const getPatientConsultations = async (
    patientId,
    token
) => {

    const baseURL =
    process.env.ADAPTER_LAYER_URL;

    const url =
    `${baseURL}/consultations/history/${patientId}`;

    const res = await axios.get(
        url,
        {
            headers: {
                Authorization:
                `Bearer ${token}`
            }
        }
    );

    return res.data;

};

// Create consultation notes
export const createConsultation = async (
    data,
    token
) => {

    const baseURL =
    process.env.ADAPTER_LAYER_URL;

    const url =
    `${baseURL}/consultations/create`;

    const res = await axios.post(
        url,
        data,
        {
            headers: {
                Authorization:
                `Bearer ${token}`
            }
        }
    );

    return res.data;

};

// Update consultation notes
export const updateConsultation = async (
    id,
    data,
    token
) => {

    const baseURL =
    process.env.ADAPTER_LAYER_URL;

    const url =
    `${baseURL}/consultation/${id}`;

    const res = await axios.put(
        url,
        data,
        {
            headers: {
                Authorization:
                `Bearer ${token}`
            }
        }
    );

    return res.data;

};