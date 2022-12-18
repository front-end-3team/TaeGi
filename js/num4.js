function 홀짝(arr) {
    const arr1 = arr.filter((el) => el % 2 === 0);
    const arr2 = arr.filter((el) => el % 2 === 1);
    return [arr1.length, arr2.length];
}

console.log(홀짝([1, 2, 3, 4, 5]));
