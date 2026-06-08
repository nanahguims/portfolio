import React from "react";
import Accordion from "@/components/accordion";

const accordionItems = [
  {
    title: "Quem sou eu?",
    content:
      "Bom, para começar nada mais justo que contar um pouco sobre minhas raízes hehe, eu nasci no litoral de São Paulo, conhecida por ser uma das cidades mais antigas do Brasil: Itanhaém, apesar deste fato, vivi apenas 2 anos na cidade natal, sendo assim, fui criada mesmo no interior de São Paulo. \n \n Durante minha infância, por ser do interior, não tive muito contato com tecnologia no geral, meu primeiro celular foi um tijolão rosa que ganhei aos 11 anos, usava para ouvir música e jogar aqueles joguinhos que vinham extremamente nostálgicos. Apesar disso, sempre quando podia cutucava a internet e os softwares, dando um jeito de baixar as músicas que queria, algo que inclusive faço até hoje rsrsrs, ainda não me adaptei aos serviços de streaming de música. \n \n Bom o tempo passou e de uma forma bem inesperada vim parar em Santa Catarina, o que além de ser marcante foi extremamente importante pro meu desenvolvimento. ",
  },
  {
    title: "Trabalhar com Tecnologia, Sério?",
    content:
      "Assim como toda criança sempre tive muitos sonhos, gostava bastante de jogos, desenhos e tudo que envolvia história, me fascinava ver o talento dos professores em ensinar e dos grandes músicos de rock, mas nunca tive um desejo sólido por algo em específico, assuntos relacionados a profissão sempre me deixavam ansiosa. Isso mudou quando eu conheci um projeto aos 13 anos de idade, o Technovation Girls, projeto que estimula o interesse de garotas pelo ramo tecnológico, ele combate a falta de representatividade feminina nesse setor, predominantemente composto por homens. Foi nesse maravilhoso projeto que vi a possibilidade de ingressar na carreira tecnológica. ",
  },
  {
    title: "Oportunidade de ouro",
    content:
      "Após participar algumas vezes do Technovation, recebi o link sobre uma bolsa de estudos (Técnico em Desenvolvimento de sistemas), onde finalmente podia pôr em prática o meu desenvolvimento no ramo tecnológico, era uma grande oportunidade de mudar a minha vida, tive que fazer alguns sacrifícios já que o local do curso era um pouco longe, foi a primeira vez que ouvi a palavra 'resiliência', era sobre o que eu precisava ter para conseguir me adaptar à nova rotina, mas fui um pouco longe.",
  },
  {
    title: "Início da Carreira",
    content:
      "Após completar o primeiro semestre do curso de desenvolvimento de sistemas, consegui estagiar na empresa que me concedeu essa bolsa, um desafio ainda maior, trabalhar - ir pro curso - ir para escola. Foi de fato complicado, mas apesar disso, pude ter uma grande experiência, de pôr em prática aquilo que aprendi e depois de um tempo tive que tomar uma decisão. ",
  },
  {
    title: "A decisão",
    content:
      "Meu maior desejo era me efetivar, e consegui, mas tive que fazer um sacrifício: trancar o meu curso técnico, já que eu passaria a ter que trabalhar 8 horas por dia e ainda tinha que terminar o ensino médio, mas foi uma ótima decisão, a prática de trabalhar no dia a dia, os desafios e os aprendizados eram constantes, a experiência que eu tanto queria. ",
  },
  {
    title: "O que eu faço agora?",
    content:
      "Depois de terminar o ensino médio, pensei comigo mesmo que seria interessante começar uma graduação e me especializar, abrir caminhos e novas jornadas, quero poder conhecer diferentes tecnologias, métodos, ambientes, e poder fazer parte de um time mais uma vez. ",
  },
];

export function History() {
  return (
    <>
      <Accordion items={accordionItems} />
    </>
  );
}
