import React, { useEffect } from "react";
import { GApageView } from "../";
import image1 from "../sass/assets/volta-aulas-1.png";
import image2 from "../sass/assets/volta-aulas-2.png";

export function Volta() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">Volta às aulas </h1>

        <p className="general-container-content-text">
          Olá meus amigos e amigas, pais e professores. Sobre voltar as aulas
          sem vacina e eu quero apresentar um estudo publicado pelo jornal El
          Pais no mês de junho.
        </p>
        <img className="general-container-content-img-2" src={image1} alt="" />
        <p className="general-container-content-text">
          “[...]Cálculos matemáticos de pesquisadores da Universidade de Granada
          (UGR) – Espanha*.
        </p>
        <p className="general-container-content-text">
          [...] dados usado nas operações matemáticas - pressupondo [...]uma
          classe com 20 alunos* - há 10 alunos com um irmão e outros 10 são
          filhos únicos, no primeiro dia de aula cada aluno será exposto a 74
          pessoas. Isso ocorrerá exclusivamente se não houver contato com alguém
          fora da sala de aula e da casa da família. No segundo dia [...], a
          interação chegaria a 808 pessoas, considerando exclusivamente as
          relações sem distanciamento nem máscara da própria classe e as das
          classes de irmãos e irmãs. A projeção em papel excede 15.000 contatos
          em três dias”
        </p>
        <p className="general-container-content-text-inlineref">
          (EL PAÍS - JAVIER ARROYO - GRANADA -ESPANHA - 17 JUN 2020) *NOSSO
          GRIFO
        </p>
        <p className="general-container-content-text">
          O estudo cita não usar máscara e sem distanciamento, mas o que é
          relevante e realmente assusta é a enormidade de contatos possíveis de
          apenas uma classe. Notem que não entrou na conta um segundo, ou
          terceiro professor, nem os demais trabalhadores da escola que
          absolutamente não se compõe apenas de professores, não foi
          contabilizado os possíveis contatos dos alunos que utilizam meios de
          transportes que não pelos pais.
        </p>
        <p className="general-container-content-text">
          Não tem, realmente, necessidade de argumentar sobre a propalada
          condição assintomática das crianças; os professores e demais
          trabalhadores do grupo de risco; a enorme cadeia de serviços que
          engloba a logística do funcionamento de uma escola, e outras tantas
          variantes, tão incontroláveis quanto as crianças em uma escola.
        </p>
        <img className="general-container-content-img-2" src={image2} alt="" />
        <p className="general-container-content-text">
          Ninguém em sã consciência pode alegar que é seguro, sob qualquer
          condição, voltar à sala de aula sem vacina. E a despeito de qualquer
          sequela social ou econômica, a única medida efetiva de se evitar o
          contágio sem vacina é o distanciamento social e não tem plano (ou até
          mesmo super herói) que consiga fazer isso com 20 crianças. Minha filha
          não volta.
        </p>
        <ol className="reference-list">
          <li className="reference-list-item">
            https://brasil.elpais.com/sociedade/2020-06-17/colocar-20-criancas-numa-sala-de-aula-implica-em-808-contatos-cruzados-em-dois-dias-alerta-universidade.html?fbclid=IwAR0n030qcrdUGr2ONtAoJ7-2p8iO8JoFm62kr-qzA8Nicnj243k6F4NofhA
          </li>
        </ol>
      </div>
    </div>
  );
}
