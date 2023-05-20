import { API_ENDPOINT } from "../globalConstants";

export default (type) => {
    return new Promise((resolve) => {
        fetch(`${API_ENDPOINT}/${type}`).then(res => res.json()).then(res => {
            resolve(res);
        }).catch(console.error);
    });
};