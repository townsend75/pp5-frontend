import axios from "axios";

axios.defaults.baseURL = "https://pp5-drf-7cd889e92857.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
