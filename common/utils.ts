export function getLang() {
    let lang = "";

    return lang || (location.pathname.startsWith("/en") ? "en" : "zh-CN");
}
