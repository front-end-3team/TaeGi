/* 

당신은 시간이 3초가 걸리는 비동기 통신을 사용하였습니다.
데이터는 아래와 같습니다.

그러나 당신은 해당 promise가 끝난 후 연달아서 실행해야하는
비동기 통신이 2개 더있습니다.

이를 promise로 구현하고자 하였더니 then의 콜백함수 사용이 깊어져
async await을 통해 구현하고자 합니다.

아래의 데이터를 async await으로 바꿔보세요
조건 promise에 실패한다면 console창에 정보를 불러오는데 실패하였습니다.
라는 문구가 로그 되어야합니다.
*/

// const promise1 = () =>
//     new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("비동기1");
//             resolve(1);
//         }, 3000);
//     });
function writeText(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(text);
        }, 1000);
    });
}

async function doit() {
    try {
        // console.log(foo); // 지정하지 않은 변수 출력
        console.log(await writeText("비동기1"));
        console.log(await writeText("비동기2"));
        console.log(await writeText("비동기3"));
    } catch (err) {
        console.log("정보를 불러오는데 실패하였습니다.");
    }
}
doit();
