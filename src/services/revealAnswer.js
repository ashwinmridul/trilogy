import { API_ENDPOINT } from "../globalConstants";

export default (questionId) => {
    return new Promise((resolve) => {
        fetch(`${API_ENDPOINT}/reveal?id=${questionId}`).then(res => res.json()).then(res => {
            resolve(res);
        }).catch(console.error);
    });
};