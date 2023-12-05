import axios from "axios";

axios.defaults.baseURL = "https://pp5-frontend-4b5821b7dc88.herokuapp.com/";
axios.defaults.headers.post["ContentType"] = "multipart/form-data";
axios.defaults.withCredentials = true;
