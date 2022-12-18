// 2번
let err = {
    1: () => {
        console.log("전산표와 일치하지 않습니다");
    },

    2: () => {
        console.log("품목 없음");
    },
};

function cu(menu, num) {
    let item = { 야채곱창: 5, 바나나우유: 10, 삼각김밥: 15, 도시락: 10, 샌드위치: 10 };
    let select = item[menu];
    console.log(select);
    console.log(item);
    if (num === select) return console.log("일치");
    if (!select) return err[2]();
    if (num !== select) return err[1]();
}

cu("바나나우유", 10);

// 질문
// 걍 마지막꺼 어케하는지
