module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  jsxBracketSameLine: false,
  tailwindConfig: './tailwind.config.js',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ],
  plugins: [require('prettier-plugin-tailwindcss')]
}
