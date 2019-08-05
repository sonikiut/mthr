import axios from "axios";

export default axios.create({
    baseURL: "https://services.mataharimall.com/products/v0.2/",
    params: {
        q: "",
        per_page: 10,
        sort: ""
    }
});
