function request (url, options) {
    const fetchUrl = `http://localhost:3000${url}`
    return fetch(fetchUrl, options).then(res => res.json());
}
export default request;