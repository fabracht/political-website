import React, { useEffect } from "react";
import { GApageView } from "../";

import image1 from "../sass/assets/minha-historia-1.png";
import image2 from "../sass/assets/minha-historia-2.png";
import image3 from "../sass/assets/minha-historia-3.png";
import image4 from "../sass/assets/minha-historia-4.png";
import image5 from "../sass/assets/minha-historia-5.png";
import image6 from "../sass/assets/minha-historia-6.png";

export function MinhaHistoria() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">Minha História</h1>
        <p className="general-container-content-text">
          Olá, eu sou a Laudy Balas de Coco, meu nome é Laudiceia, sou filha da
          D. Aurea e do Sr. Antônio, casada há 30 anos com o Manoel, mãe da Ana,
          do Denis, do Leonardo e da Yasmim, e já tenho uma netinha, a Anna, com
          7 anos.
        </p>
        <p className="general-container-content-text">
          Apesar de ter nascido em Rancharia, cheguei em Assis com 2 anos, por
          isso me considero Assisense mesmo.
        </p>
        <img className="general-container-content-img-2" src={image1} alt="" />
        <p className="general-container-content-text">
          Uma coisa que eu não me envergonho é minha origem simples, pobre
          mesmo. Sempre estudando em escolas públicas, estudei no Léo Pizzato
          mas com 12 anos parei, pois precisei trabalhar, comecei como
          doméstica, depois trabalhei em açougue, no Supermercados A Barateira e
          também no Pavão Supermercados. Voltei estudar quando já era casada e
          com 3 filhos. Pelo supletivo – EJA, terminei o ensino fundamental no
          Francisca Ribeiro e o ensino médio no Clybas.
        </p>
        <p className="general-container-content-text">
          Graças à essa formação, em 2010 fui aprovada em um concurso da
          prefeitura, e em 2011, assumi como Agente de Endemias. Mais tarde,
          devido um problema de alergia ao inseticida usado no trabalho, fui
          transferida para a recepção na Secretaria Municipal da Saúde, e por
          fim, agora como atendente na ouvidoria do SAU – Serviço de Atendimento
          ao Usuário, de onde estou afastada em razão da lei eleitoral.
        </p>
        <img className="general-container-content-img-1" src={image2} alt="" />
        <p className="general-container-content-text">
          Sou graduada em Gestão de Recursos Humanos na Unopar, em 2016, mais
          uma vez com muito orgulho, pois consegui uma Bolsa Pró Uni, por meio
          do ENEM. E ainda nessa linha de pensamento do meu apreço pelo ensino
          público, com muito orgulho também cito minha filha, a primeira, Ana
          Caroline que passou pelo Léo Pizzato, Judith de Oliveira, Lucas Menk,
          Clybas e um
        </p>
        <img className="general-container-content-img-2" src={image3} alt="" />
        <p className="general-container-content-text">
          cursinho pré vestibular da Unesp Assis, estudou na UTFPR – Campo
          Mourão com graduação sanduiche do Ciências Sem Fronteiras na França, e
          ainda a Pós Graduação em Engenharia de Alimentos pela Unicamp, sempre
          bolsista, pois nessa época a renda familiar vinha da venda de doces,
          balas e cocadas, em frente ao antigo bar boiadeiro, onde conheci e me
          tornei conhecida de muitos assisenses.
        </p>
        <img className="general-container-content-img" src={image4} alt="" />
        <br />
        <img className="general-container-content-img-1" src={image5} alt="" />

        <p className="general-container-content-text">
          Meu filho Denis o segundo, é padeiro na padaria Pão Quente e é o pai
          da Anninha, minha neta. Tem o Leonardo, é o terceiro filho, que
          atualmente está desempregado, é PCD, porém concluiu o ensino médio e
          fez o Tiro de Guerra, e como o irmão mais velho, foi monitor de tropa
          e se formou Cabo com distinção, e por fim a Yasmim com 7 aninhos.
        </p>
        <img className="general-container-content-img-2" src={image6} alt="" />
        <p className="general-container-content-text">
          Tenho como inspiração de vida a minha mãe, considero ela assisense,
          pois foi aqui que ela, junto com meu pai, criou os 8 filhos, mulher de
          garra, sacoleira e muito pouco recurso financeiro, sempre dependeu dos
          serviços públicos na saúde, educação, laser e projetos socias, como o
          antigo “PLIMEC” que ficava na Igreja São Judas Tadeu. Foi quando já
          estava aposentada por invalidez, é que ela concluiu o ensino médio,
          também no EJA. Infelizmente ela já faleceu em 2016, vítima de um
          câncer de pâncreas.
        </p>
      </div>
    </div>
  );
}
