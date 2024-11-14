import { Route, Routes } from "react-router-dom";

// Components
import Navbar from "../components/Navbar/Navbar";

// Páginas
import Home from "../pages/Home/Home";
import QuemSomos from "../pages/Sobre/QuemSomos/QuemSomos";
import Proposito from "../pages/Sobre/Proposito/Proposito";
import Solucoes from "../pages/Sobre/Solucoes/Solucoes";
import VisaoAmapa from "../pages/Projetos/VisaoAmapa/VisaoAmapa";
import PiraMaisVisao from "../pages/Projetos/PiraMaisVisao/PiraMaisVisao";
import SaudeVascularAmapa from "../pages/Projetos/SaudeVascularAmapa/Saudevascular";
import VidaVascularVisaoLimeira from "../pages/Projetos/VidaVascularVisaoLimeira/vidaVascularAmapa";
import Contato from "../pages/Contato/Contato";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre/quem-somos" element={<QuemSomos />} />
        <Route path="/sobre/proposito" element={<Proposito />} />
        <Route path="/sobre/solucoes" element={<Solucoes />} />
        <Route path="/projetos/visao-amapa" element={<VisaoAmapa />} />
        <Route path="/projetos/pira-mais-visao" element={<PiraMaisVisao />} />
        <Route path="/projetos/saude-vascular-amapa" element={<SaudeVascularAmapa />} />
        <Route path="/projetos/vida-vascular-visao-limeira" element={<VidaVascularVisaoLimeira />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
};

export default AppRouter;
