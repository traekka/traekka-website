module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "body-max-line-length": [0],
    // rule necessary for github dependabot commit messages
    "function-rules/body-max-line-length": [
      2,
      "always",
      (parsed) => {
        if (parsed.header.includes("bump") || getLineLength(parsed.body) <= 100) {
          return [true];
        }
        if (parsed.body !== null) {
          if (parsed.body.length <= 72) {
            return [true];
          }
          return [false, "Line length too long"];
        }
        return [false, "Line length too long"];
      },
    ],
  },
};

const getLineLength = (text) => {
  if (text === null) {
    return 0;
  }
  let maxLength = 0;
  const lines = text.split(/\r?\n/);
  // eslint-disable-next-line no-restricted-syntax
  for (const line of lines) {
    if (line.length > maxLength) {
      maxLength = line.length;
    }
  }
  return maxLength;
};
