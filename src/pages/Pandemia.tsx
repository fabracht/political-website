import React, { useEffect } from "react";
import { GApageView } from "../";
import image1 from "../sass/assets/pandemia-1.png";
import image2 from "../sass/assets/pandemia-2.png";
import image3 from "../sass/assets/pandemia-3.png";
import image4 from "../sass/assets/pandemia-4.png";

export function Pandemia() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">Pandemia</h1>
        <p className="general-container-content-text">
          Quem que no ano passado poderia dizer que iríamos viver algo parecido
          com isso que vivemos hoje?!
          <img
            className="general-container-content-img-2"
            src={image1}
            alt=""
          />
        </p>
        <p className="general-container-content-text">
          Pois é! O que fazer? Fica em casa? Vai trabalhar?
        </p>
        <p className="general-container-content-text">
          Aquele especialista que fala alguma coisa é especialista mesmo?
        </p>
        <p className="general-container-content-text">
          Qual conselho devemos seguir?
        </p>
        <p className="general-container-content-text">
          Quem é o oportunista que está roubando a gente?
        </p>
        <p className="general-container-content-text">
          Devemos usar máscara mesmo?
        </p>
        <p className="general-container-content-text">Quando isso acaba? </p>
        <p className="general-container-content-text">
          Essas e outras muitas perguntas têm inúmeras respostas diferentes para
          cada uma delas. E realmente não tem nenhuma solução definitiva pra
          esse grande problema.
        </p>
        <p className="general-container-content-text">
          Tem muita gente falando muita coisa diferente ao mesmo tempo, todos
          sabemos alguma coisa, todos temos medos, todos temos direitos. Mas o
          novo corona vírus não vai morrer com conversa.
          <img
            className="general-container-content-img-1"
            src={image2}
            alt=""
          />
        </p>
        <p className="general-container-content-text">
          Eu acho que devemos sempre agir com cuidado. Se você pode, fica em
          casa. Está difícil pra você? Está sim, e para todo o resto da
          população do mundo. Precisa trabalhar? Vai, com cautela, cuidado nunca
          é demais.
          <img className="general-container-content-img" src={image3} alt="" />
        </p>
        <br />
        <p className="general-container-content-text">
          <img
            className="general-container-content-img-2"
            src={image4}
            alt=""
          />
          Respeito ao semelhante não é regra de pandemia, é regra básica de
          convivência humana. Se fizermos nossa parte, aquilo que acreditamos
          como certo, sem avançar sobre o direito de outras pessoas, não vai
          curar o mundo, mas com certeza vai melhorar a convivência nessas horas
          tão difíceis.
        </p>
        <p className="general-container-content-text">
          Se você pode de alguma forma, ajude alguém, você vai melhorar o mundo
          e isso reflete diretamente pra você!
        </p>
        <p className="general-container-content-text">
          Essa doença não ataca o pobre ou o rico, o feio ou o bonito, o preto
          ou o branco. Ela está matando sim os Seres Humanos e também a
          humanidade das pessoas. Por isso vamos com calma, aprendendo juntos a
          melhor maneira pra sobrevivermos à nós mesmos e a covid19. Juntos
          somos mais fortes, sempre.
        </p>
      </div>
    </div>
  );
}
