import Layout from "../layout.joker";
import { getLang } from "../utils";
export function getRouters() {
    let isZhCN = getLang() === "zh-CN";

    return [
        //#region  门户
        {
            path: "/portal",
            component: Layout,
            children: [
                {
                    path: "/portal",
                    redirect: "/portal/introduction"
                },
                {
                    path: "introduction",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/introduction.joker")
                        : () => import("../../pages/en/portal/introduction.joker")
                },
                {
                    path: "register",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/register.joker")
                        : () => import("../../pages/en/portal/register.joker")
                },
                {
                    path: "basic",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/basic.joker")
                        : () => import("../../pages/en/portal/basic.joker")
                },
                {
                    path: "create-org",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/create-org.joker")
                        : () => import("../../pages/en/portal/create-org.joker")
                },
                {
                    path: "create-rep",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/create-rep.joker")
                        : () => import("../../pages/en/portal/create-rep.joker")
                },
                {
                    path: "rep-info",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-info.joker")
                        : () => import("../../pages/en/portal/rep-info.joker")
                },
                {
                    path: "org-info",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/org-info.joker")
                        : () => import("../../pages/en/portal/org-info.joker")
                },
                {
                    path: "org-member",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/org-member.joker")
                        : () => import("../../pages/en/portal/org-member.joker")
                },
                {
                    path: "org-transfer",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/org-transfer.joker")
                        : () => import("../../pages/en/portal/org-transfer.joker")
                },
                {
                    path: "rep-kind",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-kind.joker")
                        : () => import("../../pages/en/portal/rep-kind.joker")
                },
                {
                    path: "rep-issues",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-issues.joker")
                        : () => import("../../pages/en/portal/rep-issues.joker")
                },
                {
                    path: "rep-follow",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-follow.joker")
                        : () => import("../../pages/en/portal/rep-follow.joker")
                },
                {
                    path: "rep-base",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-base.joker")
                        : () => import("../../pages/en/portal/rep-base.joker")
                },
                {
                    path: "rep-clone",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-clone.joker")
                        : () => import("../../pages/en/portal/rep-clone.joker")
                },
                {
                    path: "rep-version",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-version.joker")
                        : () => import("../../pages/en/portal/rep-version.joker")
                },
                {
                    path: "rep-transfer",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-transfer.joker")
                        : () => import("../../pages/en/portal/rep-transfer.joker")
                },
                {
                    path: "rep-delete",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-delete.joker")
                        : () => import("../../pages/en/portal/rep-delete.joker")
                },
                {
                    path: "rep-archive",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/rep-archive.joker")
                        : () => import("../../pages/en/portal/rep-archive.joker")
                },
                {
                    path: "personal-main",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/personal-main.joker")
                        : () => import("../../pages/en/portal/personal-main.joker")
                },
                {
                    path: "personal-info",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/personal-info.joker")
                        : () => import("../../pages/en/portal/personal-info.joker")
                },
                {
                    path: "personal-password",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/personal-password.joker")
                        : () => import("../../pages/en/portal/personal-password.joker")
                },
                {
                    path: "personal-message",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/personal-message.joker")
                        : () => import("../../pages/en/portal/personal-message.joker")
                },
                {
                    path: "personal-my-repository",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/personal-my-repository.joker")
                        : () => import("../../pages/en/portal/personal-my-repository.joker")
                },
                {
                    path: "personal-my-org",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/personal-my-org.joker")
                        : () => import("../../pages/en/portal/personal-my-org.joker")
                },
                {
                    path: "personal-my-issues",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/portal/personal-my-issues.joker")
                        : () => import("../../pages/en/portal/personal-my-issues.joker")
                }
            ]
        },
        //工作台
        {
            path: "/workbench",
            component: Layout,
            children: [
                {
                    path: "/workbench",
                    redirect: "/workbench/basic"
                },
                {
                    path: "basic",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/basic.joker")
                        : () => import("../../pages/en/workbench/basic.joker")
                },
                {
                    path: "front-end",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/front-end.joker")
                        : () => import("../../pages/en/workbench/front-end.joker")
                },
                {
                    path: "back-end",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/back-end.joker")
                        : () => import("../../pages/en/workbench/back-end.joker")
                },
                {
                    path: "install-package",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/install-package.joker")
                        : () => import("../../pages/en/workbench/install-package.joker")
                },
                {
                    path: "check-code-version",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/check-code-version.joker")
                        : () => import("../../pages/en/workbench/check-code-version.joker")
                },
                {
                    path: "/workbench/component",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/component.joker")
                        : () => import("../../pages/en/workbench/component.joker")
                },
                {
                    path: "/workbench/component-data",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/component-data.joker")
                        : () => import("../../pages/en/workbench/component-data.joker")
                },
                {
                    path: "/workbench/component-life",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/component-life.joker")
                        : () => import("../../pages/en/workbench/component-life.joker")
                },
                {
                    path: "/workbench/component-method",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/component-method.joker")
                        : () => import("../../pages/en/workbench/component-method.joker")
                },
                {
                    path: "/workbench/component-layout",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/component-layout.joker")
                        : () => import("../../pages/en/workbench/component-layout.joker")
                },
                {
                    path: "/workbench/component-base",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/component-base.joker")
                        : () => import("../../pages/en/workbench/component-base.joker")
                },
                {
                    path: "/workbench/component-section",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/component-section.joker")
                        : () => import("../../pages/en/workbench/component-section.joker")
                },
                {
                    path: "/workbench/component-event",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/component-event.joker")
                        : () => import("../../pages/en/workbench/component-event.joker")
                },
                {
                    path: "/workbench/requester",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/requester.joker")
                        : () => import("../../pages/en/workbench/requester.joker")
                },
                {
                    path: "/workbench/page",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/page.joker")
                        : () => import("../../pages/en/workbench/page.joker")
                },
                {
                    path: "/workbench/router",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/router.joker")
                        : () => import("../../pages/en/workbench/router.joker")
                },
                {
                    path: "/workbench/style",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/style.joker")
                        : () => import("../../pages/en/workbench/style.joker")
                },
                {
                    path: "/workbench/globalData",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/globalData.joker")
                        : () => import("../../pages/en/workbench/globalData.joker")
                },
                {
                    path: "/workbench/server-db",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/server-db.joker")
                        : () => import("../../pages/en/workbench/server-db.joker")
                },
                {
                    path: "/workbench/server-controller",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/server-controller.joker")
                        : () => import("../../pages/en/workbench/server-controller.joker")
                },
                {
                    path: "/workbench/server-cache",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/server-cache.joker")
                        : () => import("../../pages/en/workbench/server-cache.joker")
                },
                {
                    path: "/workbench/package-release",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/package-release.joker")
                        : () => import("../../pages/en/workbench/package-release.joker")
                },
                {
                    path: "/workbench/workflow",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/workflow.joker")
                        : () => import("../../pages/en/workbench/workflow.joker")
                },
                {
                    path: "/workbench/env",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/env.joker")
                        : () => import("../../pages/en/workbench/env.joker")
                },
                {
                    path: "/workbench/global",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/global.joker")
                        : () => import("../../pages/en/workbench/global.joker")
                },
                {
                    path: "/workbench/debugger",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/debugger.joker")
                        : () => import("../../pages/en/workbench/debugger.joker")
                },
                {
                    path: "/workbench/generate",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/generate.joker")
                        : () => import("../../pages/en/workbench/generate.joker")
                },
                {
                    path: "/workbench/db-option",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/db-option.joker")
                        : () => import("../../pages/en/workbench/db-option.joker")
                },
                {
                    path: "/workbench/property",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/property.joker")
                        : () => import("../../pages/en/workbench/property.joker")
                },
                {
                    path: "/workbench/font-icon",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/font-icon.joker")
                        : () => import("../../pages/en/workbench/font-icon.joker")
                },
                {
                    path: "/workbench/workflow-return-type",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/workflow-return-type.joker")
                        : () => import("../../pages/en/workbench/workflow-return-type.joker")
                },
                {
                    path: "/workbench/event-bus",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/event-bus.joker")
                        : () => import("../../pages/en/workbench/event-bus.joker")
                },
                {
                    path: "/workbench/deploy",
                    component: isZhCN
                        ? () => import("../../pages/zh-CN/workbench/deploy.joker")
                        : () => import("../../pages/en/workbench/deploy.joker")
                }
            ]
        }
    ];
}
