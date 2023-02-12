import { BrowserRouter,Routes, Route } from "react-router-dom";
import Doctors from './components/Doctors/doctors';
import Another from "./components/Another/another";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Doctors/>}/>
        <Route path="/Another" element={<Another/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
