import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Hook/Home";
import Usestate from "./Hook/UseState";
import UseEffect from "./Hook/UseEffect";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Usestate" element={<Usestate />} />
                    <Route path="/UseEffect" element={<UseEffect />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
