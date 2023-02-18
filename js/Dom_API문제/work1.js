// 1번
const a = document.querySelector(".disp");
a.innerText = "kekeked4444k";

//2번
// function ck(e) {
//     e.style.color = "red";
//     e.style.backgroundColor = "blue";
// }

let tabs = document.querySelectorAll(".tab");
for (let tab of tabs) {
    tab.addEventListener("click", () => {
        for (let tab of tabs) {
            tab.classList.remove("active");
        }
        tab.classList.add("active");
        const activeText = tab.innerText;
        activeHidden(activeText);
    });
}

//3번
const tabList = document.querySelectorAll(".block");
function activeHidden(text) {
    for (let tab of tabList) {
        if (tab.innerHTML.includes(text)) {
            tab.style.visibility = "visible";
        } else {
            tab.style.visibility = "hidden";
        }
    }
}
