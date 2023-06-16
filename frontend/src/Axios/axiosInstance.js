import axios from "axios";


const JsonURL = "http://localhost:5000/";
const headers = {
    'Content-Type': 'application/json',
}

// const backendURL = "http://localhost:8000/api/"
// const backendURL = "https://gcms.techjainsupport.co.in/api/"
const backendURL = "http://:16.171.84.88:5000/api/"

export const axiosInstance = axios.create({
    baseURL: backendURL,
    headers: headers
})

export const axiosInstances = axios.create({
    baseURL: JsonURL,
    headers: headers
});


