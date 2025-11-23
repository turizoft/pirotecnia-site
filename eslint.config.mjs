import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "eslint.config.mjs",
      "node_modules",
      ".next",
      "dist",
      "build",
      "**/*.config.js",
      "**/*.config.mjs",
    ],
    rules: {
      curly: ["error", "all"],
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": "error",
      // Remove conflicting formatting rules that should be handled by Prettier
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/quotes": "off",
    },
  },
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      curly: ["error", "all"],
      "no-console": "error",
    },
  },
];

export default eslintConfig;
