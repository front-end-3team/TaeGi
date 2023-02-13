import { useState } from "react";
import styled from "styled-components";
import Modal from "../../modal/modal";

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [total, setTotal] = useState(false);

    const onChangeLogin = (el) => {
        setId(el.target.value);
    };
    const onChangePassword = (el) => {
        setPassword(el.target.value);
    };

    const onSubmit = (el) => {
        el.prevntDefault();
        if (id === "test@test.com" && password === "test1234") {
            setTotal(true);
        }
    };
    console.log(total);
    return (
        <LoginInput onClick={onSubmit}>
            <input
                type={"text"}
                placeholder="아이디"
                onChange={onChangeLogin}
            />
            <input
                type={"password"}
                placeholder="비밀번호"
                onChange={onChangePassword}
            />
            <button>로그인</button>
            {total === true ? <Modal /> : alert("로그인 실패!")}
        </LoginInput>
    );
}
export default Login;

const LoginInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
