let timerBox = document.getElementById("timer-txt-box");
let msgBox = document.getElementById("msg-box");
let timerContainer = document.getElementById("timer-box");
let btn = document.getElementById("btn");
let colors = ['purple', 'red', 'yellow', 'green', 'blue'];


btn.addEventListener("click", function (event) {
    toggleDisplay(btn);
    toggleDisplay(timerContainer);
    init()
        .then((time) => {
            setTimeout(msgBox.classList.toggle("hide"), time * 1000);
            return new Promise((resolve) => resolve("End of chaining"));
        })
        .catch((err) => console.log(err));
});

function toggleDisplay(ele) {
    ele.classList.toggle("hide");
}

function toggleMarginTop(ele){
    ele.classList.toggle(".mgn-top-10");
}

// init();

async function init() {
    let promises = [];
    let tick = 0;
    for (let i = 10; i >= 1; i--) {
        promises.push(new Promise(
            (resolve) => {
                setTimeout(() => {
                    console.log(i);
                    timerBox.innerHTML = i;
                    // console.log(i % colors.length);
                    assignColor(i % colors.length, timerContainer);
                    // timerContainer.classList.add(colors[i % colors.length]);
                    resolve();
                }, (++tick) * 1000);
            }
        ));
    }
    await Promise.all(promises);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

function assignColor(idx, timerContainer) {
    colors.forEach(c => timerContainer.classList.remove(c));
    timerContainer.classList.add(colors[idx]);
}
