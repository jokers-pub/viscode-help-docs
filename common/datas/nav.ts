import { getLang } from "../utils";
export function getNavData() {
    if (getLang() === "zh-CN") {
        return [
            { title: "成长路线", path: "/" },
            { title: "门户帮助文档", path: "/portal" },
            { title: "工作台帮助文档", path: "/workbench" },
            { title: "帮助视频", target: "_blank", path: "https://www.douyin.com/video/7428491479921741068" },
            {
                title: "问题反馈",
                target: "_blank",
                path: "https://viscode.jokers.pub/repository/7dcbf0e6-c3e2-4390-b233-dc53a22e3c66/issues"
            },
            { title: "官网", class: "line", path: "https://www.jokers.pub", target: "_blank" },
            { title: "新闻", path: "https://viscode.jokers.pub/news", target: "_blank" },
            { title: "可视化平台", path: "https://viscode.jokers.pub", target: "_blank" }
        ];
    } else {
        return [
            { title: "Growth Path", path: "/" },
            { title: "Portal Docs", path: "/portal" },
            { title: "Workbench Docs", path: "/workbench" },
            { title: "Help Videos", target: "_blank", path: "https://www.douyin.com/video/7428491479921741068" },
            {
                title: "Feedback",
                target: "_blank",
                path: "https://viscode.jokers.pub/repository/7dcbf0e6-c3e2-4390-b233-dc53a22e3c66/issues"
            },
            { title: "Official Site", class: "line", path: "https://www.jokers.pub", target: "_blank" },
            { title: "News", path: "https://viscode.jokers.pub/news", target: "_blank" },
            { title: "Visual Platform", path: "https://viscode.jokers.pub", target: "_blank" }
        ];
    }
}
