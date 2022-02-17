module.exports = {
  outputDir: "./docs",
  chainWebpack: (config) => {
    config.module.rule("vue").use("vue-loader");
  },
  pwa: {
    name: "Vueflix",
    themeColor: "#d62929",
    msTileColor: "#000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
  },
};
