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
    ignores: [".next/**", "out/**", "build/**"],
  },
  {
    rules: {
      // Allow unescaped entities in JSX (apostrophes, etc.)
      "react/no-unescaped-entities": "off",
      // Allow <img> elements (we'll optimize later if needed)
      "@next/next/no-img-element": "warn",
      // Allow explicit any in type definitions
      "@typescript-eslint/no-explicit-any": "warn",
      // Allow missing alt text (warn instead of error)
      "jsx-a11y/alt-text": "warn",
    },
  },
];

export default eslintConfig;
