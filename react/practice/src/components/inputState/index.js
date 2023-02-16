import { useState } from "react";

function StateInput() {
    const [id, SetId] = useState("");
    const [password, SetPassword] = useState("");

    const onChangeID = (el) => {
        SetId(el.target.value);
    };

    const onChangePassword = (el) => {
        SetPassword(el.target.value);
    };

    const onClickReset = () => {
        SetId("");
        SetPassword("");
    };
    return (
        <form>
            <input onChange={onChangeID} placeholder="ID" />
            <input onChange={onChangePassword} placeholder="PassWord" />
            <button onClick={onClickReset}>초기화</button>

            <div>id : {id}</div>
            <div>password : {password}</div>
        </form>
    );
}
export default StateInput;
