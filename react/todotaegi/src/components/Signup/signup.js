import styled from "styled-components";

function SignUp() {
    return (
        <SignUpInput>
            <input type={"text"} placeholder="아이디" />
            <input type={"password"} placeholder="비밀번호" />
            <input type={"password"} placeholder="비밀번호 확인" />
        </SignUpInput>
    );
}
export default SignUp;

const SignUpInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
