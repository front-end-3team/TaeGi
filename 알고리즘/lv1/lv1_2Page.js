// 가운데 글자 가져오기
function solution(s) {
    let a = s.length;
    let b;
    if (a % 2 === 1) return s[Math.floor(a / 2)];
    if (a % 2 === 0) return s[Math.floor(a / 2) - 1] + s[Math.floor(a / 2)];
}

//수박수박수박수박수박수?
function solution(n) {
    let b = "";
    for (let i = 1; i <= n; i++) {
        i % 2 === 1 ? (b += "수") : (b += "박");
    }
    return b;
}

//내적
function solution(a, b) {
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i] * b[i];
    }
    return total;
}

//문자열 내림차순으로 배치하기
function solution(s) {
    let k = s.split("").sort().reverse();
    let a = k
        .filter((k) => {
            return k.charCodeAt() > 64 && k.charCodeAt() < 91;
        })
        .join("");
    let b = k
        .filter((k) => {
            return k.charCodeAt() > 96 && k.charCodeAt() < 123;
        })
        .join("");
    return b + a;
}

//약수의 개수와 덧셈
function solution(left, right) {
    let total = 0;
    let count = 0;
    for (let a = left; a <= right; a++) {
        for (let b = 1; b <= a; b++) {
            if (a % b === 0) {
                count++;
            }
        }
        if (count % 2 === 0) {
            total += a;
        } else {
            total -= a;
        }
        count = 0;
    }
    return total;
}

//문자열 다루기 기본
function solution(s) {
    if (s.length !== 4 && s.length != 6) return false;
    let a = s
        .split("")
        .filter((el) => el.charCodeAt() > 47 && el.charCodeAt() < 58);
    console.log(a);
    if (a.length === s.length) return true;
    return false;
}

//부족한 금액 계산하기
function solution(price, money, count) {
    let total = 0;
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    if (money - total >= 0) return 0;
    return total - money;
}

//행렬의 덧셈
function solution(arr1, arr2) {
    let k = [];
    for (let a = 0; a < arr1.length; a++) {
        let n = [];
        for (let b = 0; b < arr1[a].length; b++) {
            n.push(arr1[a][b] + arr2[a][b]);
        }
        k.push(n);
    }
    return k;
}

//최대공약수와 최소공배수
function solution(n, m) {
    //최대공약수
    let small = [];
    let big = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            small.push(i);
            small.reverse();
        }
    }
    for (let j = 1; j <= m; j++) {
        if (m % j === 0) {
            big.push(j);
            big.reverse();
        }
    }
    let vsmall = 0;
    let vbig = 0;
    if (n < m) {
        vsmall = small;
        vbig = big;
    } else {
        vsmall = big;
        vbig = small;
    }
    for (let a of vsmall) {
        for (let b of vbig) {
            if (b === a) return a;
        }
    }
    //최소공배수
}
console.log(solution(2, 5));

//같은 숫자는 싫어
function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
