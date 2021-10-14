module.exports = {
  // Specifies the ESLint parser
  parser: "@typescript-eslint/parser",
  root: true,
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      }
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["@typescript-eslint", "react", "prettier", "import"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    },
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: "module"
  },
  rules: {
    // Disable prop-types as we use TypeScript for type checking
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "prettier/prettier": "error",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-interface": [
      "warn",
      { allowSingleExtends: true }
    ],
    // needed for jsx without react import
    "react/react-in-jsx-scope": "off",
    "no-unused-expressions": "warn",
    "no-unused-vars": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-unresolved": [2, { commonjs: true, amd: true }]
  },
  ignorePatterns: ["__test__/**/*", ".eslintrc.js", "types"],
  globals: { React: "writable" }
};
