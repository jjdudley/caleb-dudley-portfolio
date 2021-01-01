# Gatsby Plugin: Add SourceInstanceName to MarkdownRemark

[![MIT License](https://badgen.now.sh/badge/License/MIT/blue)](https://github.com/sbstjn/gatsby-source-instance-name-for-remark/blob/master/LICENSE.md)
[![CircleCI](https://badgen.net/circleci/github/sbstjn/gatsby-source-instance-name-for-remark)](https://circleci.com/gh/sbstjn/gatsby-source-instance-name-for-remark)
[![NPM](https://badgen.net/npm/v/gatsby-source-instance-name-for-remark)](https://www.npmjs.com/package/gatsby-source-instance-name-for-remark)

Add the `options.name` value from `gatsby-source-filesystem` to `MarkdownRemark` nodes for better filtering of different content types.

## Install

```bash
# With Yarn
$ > yarn add -D gatsby-source-instance-name-for-remark

# With NPM
$ > npm install --save-dev gatsby-source-instance-name-for-remark
```

### Configuration

```js
// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/products`,
        name: "products"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-source-instance-name-for-remark"
  ]
};
```

## License

Feel free to use the code, it's released using the [MIT license](LICENSE.md).

## Contribution

You are welcome to contribute to this project! 😘

To make sure you have a pleasant experience, please read the [code of conduct](CODE_OF_CONDUCT.md). It outlines core values and beliefs and will make working together a happier experience.
