module.exports = {
  addons: ['@storybook/addon-essentials','@storybook/addon-a11y'],
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config, { configType }) => {
    // add typescript support
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
