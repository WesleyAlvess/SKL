// Icons Lucinda
import {
  BookOpenCheck,
  Target,
  Lightbulb,
  FileText,
  ChevronDown,
} from "lucide-react";

const Menus = [
  {
    title: "Sobre a SLK",
    icon: ChevronDown,
    subMenu: [
      {
        title: "Quem Somos",
        link: "/sobre/quem-somos",
        icon: BookOpenCheck,
      },
      {
        title: "Propósito",
        link: "/sobre/proposito",
        icon: Target,
      },
      {
        title: "Soluções",
        link: "/sobre/solucoes",
        icon: Lightbulb,
      },
    ],
  },
  {
    title: "Projetos",
    icon: ChevronDown,
    subMenu: [
      {
        title: "+Visão Amapá",
        link: "/projetos/visao-amapa",
        icon: FileText,
      },
      {
        title: "+Saúde Vascular Amapá",
        link: "/projetos/saude-vascular-amapa",
        icon: FileText,
      },
      {
        title: "Pira + Visão",
        link: "/projetos/pira-mais-visao",
        icon: FileText,
      },
      {
        title: "Vida Vascular + Visão Limeira",
        link: "/projetos/vida-vascular-visao-limeira",
        icon: FileText,
      },
    ],
  },
  {
    title: "Contato",
    link: "/contato",
    icon: null,
  },
];

export default Menus;
