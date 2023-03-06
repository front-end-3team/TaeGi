import { useContext, useRef } from "react";
import { list } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {
    const { userList, setUserList } = useContext(list);
    const name = useRef();
    const nickname = useRef();
    const onClickAdd = (e) => {
        e.preventDefault();
        setUserList([
            ...userList,
            {
                id: userList.length + 1,
                name: name.current.value,
                nickname: nickname.current.value,
            },
        ]);
        console.log(userList);
    };

    return (
        <form onSubmit={onClickAdd}>
            <h1>Q2Form</h1>
            <input placeholder="name" ref={name} />
            <input placeholder="nick-name" ref={nickname} />
            <button>추가</button>
            <ContextQ2Form2 />
        </form>
    );
};
export default ContextQ2Form;
