import styled from "styled-components";

function Login() {
    return (
        <LoginInput>
            <input type={"text"} placeholder="아이디" />
            <input type={"password"} placeholder="비밀번호" />
            <button>제출</button>
        </LoginInput>
    );
}
export default Login;

const LoginInput = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
