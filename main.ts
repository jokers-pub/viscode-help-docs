import App from "./app.joker";
import { Router, WebHistory } from "@joker.front/router";
import DemoRow from "./common/components/demo-row.joker";
import DemoContainer from "./common/components/demo-container.joker";
import { registerGlobalComponent } from "@joker.front/core";
import "@joker.front/ui";
import "@joker.front/ui/index.css";
import { getRouters } from "./common/datas/router";
import { getLang } from "./common/utils";
import Index from "./pages/index.joker";
registerGlobalComponent({
    DemoRow: DemoRow,
    DemoContainer
});

let router = new Router({
    history: import.meta.define.routerType === "html5" ? new WebHistory() : undefined,
    base: getLang() === "zh-CN" ? "" : "/en",
    routes: [
        {
            path: "/",
            component: Index
        },

        ...getRouters()
    ]
});

router.errorCallbacks.add(() => {
    router.push("/");
});

new App().$mount(document.getElementById("app"));
