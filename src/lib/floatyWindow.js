
// export const floatyWindow = floaty.window(
//     <vertical gravity="left">
//         <text id="interval">间隔：0s</text>
//         <button id="start" text="开始"></button>
//         <button id="setInterval" text="设定间隔"></button>
//     </vertical>
// );
export const floatyWindow = floaty.window(
    "    <vertical gravity='left'>\
    <text id='interval'>间隔：0s</text>\
    <button id='start' text='开始'></button>\
    <button id='setInterval' text='设定间隔'></button>\
    </vertical>"
    );
export function initFloatyWindow() {
    setInterval(() => { }, 1000);
    ui.run(() => {
        floatyWindow.setAdjustEnabled(true);
        floatyWindow.exitOnClose();
    });
}

// w.interval.on("touch_down", ()=>{
//     w.requestFocus();
//     // w.interval.requestFocus();
// });


// w.interval.on("touch_down", ()=>{
//     w.requestFocus();
// });
