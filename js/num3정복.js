function solution(arr, num) {
    let a = arr.map((el) => el + 10);
    let b = a.filter((el) => el !== num);

    if (a.includes(num)) return b;

    return "값이 없습니다.";
}
console.log(solution([1, 2, 3, 4, 5], 11));
