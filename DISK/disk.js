const img = document.querySelectorAll(".list_btn_group>ul>li>img");
const btn_left = document.querySelector("button:first-child");
for (let aa of img) {
    img.addEventListener("click", () => {
        for (let dd of img) {
            dd.classList.remove("gg");
        }
        aa.classList.add("gg");
    });

    btn_left.addEventListener("click", (e) => {
        const nodes = [...e.target.paretElement, children];
        const index = nodes.indexOf(e.target);
        console.log(index);
    });
}

// const btn_left = document.getElementsByTagName("button")[0];
// const btn_right = document.getElementsByTagName("button")[1];
// // btn_left랑 btn_right 가져왔음
// for (let bb of img) {
//     btn_left.addEventListener("click", () => {
//         for (let bb of img) {
//             bb.classList.remove("gg");
//         }
//         bb.classList.add("gg");
//     });

// 요소정리
/*
1. .list_btn_group > ul
    - li태그의 자식요소로 이미지를 갖고
    - 해당 ul의 자식으로서 추가

2. .list_btn_group > button:first-child
    .list_btn_group > button:last-child
    p.s let currntPlayIndex = 0;
    
    저거 버튼 두개 가져오고, index 번호를 통해서 어떤걸 선택하는지만 알면 가능함,.

3. disk_inner
    선택된 노래가 바뀔 때마다 디스크 내부의 원은 바뀐다.

4. main
    선택된 노래가 바뀔 때마다 배경화면이 바뀐다
    선택된 노래가 실행되면 앨범 이미지로 바뀐다
    p.s let playStatus = 0(false);

5. .disk
    애니메이션을 추가해야할 disk 태그

6. .play_btn_group > button:first-child
    .play_btn_group > button:last-child

   * play 버튼이 눌러졌을 때 배경 화면이 그라데이션에서
    앨범 이미지로 변경 및 디스크 회전

   * 중지 버튼이 눌러지면 디스크 회전 중지 배경 화면
    그라데이션으로

7. 생성된 ul의 li의 이미지태그를 가지고올 것입니다.

  * 현재 선택된 노래의 focus
    흰색 테두리 + 크기 커짐
    + 이미지 눌렀을 때도 이동 가능
*/

// const musicListData = [
//     {
//         src: "../assets/img/iu_0.jpg",
//         color: ["#0272a4", "#f6a564"],
//     },
//     {
//         src: "../assets/img/iu_1.jpg",
//         color: ["#b6bfc8", "#36595b"],
//     },
//     {
//         src: "../assets/img/iu_2.jpg",
//         color: ["#e58e82", "#6f569f"],
//     },
// ];
