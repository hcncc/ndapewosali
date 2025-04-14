import { speakWonder } from "./speak.js";

const text = `À mulher que ilumina cada ambiente com sua presença — não apenas
            pela beleza radiante que cativa, mas pela inteligência brilhante que
            inspira. Seu coração dedicado e sua mente perspicaz transformam
            desafios em conquistas, e seu esforço incansável é a prova de que
            grandeza e humildade podem caminhar juntas. Cada detalhe em você
            reflete perfeição, mesmo que isso soe a exagero ou mera cafonice: a
            sabedoria que compartilhamos durante aquele curto espaço de tempo, a
            curiosidade que nunca se apaga e a generosidade que toca todos ao
            seu redor. É um privilégio admirar alguém que une graça, força e
            conhecimento de forma tão singular. Isso é o que ele pensa sobre ti, Jubília. Eu só não sei se exagerou.`;

const readForMe = window.document.getElementById("readForMe");
readForMe.addEventListener("click", () => {
  readForMe.innerHTML = "fazendo leitura...";
  speakWonder(text);
  readForMe.innerHTML = "Leia por mim";
});
