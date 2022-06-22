const path = require('path')

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules",
  ],
  "framework": "@storybook/react",
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.alias['/images/arrow_outward_black.svg'] = path.resolve(__dirname, '../public/images/arrow_outward_black.svg');
    baseConfig.resolve.alias['/images/arrow_outward_white.svg'] = path.resolve(__dirname, '../public/images/arrow_outward_white.svg');
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[local]___[hash:base64:2]",
            },
          },
        },
        "sass-loader",
      ],
    });
    return { ...baseConfig };
  },
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}