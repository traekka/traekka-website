module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write", "eslint"],
  "**/*.ts?(x)": () => "npm run check-types",
  "*.{json,yaml,yml,md}": ["prettier --ignore-unknown --write"],
  "*.{css,scss,less}": ["stylelint --fix", "prettier --write"],
  "*.{png,jpeg,jpg,gif,svg}": "imagemin-lint-staged",
  "*": "ls-lint",
};
