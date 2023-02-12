function cu(item, count) {
    let menu = {
        야채곱창: 5,
        바나나우유: 10,
        삼각김밥: 15,
        도시락: 10,
        샌드위치: 10,
    };
    let 재고 = menu[item];
    if (count === 재고) return console.log("동의");
    if (!재고) return "없음";
    if (count !== 재고) return "비동의";
}

cu("바나나우유", 10);
