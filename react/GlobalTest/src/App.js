import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import Context from "./store/2_context";

function App() {
    return (
        <>
            <Context>
                <RouterProvider router={router} />
            </Context>
        </>
    );
}

//
export default App;
