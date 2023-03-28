module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@native-base/icons": "@native-base/icons/lib",
          },
        },
      ],
      "react-native-reanimated/plugin",
      // TODO: this is needed to get jest running, but breaks expo. Hence we use a dedicated babel
      // config file for jest only. We should revisit this.
      // ["@babel/plugin-proposal-private-methods", { loose: true }],
    ],
  };
};
