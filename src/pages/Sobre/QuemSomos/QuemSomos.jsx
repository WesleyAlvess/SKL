import React from "react";

// import imgSobre from "../../../assets/imgsobre.png";
// import cumene from "../../../assets/cumene.png";

import {
  ContainerSobre,
  SectionBanner,
  SectionVideo,
  ContainerVideo,
  Title,
  SectionImgAldeia,
  SectionStatistics,
  ContainerNumeros,
  ContainerInfo,
} from "./QuemSomosStyles";

const QuemSomos = () => {
  return (
    <ContainerSobre>
      <SectionBanner>
        <h3>Quem Somos</h3>
        <p>
          Oferecemos cuidado à saúde de forma humana, acessível e transparente.
        </p>
        <img src={imgSobre} alt="Imagens dos pacientes" />
        <span>
          A Saúde Link emergiu de uma extensa pesquisa dedicada a analisar
          projetos bem-sucedidos em nações altamente desenvolvidas, como
          Inglaterra, Austrália e Nova Zelândia.
        </span>
      </SectionBanner>
      <SectionVideo>
        <Title>Tecnologia e Experiência a Serviço da Saúde Humanizada</Title>
        <ContainerVideo>
          <p>
            Incorporando tecnologia de ponta e uma proposta inovadora adaptada à
            realidade brasileira, a empresa entra no mercado com uma equipe de
            profissionais experientes, que ao longo dos anos, acumularam vasta
            experiência no atendimento de saúde a grandes populações, sempre com
            uma abordagem resolutiva, integral e humanizada.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6DLL5V_2th8?si=hYeyWBuxTAxGF8HN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </ContainerVideo>
      </SectionVideo>
      <SectionImgAldeia>
        <div>
          <img src={cumene} alt="" />
          <span>Unidade +Visão na Aldeia Kumenê - Oiapoque - AP</span>
        </div>
        <p>
          Operando com um modelo de Gestão Compartilhada, a equipe da Saúde Link
          desenvolveu um sistema exclusivo de atendimento, cuidadosamente
          adaptado à complexa realidade brasileira. Com sua vasta extensão
          territorial, o Brasil apresenta tanto regiões densamente povoadas
          quanto áreas com baixos índices populacionais, trazendo desafios
          únicos para a assistência à saúde.
        </p>
      </SectionImgAldeia>
      <SectionStatistics>
        <div>
          <h3>Números Relevantes</h3>
          <p>
            A estratégia única da empresa possibilita, em um curto período,
            atender de maneira eficaz e segura a um considerável número de
            usuários, mantendo um compromisso inabalável com um de seus valores
            mais essenciais: o extremo respeito e cuidado dedicado a cada ser
            humano atendido.
          </p>
        </div>
      </SectionStatistics>
      <ContainerNumeros>
        <div>
          <span>+200mil</span>
          <p>Exames</p>
        </div>
        <div>
          <span>+80mil</span>
          <p>Atendimentos</p>
        </div>
        <div>
          <span>+50mil</span>
          <p>Procedimentos</p>
        </div>
      </ContainerNumeros>
      <ContainerInfo>
        <div>
          <p>
            Já ultrapassamos a marca de 200.000 exames, 80.000 atendimentos e
            50.000 procedimentos, sem mencionar a entrega de inúmeros óculos.
            Nossa abordagem envolve a oferta de soluções de saúde por meio de um
            modelo inovador que combina tecnologia e responsabilidade social.
            Nossas unidades, tanto modulares quanto fixas, são centros completos
            onde conduzimos consultas, exames e cirurgias em diversas
            especialidades médicas.
          </p>
        </div>
      </ContainerInfo>
    </ContainerSobre>
  );
};

export default QuemSomos;
