import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

function Color() {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    // useEffect(() => {
    //     setActive(false);
    // }, []);

    const color = useRef();
    const onClickblue = () => {
        color.current.style.color = "blue";
        setCount(count - 1);
    };
    const onClickred = () => {
        color.current.style.color = "red";
        setCount(count + 1);
    };
    const Reset = () => {
        setCount(0);
    };

    if (count >= 10) {
        color.current.style.color = "green";
    }

    console.log(count);
    return (
        <>
            {active && (
                <Box>
                    <button onClick={onClickred}>red (+)</button>
                    <p ref={color}>{count}</p>
                    <button onClick={onClickblue}>blue (-)</button>
                    <button onClick={Reset}>Reset</button>
                </Box>
            )}
            <button onClick={() => setActive((prev) => !prev)}>보여주기</button>
        </>
    );
}
const Box = styled.div`
    background-color: beige;
`;

export default Color;
