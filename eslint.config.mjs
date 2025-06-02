import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the 'no-unused-vars' rule completely.
      // You can also use 'warn' for a warning instead of an error,
      // or specify more granular options if needed.
      "no-unused-vars": "off",

      // Example of setting it to 'warn' with common exceptions:
      // 'no-unused-vars': ['warn', { 'args': 'none', 'varsIgnorePattern': '^_', 'caughtErrors': 'none' }],
    },
  },
];

export default eslintConfig;
