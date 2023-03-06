import { createContext, useState } from "react";

export const list = createContext();
export const viewState = createContext();

function AllContext({ children }) {
    const [userList, setUserList] = useState([
        { id: 1, name: "홍길동", nickname: "히히" },
    ]);
    const [stateSubmit, setStateSubmit] = useState(false);

    return (
        <>
            <list.Provider value={{ userList, setUserList }}>
                <viewState.Provider value={{ stateSubmit, setStateSubmit }}>
                    {children}
                </viewState.Provider>
            </list.Provider>
        </>
    );
}
export default AllContext;
