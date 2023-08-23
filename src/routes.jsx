import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novovideo" element={<NovoVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
