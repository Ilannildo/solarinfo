import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const googleApiUrl = process.env.NEXT_PUBLIC_API_GOOGLE_URL;

export const apiGoogleService = axios.create({
  baseURL: googleApiUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000/"
  },
});
