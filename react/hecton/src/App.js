import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Doctors />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
