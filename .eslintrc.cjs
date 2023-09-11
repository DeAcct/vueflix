module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:vue/vue3-essential"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "import/prefer-default-export": "off",
    quotes: [2, "double", { avoidEscape: true }],
    "no-param-reassign": ["error", {
      props: true,
      ignorePropertyModificationsFor: [
        "acc", // for reduce accumulators
        "e", // for e.returnvalue
        "ctx", // for Koa routing
        "req", // for Express requests
        "request", // for Express requests
        "res", // for Express responses
        "response", // for Express responses
        "$scope", // for Angular 1 scopes
        "state",
      ],
    }],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
      },
    },
  },
};
