module.exports = {
  chainWebpack: config => {
    // svgRule code via
    // https://cli.vuejs.org/guide/webpack.html#replacing-loaders-of-a-rule
    const svgRule = config.module.rule('svg');

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();

    // add replacement loader(s)
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');

    // change webpack entry point from src/main.js
    // code via https://stackoverflow.com/a/52773981/2145103
    // ...figured it out after a bit of trials and trib,
    // ...plus `vue inspect` on the cli

    // clear the existing entry point
    config.entry('app').clear();
    // add your custom entry point
    config.entry('app').add('./src/renderer/main.js');
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: './src/main/background.js'
    }
  }
};
