module.exports = {
  outputDir: './docs',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('ion-'),
        };
        return options;
      });
  },
};
