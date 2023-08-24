import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import PaginaPadrao from "./pages/PaginaPadrao";
import NovaCategoria from "./pages/NovaCategoria";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/novovideo" element={<NovoVideo />} />
          <Route path="/novacategoria" element={<NovaCategoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
