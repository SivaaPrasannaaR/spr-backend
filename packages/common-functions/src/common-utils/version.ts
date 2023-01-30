export const getCurrentVersion = () => {
  /* eslint @typescript-eslint/no-var-requires: "off" */
  const {version} = require('../../package.json');
  return version;
};
