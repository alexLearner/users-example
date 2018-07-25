import forEach from "lodash/forEach";

class API {
  // URL = __DEV__ ? "" : "/users-example";
  URL = "";

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

export default API;
