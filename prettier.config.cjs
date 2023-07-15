/** @type {import('@trivago/prettier-plugin-sort-imports').PrettierConfig} */
const config = {
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"), 
    require.resolve("@trivago/prettier-plugin-sort-imports")
  ],
  useTabs: true,
  singleQuote: true,
  semi: false,
  printWidth: 100,
  trailingComma: "es5",
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@/",
    "^[.]",
    "^[.][.]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["decorators-legacy", "jsx", "typescript"],
};

module.exports = config;
