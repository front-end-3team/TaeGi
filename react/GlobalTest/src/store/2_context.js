import { createContext, useState } from "react";

export const view = createContext();
// export const view = createContext();
// export const setView = createContext();

// function Context({ children }) {
//     const [isModalOpen, setIsModalOpen] = useState(true);
//     return (
//         <>
//             <view.Provider value={isModalOpen}>
//                 <setView.Provider value={setIsModalOpen}>
//                     {children}
//                 </setView.Provider>
//             </view.Provider>
//         </>
//     );
// }
// export default Context;
