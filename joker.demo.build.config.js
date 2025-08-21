const path = require("node:path");
//demo构建
module.exports = {
    build: {
        // 多入口配置
        rollupOptions: {
            input: {
                // 配置多个入口，键为打包后的文件名前缀
                index: path.resolve(__dirname, "index.html"),
                "index.en": path.resolve(__dirname, "index.en.html")
            }
        }
    },
    define: {
        routerType: "html5"
    }
};
