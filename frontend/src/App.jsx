import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Steps from "./components/Steps";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/steps" element={<Steps/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;