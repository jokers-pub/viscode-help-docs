export function getLang() {
    let lang = "";

    return lang || (location.pathname.startsWith("/cn") ? "zh-CN" : "en");
}
