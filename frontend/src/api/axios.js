import axios from "axios";

const API = axios.create({

    baseURL: "https://blog-platform-zrph.onrender.com/api/",
});

export default API;