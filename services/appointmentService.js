import axios from "axios";

export const getDoctorAppointments = async (
    doctorId,
    token
) => {

    const baseURL =
    process.env.LEGACY_SYSTEM;

    // TEMPORARY:
    // use existing adapter route
    const url =
    `${baseURL}/appointment`;

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

export const acceptAppointment = async (
    id,
    token
) => {

    const baseURL =
    process.env.ADAPTER_LAYER_URL;

    const url =
    `${baseURL}/appointments/${id}/accept`;

    const res = await axios.put(
        url,
        {},
        {
            headers: {
                Authorization:
                `Bearer ${token}`
            }
        }
    );

    return res.data;

};

export const completeAppointment = async (
    id,
    token
) => {

    const baseURL =
    process.env.ADAPTER_LAYER_URL;

    const url =
    `${baseURL}/appointments/${id}/complete`;

    const res = await axios.put(
        url,
        {},
        {
            headers: {
                Authorization:
                `Bearer ${token}`
            }
        }
    );

    return res.data;

};

export const getPatientAppointmentInfo = async (
    patientId,
    token
) => {

    const baseURL =
    process.env.ADAPTER_LAYER_URL;

    const url =
    `${baseURL}/appointments/patient/${patientId}`;

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