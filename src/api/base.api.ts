import axios from "axios"

const BASE_URL = "https://dog.ceo/api/"

export const instance = axios.create({
    baseURL: BASE_URL
})