import forEach from "lodash/forEach";

class API {
  fetch = (url, params) => {
    return fetch(url, {
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

  parseArgs = _arguments => (_arguments ? JSON.parse(_arguments) : '');

  stringifyArgs = _arguments =>
    _arguments !== '' ? JSON.stringify(_arguments) : _arguments;

  // call = action => {
  //   if (this.listeners(action)) {
  //     return this.listeners(action)();
  //   }
  // };
  //
  // setListener = (name, cb) => {
  //   this.listeners[name] = cb;
  // };
  //
  // removeListener = name => {
  //   delete this.listeners[name];
  // };

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
