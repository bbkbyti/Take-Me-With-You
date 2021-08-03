import api from "./apiConfig";

export const getTrips = async () => {
    try {
        const res = await api.get("/trips");
        return res.data;
    } catch (e) {
        throw e;
    }
};