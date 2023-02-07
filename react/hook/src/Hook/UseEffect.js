import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function UseEffect() {
    let a = 0;
    const [inputValue, setInputValue] = useState("");

    const onPush = (e) => {
        // console.log(e.target.value);
        a = e.target.value;
    };

    const onSave = (e) => {
        e.preventDefault();
        setInputValue(a);
        console.log(a);
    };
    const onReset = (e) => {
        e.preventDefault();
        console.log("초기화");
        setInputValue("");
    };

    return (
        <>
            <div>
                <h2>Modal</h2>
                <Link to="/Modal">Modal</Link>창 으로 이동
                <div>------------------------------------------</div>
            </div>
            <div>
                <h2>추가된 내용을 수정할 수 있게 변경하시오.</h2>
                <form>
                    <Input type={"Text"} onChange={onPush} />
                    <button onClick={onSave}>저장</button>
                    <button onClick={onReset}>초기화</button>
                </form>
                <ul>
                    <li>Li</li>
                    <li>{inputValue}</li>
                </ul>
            </div>
        </>
    );
}
const Input = styled.input`
    color: blue;
`;
export default UseEffect;
