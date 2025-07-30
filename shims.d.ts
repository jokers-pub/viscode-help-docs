declare module "*.joker" {
    import type { Component } from "@joker.front/core";

    const compnent: typeof Component;

    export default compnent;
}
interface ImportMeta {
    url: string;
    define: Record<string, any>;
}
