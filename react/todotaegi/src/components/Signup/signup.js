import styled from "styled-components";

function SignUp() {
    return (
        <SignUpInput>
            <input type={"text"} placeholder="아이디" />
            <input type={"password"} placeholder="비밀번호" />
            <input type={"password"} placeholder="비밀번호 확인" />
            <button>제출</button>
        </SignUpInput>
    );
}
export default SignUp;

const SignUpInput = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
