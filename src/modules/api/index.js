import forEach from "lodash/forEach";

const __DEV__ = process.env.NODE_ENV !== 'production';

class API {
  URL = __DEV__ ? "" : "users-example";

  fetch = (url, params) => {
    return fetch(this.URL + url, {
      ...params,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
  };

  get = (url, params = {}) => {
    return this
      .fetch(url, params)
      .then(res => res.json())
  };

  create = (url, params = {}, body) => {
    return this
      .fetch(url, {
        ...params,
        method: "POST",
        body
      })
      .then(res => res.json())
  };

  params = object => {
    if (!object) return '';

    const result = [];
    forEach(
      object,
      (val, key) =>
        val
          ? result.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
          : null,
    );

    if (!result.length) {
      return '';
    }

    return `?${result.join('&')}`;
  };
}

const NEW_API = new API();
NEW_API.get(`/json/users.json`).then((response) => {
  console.log("RESPONSE", response);
});


export default API;
