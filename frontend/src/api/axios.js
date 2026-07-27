import axios from "axios";

const API = axios.create({
    //baseRL: "https://8000/api/"
    baseURL: "https://blog-platform-zrph.onrender.com/api/",

});

export default API;