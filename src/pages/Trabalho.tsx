import React, { useEffect } from "react";
import { GApageView } from "../";
import image1 from "../sass/assets/trabalho-1.png";
import image2 from "../sass/assets/trabalho-2.png";

export function Trabalho() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">Trabalho</h1>
        <p className="general-container-content-text">
          Trabalho, trabalho, trabalho.
        </p>
        <p className="general-container-content-text">
          Será que dá pra fazer assim? Tem que ser assim mesmo!
        </p>
        <p className="general-container-content-text">
          Eu tenho uma curiosidade: o que faz o vereador (que não tem um outro
          trabalho) de Assis durante uma semana inteirinha se pois até na
          segunda feira a seção ordinária é à noite.
        </p>
        <p className="general-container-content-text">
          Como ninguém nasce vereador, eu acho necessário que se deva dedicar
          parte do tempo em aprendizados pertinentes à função, mas dá sim pra
          trabalhar muito fiscalizando os serviços públicos, ouvindo a população
          sobre seus problemas e necessidades e desenvolver os projetos
          legislativos.
          <img
            className="general-container-content-img-1"
            src={image1}
            alt="proibido vigiar"
          />
        </p>
        <p className="general-container-content-text">
          E como fiscalizar é vigiar, não dá pra vigiar tudo do gabinete. Tem
          muita coisa que precisa estar no local pra conferir, pois as vezes tem
          até alguma reclamação que não procede.{" "}
        </p>
        <p className="general-container-content-text">
          E também fiscalizar a Câmara de Vereadores! Todos os vereadores estão
          trabalhando mesmo? Estão economizando?
          <img
            className="general-container-content-img-2"
            src={image2}
            alt="descoberta com lupa"
          />
        </p>
        <p className="general-container-content-text">
          Algumas vezes só um pequeno ajuste resolve um grande problema, da
          mesma forma que pode ter muita coisa errada por traz de pequenas
          coisas.
        </p>
        <p className="general-container-content-text">
          {" "}
          E ainda quando tudo estiver funcionando sem reclamação, dá pra dar uma
          espiada e ver se não tem alguma coisa que pode melhorar, economizar,
          expandir. E por que não elogiar quando couber um elogio.
        </p>
        <p className="general-container-content-text">
          Hoje em dia acontece muitas mudanças em tudo, e algum serviço que
          funcionava bem, precisa ser modificado, pois foi criado para uma coisa
          que pode até não existir mais.
        </p>{" "}
        <p className="general-container-content-text">
          Também aparecem coisas novas que ninguém tem a menor ideia de como
          agir, prova disso, o corona vírus!{" "}
        </p>
        <p className="general-container-content-text">
          Então a Prefeitura a Câmara de Vereadores e a População, juntos,
          buscam o melhor caminho e solução para os problemas.
        </p>
      </div>
    </div>
  );
}
