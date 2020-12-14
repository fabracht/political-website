import React, { useEffect } from "react";
import { GApageView } from "../";
import image1 from "../sass/assets/verdade-1.png";
import image2 from "../sass/assets/verdade-2.png";

export function Verdade() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">Verdade</h1>
        <p className="general-container-content-text">
          Nos dias de hoje, está muito difícil de acreditarmos no que é dito
          pelos políticos, pois tem aumentado a cada dia a lista de denúncias e
          condenações, de fato, em todos os níveis de administração pública em
          todo o país. Então como devemos usar a relação verdade e política em
          nosso município em favor da comunidade? Falando assim parece até que
          já é normal não existir verdade na política!... Há quem diga que o que
          existe é omissão e não mentiras! Como se isso fosse uma coisa
          aceitável!...é... tem muito pouca verdade na política mesmo! Então
          pretendo implementar um programa de trabalho baseado na verdade.
          (puxa, aonde chegamos!?).
          <img
            className="general-container-content-img-1"
            src={image1}
            alt=""
          />
        </p>
        <p className="general-container-content-text">Verdades:</p>
        <p className="general-container-content-text">
          - quanto dinheiro o município tem para dispor em favor da população -
          lembrando que todo o dinheiro é da população.
        </p>
        <p className="general-container-content-text">
          - quanto desse dinheiro tem destino determinado por leis para
          determinadas áreas e quais são essas porcentagens e seus destinos;
        </p>
        <p className="general-container-content-text">
          - onde, como e por que é usado o dinheiro que não tem destino
          determinado por lei;
        </p>
        <p className="general-container-content-text">
          - quais os valores que podem ser redirecionados e como isso é feito
          (por exemplo: quanto podemos ou devemos tirar do asfalto e pôr na
          saúde?);
        </p>
        <p className="general-container-content-text">
          - como conseguir mais dinheiro? Pois sempre vai faltar dinheiro, mesmo
          se evitar desperdício (entenda-se, roubo);
        </p>
        <p className="general-container-content-text">
          - quanto custa cada serviço, produto, materiais e porque o preço;
        </p>
        <p className="general-container-content-text">
          - qual secretaria, qual setor, qual servidor é responsável por qual
          compra, pagamento, execução de qual serviço, atendimento;{" "}
        </p>
        <p className="general-container-content-text">
          - qual o protocolo (a maneira de fazer) de cada serviço/atendimento e
          como pode ser melhorado.
        </p>
        <p className="general-container-content-text">
          <img
            className="general-container-content-img-2"
            src={image2}
            alt=""
          />
          - tudo deve ser público, transparente. A população tem o direito e o
          dever de acompanhar tudo bem de perto, e uma coisa importante é fazer
          essa divulgação em uma linguagem que qualquer cidadão possa entender o
          que é divulgado.
        </p>
      </div>
    </div>
  );
}
