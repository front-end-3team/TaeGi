// import { useEffect, useState } from "react";

import { useEffect } from "react";

// function UseEffect() {
//     const [a, b] = useState(1);
//     useEffect(() => {
//         console.log(a + "번 뽑았다!");
//     });
//     return (
//         <>
//             <div>인형뽑기</div>
//             <button onClick={() => b(a + 1)}>뽑아</button>
//             <button onClick={() => b(a === 0)}>리셋</button>
//         </>
//     );
// }
// export default UseEffect;

function UseEffect() {
    useEffect(() => {
        console.log("dd");
    }, []);

    return (
        <>
            <div></div>
        </>
    );
}
export default UseEffect;
