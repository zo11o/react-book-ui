const { override, fixBabelImports, addWebpackAlias, addBabelPlugins } = require("customize-cra");
const path = require('path')
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config;
};
module.exports = override(
    ...addBabelPlugins(
        //如果安装这个了，则支持jsx加上less的写法
      [
        "styled-jsx/babel",
        // { "plugins": ["styled-jsx-plugin-less"] }
      ]
    ),
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        style: "css",
    }),
    addWebpackAlias({
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        view: path.resolve(__dirname, './src/view'),
    })
);
