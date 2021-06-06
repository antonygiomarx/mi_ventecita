module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "jsx-a11y/href-no-hash": ["off"],
    "import/no-named-as-default-member": "off",

    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "max-len": [
      "warn",
      {
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "no-console": "off",
  },
};
