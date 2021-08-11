const fs = require('fs-extra');
const path = require('path');
const cypressEsLint = require('cypress-eslint-preprocessor');

/* Configure environments */
getConfig = (env) => {
  const pathToFile = path.resolve('cypress', 'envs', `${env}.json`);

  return fs.readJson(pathToFile);
}

module.exports = (on, config) => {
  /* Get environment set as flag in CLI */
  const file = config.env.configEnv;

  /* Add Cypress linter to build process */
  on('file:preprocessor', cypressEsLint());

  return getConfig(file);
}