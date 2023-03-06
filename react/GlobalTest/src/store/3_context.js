import { createContext, useState } from "react";

export const list = createContext();

function AllContext({ children }) {
    const [userList, setUserList] = useState([
        { id: 1, name: "홍길동", nickname: "히히" },
    ]);

    return (
        <>
            <list.Provider value={{ userList, setUserList }}>
                {children}
            </list.Provider>
        </>
    );
}
export default AllContext;
