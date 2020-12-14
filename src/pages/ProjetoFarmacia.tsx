import React, { useEffect } from "react";
import { GApageView } from "../";
import image1 from "../sass/assets/projeto-farmacia-1.png";
import image2 from "../sass/assets/projeto-farmacia-2.png";

export function ProjetoFarmacia() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">
          Projeto farmácia 24hs
        </h1>
        <span className="general-container-content-subtitle">
          Não dá mais pra esperar uma farmácia SUS atendendo 24hs.
        </span>
        <p className="general-container-content-text">
          A UPA - Unidade de Pronto Atendimento – existe pra atender emergências
          médicas da população, e muitas vezes é o caso do paciente não precisar
          internação, mas sempre tem a necessidade de alguma medicação, seja
          para esperar o atendimento ambulatorial ou um especialista (nos dois
          casos sempre demora muito) outra vezes, em casos não sem gravidade,
          mas o médico da UPA prescreve uma medicação que vai curar o paciente
          sem ele procurar o médico do posto de saúde ou especialista; aí o
          cidadão não tem como comprar o remédio que precisa e se for, por
          exemplo, um sábado de madrugada (ou feriados prolongados!) a pessoa só
          vai ter acesso ao remédio dois, três ou até quatro dias depois! De que
          valeu o atendimento de emergência? Não existe desculpa aceitável pra
          essa situação!
        </p>
        <img className="general-container-content-img" src={image1} alt="" />
        <p className="general-container-content-text">
          Não é difícil resolver esse problema. É só colocar uma farmácia dentro
          da UPA! Sem remédio pra que serve o atendimento do médico, pois na
          maioria das vezes o paciente precisa de medicação!
        </p>
        <p className="general-container-content-text">
          E além de resolver esse problema tão grave para os pacientes, ainda
          vai economizar o aluguel dos prédios das farmácias da Vila Xavier
          (R$1.685,00) e a da Vila Progresso (R$1,803,00), mais as despesas com
          água, energia e iptu dessas farmácias. Nesse projeto das farmácia 24
          hs a UPA MARIA IZABEL ATENDE 24HS com outra farmácia e uma terceira
          farmácia no Centro de Especialidades atendendo em horário normal.
        </p>
        <img className="general-container-content-img" src={image2} alt="" />
        <br />
        <span className="general-container-content-subtitle">
          Atendimento eficiente, em posição geográfica excelente e de quebra
          economia do nosso dinheiro!
        </span>
      </div>
    </div>
  );
}
