import axios from "axios";

export function setupAPIClient(ctx) {
    const api = axios.create({
        baseURL:"https://api-eventos-server-git-main-alxdelira.vercel.app/",
        headers: {
            Accept: "application/json"
        }
    });

    return api;
}