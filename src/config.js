const __DEV__ = process.env.NODE_ENV !== "production";

/*
* const ROOT used for github pages routing;
* */

const ROOT = !__DEV__ ? "/users-example" : "";

export {
  ROOT,
  __DEV__
};