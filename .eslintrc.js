module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb', // Uses Airbnb's shared config
    'airbnb/hooks', // This entry point enables the linting rules for React hooks (requires v16.8+).
    'plugin:import/typescript', // with support for typescript.
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['jest'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'prettier/prettier': 'error', // report all prettier errors
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
};
