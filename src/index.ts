/*
 * @Author: BATU1579
 * @CreateDate: 2022-05-24 16:58:03
 * @LastEditor: BATU1579
 * @LastTime: 2022-09-23 17:45:32
 * @FilePath: \\src\\index.ts
 * @Description: 脚本入口
 */
import {} from "./global";
import {init} from "./lib/init";
import {initFloatyWindow, floatyWindow} from "./lib/floatyWindow"
import {Thread} from "threads";
import {sendLog} from "./lib/logger";
import {makeLogger} from "ts-loader/dist/logger";

init();
initFloatyWindow();

const settings = storages.create("settings");

let timeToSleep = settings.get("interval", '10');

let jobThread: Thread;

floatyWindow.start.click(() => {
    if (jobThread && jobThread.isAlive()) {
        jobThread.interrupt();
    }
    jobThread = threads.start(main);
});

setInterval(() => {
}, 1000);
ui.run(() => {
    floatyWindow.setAdjustEnabled(true);
    floatyWindow.exitOnClose();
});

ui.run(() => {
    floatyWindow.interval.setText("间隔：" + timeToSleep + "s");
});

floatyWindow.setInterval.click(() => {
    if (typeof timeToSleep == "string") {
        rawInput("请输入时间间隔：", timeToSleep, (time) => {
            if (time && parseInt(time)) {
                timeToSleep = time;
                ui.run(() => {
                    floatyWindow.interval.setText("间隔：" + timeToSleep + "s");
                });
                settings.put("interval", timeToSleep);
            }
        })
    }
});

function main() {
    let target;
    let keywords = ["全新", "未拆"]
    var imageViews = className("ImageView").untilFind();
    imageViews.forEach((imageView) => {
        const goodsDesc = imageView.contentDescription?.toString();
        if (!goodsDesc || goodsDesc.indexOf("¥")<0)
            return;

        console.log('====================================================')
    })
}