let timerBox = document.getElementById("timer-txt-box");
let msgBox = document.getElementById("msg-box");


async function init(){
    let tick = 0;
    for(let i=10;i>=1;i--){
        setTimeout(() => {
            console.log(tick);
            timerBox.innerHTML = i;
        }, (++tick) * 1000);
    }
    /* Hard-encoding the promise resolve time */
    return new Promise((resolve) => setTimeout(() => {
        resolve(1);
    }, 10000));
}

init()
.then((time) => {
    /* Display message */
    setTimeout(() => msgBox.classList.toggle("hide"), time * 1000);
    return new Promise((resolve) => resolve(1));
})
.catch((err) => console.log(err));
