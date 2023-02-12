function maxValue(newarr) {
    let a = newarr.sort().reverse();
    let b = Math.max(...a);
    return { a, b };
}
console.log(maxValue([2, 3, 5, 6, 7]));

// function maxValue(newArr) {
//     // 배열을 파라미터로 전달 받음
//     const maxValue = Math.max(...newArr);
//     // 내림차순
//     const sortArr = newArr.sort().reverse();
//     return { maxValue, sortArr };
// }

// console.log(maxValue([1, 2, 3, 4, 5]));
