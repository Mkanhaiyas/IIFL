import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import WorkWithUs from "./pages/WorkWithUs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<ContactUs/>} />
        <Route path="/work_with_us" element={<WorkWithUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
