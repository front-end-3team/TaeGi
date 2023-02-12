// 1번.
function max_value() {
    const a = [4, 5, 9, 2, 1, 3];
    a.sort();
    a.reverse();

    const max1 = Math.max(...a);
    const min1 = Math.min(...a);

    console.log(`maxValue: ${max1}`);

    console.log(`minValue: ${min1}`);

    console.log(`arr = [${a}]`);
}
max_value();

// 질문 1. ...a 즉 전개연산자를 왜 써야하는가
// 2. 배열을 객체 형태로 전환하라는것이 무슨 말이냐
