import { useEffect, useRef, useState } from "react";

function Q3components({ count, setCount }) {
    const countRef = useRef(0);

    useEffect(() => {
        countRef.current = setInterval(() => {
            setCount((prev) => prev + 2);
            console.log(count);
        }, 2000);
        return () => {
            clearInterval(countRef.current);
            setCount(0);
        };
    }, []);

    return <div>🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
