module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-controls",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  typescript: {
    // fork-ts-checker-webpack-plugin 사용 여부 옵션 (default : false)
    check: false,

    // 위에서 fork-ts-checker-webpack-plugin을 사용한다 설정시, 그에 전달할 옵션들
    checkOptions: {},

    // 프로세서가 실행시킬 docgen의 종류 ('react-docgen-typescript', 'react-docgen', false)
    reactDocgen: "react-docgen-typescript",

    // 위에서 react-docgen-typescript를 사용한다 설정시, 전달해줄 옵션들
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
