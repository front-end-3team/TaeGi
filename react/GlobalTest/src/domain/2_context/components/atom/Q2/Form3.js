import { useContext } from "react";
import { list } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
    const { userList, setUserList } = useContext(list);

    const onReset = () => {
        setUserList([]);
    };

    return (
        <div>
            <h1>Q2Form3</h1>
            <button onClick={onReset}>RESET</button>
        </div>
    );
};
export default ContextQ2Form3;
