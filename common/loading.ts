import { Loading } from "@joker.front/ui";

let loadingTarget: any;
let loadingCount: number = 0;

export function showLoading() {
    loadingTarget = Loading({
        fullscreen: true
    });
}

export function hideLoading() {
    loadingTarget?.close();
}
