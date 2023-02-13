import { useState } from "react";
import styled from "styled-components";
import SignUp from "./Signup/signup";
import Login from "./Login/login";

function LoginIndex() {
    const [text, setText] = useState("Login");

    const onLogin = (el) => {
        setText(el.target.innerText);
    };

    return (
        <Box>
            <Header>
                <button onClick={onLogin}>Login</button>
                <button onClick={onLogin}>회원가입</button>
            </Header>
            {text === "Login" ? <Login /> : <SignUp />}
        </Box>
    );
}
export default LoginIndex;

const Box = styled.form`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
`;
