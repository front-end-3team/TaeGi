// 하샤드 수
function solution(x) {
    let total = 0;
    let a = String(x);
    for (let i = 0; i < a.length; i++) {
        total += Number(a[i]);
    }
    if (x % total === 0) {
        return true;
    }
    return false;
}

// 나머지가 1이 되는 수 찾기
function solution(n) {
    for (let i = 1; i < n; i++) {
        if (n % i === 1) return i;
    }
}

// 두 정수 사이의 합
function solution(a, b) {
    let sum1 = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            sum1 += i;
        }
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum1 += i;
        }
    } else {
        sum1 = a;
    }
    return sum1;
}

// 콜라츠 추측
function solution(num) {
    let count = 0;
    if (num === 1) return 0;
    for (let i = 0; i < 500; i++) {
        if (num % 2 === 0) {
            count++;
            num = num / 2;
            if (count === 500) return -1;
            if (num === 1) return count;
        }
        if (num % 2 === 1) {
            count++;
            num = num * 3 + 1;
            if (count === 500) return -1;
            if (num === 1) return count;
        }
    }
}

// 서울에서 김서방 찾기
function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i].includes("Kim")) return `김서방은 ${i}에 있다`;
    }
}

// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let answer = [];
    let count = 0;
    for (let a of arr) {
        if (a % divisor === 0) {
            answer.push(a);
            count++;
        }
    }
    if (count === 0) return [-1];
    answer.sort((a, b) => a - b);
    return answer;
}

// 핸드폰 번호 가리기
function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 제일 작은 수 제거하기
function solution(arr) {
    let answer = [];
    let a = Math.min(...arr);
    let b = arr.filter((el) => {
        return el !== a;
    });
    if (b.length === 0) return [-1];
    return b;
}

// 음양 더하기
function solution(absolutes, signs) {
    let total = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            total += absolutes[i];
        } else {
            total -= absolutes[i];
        }
    }
    return total;
}

// 없는 숫자 더하기
function solution(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return 45 - total;
}
