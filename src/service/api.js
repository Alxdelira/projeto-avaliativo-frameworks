import axios from "axios";

export function setupAPIClient(ctx) {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_DBURL || "http://localhost:3001",
        headers: {
            Accept: "application/json"
        }
    });

    return api;
}