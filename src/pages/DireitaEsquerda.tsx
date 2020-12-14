import React, { useEffect } from "react";
import { GApageView } from "../";
import image1 from "../sass/assets/direita-esquerda-1.png";
import image2 from "../sass/assets/direita-esquerda-2.png";
import image3 from "../sass/assets/direita-esquerda-3.png";
import image4 from "../sass/assets/direita-esquerda-4.png";
import image5 from "../sass/assets/direita-esquerda-5.png";

export function DireitaEsquerda() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">DIREITA OU ESQUERDA</h1>

        <img className="general-container-content-img-1" src={image1} alt="" />
        <img className="general-container-content-img-2" src={image2} alt="" />
        <p className="general-container-content-text">
          De que lado você está? Você é de esquerda ou de direita? Eu não
          preciso, e nem devo me definir por essas posições, é muita limitação,
          no mínimo sem necessidade.
        </p>
        <p className="general-container-content-text">
          Sou filiada à um partido político sim, mas isso é uma exigência legal
          pra eu concorrer a uma vaga na Câmara Municipal e minha posição
          política está direcionada à fiscalização do executivo de nossa cidade,
          a ouvir as necessidades da população e a criação de possíveis leis que
          possam de alguma forma, resolver ou evitar os problemas de nossa
          cidade.
        </p>
        <img className="general-container-content-img" src={image3} alt="" />
        <p className="general-container-content-text">
          Eu devo respeitar minha relação legal com o partido a qual sou
          filiada, e eu devo honrar os acordos políticos com os quais me
          comprometi, enquanto não me impuserem ilícitos ou ilegalidades, mas a
          representatividade do cargo de vereadora, diz respeito a interlocução
          do cidadão e o serviço prestado pelos dirigentes
          político/administrativos do município e essa representatividade de
          vereadora, bem como o compromisso de trabalho do executivo não podem
          ser direcionados exclusivamente aos cidadão da esquerda, ou aos da
          direita!
        </p>
        <img className="general-container-content-img-2" src={image4} alt="" />
        <p className="general-container-content-text">
          Toda divisão desperta rivalidade, enfraquece.
        </p>
        <p className="general-container-content-text">
          Será que eu como vereadora poderia criar uma lei que beneficiasse
          apenas cidadãos de direita, ou de esquerda?
        </p>
        <p className="general-container-content-text">
          Eu poderia me preocupar só com as necessidades do cidadãos de
          esquerda, ou da direita especificamente?
        </p>
        <p className="general-container-content-text">
          Se o prefeito e os demais vereadores são de outros partidos eu devo
          ser contra qualquer ações deles?
        </p>
        <img className="general-container-content-img-1" src={image5} alt="" />
        <p className="general-container-content-text">
          As melhorias, a saúde, a segurança, a educação, o respeito aos
          direitos constitucionais tem que ser para todos, afinal “todos são
          iguais perante a lei”, e não ‘os de direita têm mais direitos’, ou
          ainda ‘os de esquerda devem ser mais bem assistidos’. Sempre devemos
          buscar a igualdade com equilíbrio, equidade.
        </p>
      </div>
    </div>
  );
}
