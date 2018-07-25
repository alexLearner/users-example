const __DEV__ = process.env.NODE_ENV !== 'production';
const PROJECT_URL = !__DEV__ ? "/users-example" : "";

export {
  PROJECT_URL,
  __DEV__
};