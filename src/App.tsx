import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { usePageEffects } from "@/hooks/usePageEffects";
import Home from "@/pages/Home";
import Hizmetler from "@/pages/Hizmetler";
import Portfolyo from "@/pages/Portfolyo";
import Iletisim from "@/pages/Iletisim";

function Layout() {
  usePageEffects();
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
        <Route path="/portfolyo" element={<Portfolyo />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Route>
    </Routes>
  );
}
