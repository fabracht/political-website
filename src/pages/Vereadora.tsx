import React, { useEffect } from "react";
import { GApageView } from "../";

export function Vereadora() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">POR QUE VEREADORA?</h1>
        <p className="general-container-content-text">
          Além de minhas próprias experiência vividas e o meu tempo de trabalho
          como comerciante das balas que me permitiu conhecer muitos assisenses,
          o meu trabalho na Secretaria da Saúde me permitiu conhecer e conviver
          com os muitos problemas sociais enfrentado pela população de Assis, e
          chegou num ponto que não dá mais par ficar sem fazer nada.
        </p>
        <p className="general-container-content-text">
          Sempre tem alguém sem consciência, sem respeito pelo próximo e vai
          tirar proveito próprio através da política, então eu me dispus a
          enfrentar, o que for necessário para mudar tudo isso.
        </p>
        <p className="general-container-content-text">
          Entendo que não é algo que se faça num estalar de dedos. É preciso
          muito empenho, muito trabalho, muita luta mesmo. Mas precisamos
          começar agora. Precisamos escolher certo. Precisamos votar certo,
          devemos espernear, gritar. Chega de tanto descaso com nossas famílias
          e até com nossas necessidades básicas. Ser vereadora é o começo do
          caminho para o fim de nossos tantos problemas de falta de assistência
          pública na saúde, na educação, segurança, trabalho, qualidade de vida
          sustentável, até mesmo exclusões sociais por puro preconceito.
        </p>
        <p className="general-container-content-text">
          Minha mãe é minha inspiração nessa nova jornada, mas também a minha
          própria vida, e das outras tantas mulheres guerreiras, que têm que
          vencer uma batalha a cada dia, trabalhando dentro e fora de casa
          (quando consegue um trabalho), fazendo malabarismo com nossos pequenos
          salários, escolhendo entre as contas essenciais, a que deve ser paga
          primeiro até acabar o dinheiro. E como se ainda tudo isso fosse pouco,
          chega a pandemia da covid19 pra mostrar que tudo que está ruim pode
          sim ficar muito pior!
        </p>
        <p className="general-container-content-text">
          Mulheres nessas condições são a maioria no mundo atual, e aqui em
          Assis essa realidade é muito marcante. É pra elas e por elas, na
          defesa de suas necessidades e interesses, que me dispus a enfrentar
          essa jornada, que reconheço como muito difícil por não ser política de
          carreira.
        </p>
        <p className="general-container-content-text">
          Mas conhecendo todas suas dificuldades de fato: Sei quanto custa o
          supermercado e a farmácia (não é todo medicamento que tem no SUS),
          levar filho na escola, no posto de saúde bem cedinho pra conseguir um
          “encaixe” no médico que não dá pra pagar nem esperar 1 ou 2 meses.
          Como mãe de filho com necessidades especiais que só encontra portas
          fechadas; por vivenciar tudo isso no meu dia a dia, sei o que
          realmente precisamos, e pra agora.
        </p>
        <p className="general-container-content-text">
          Essa nossa história é que será o combustível, o estimulante no
          contínuo trabalho na busca de melhorar o dia a dia dessas lutadoras.
        </p>
        <p className="general-container-content-text">
          É preciso, primeiro sempre a verdade, e aí muito trabalho, muita busca
          de conhecimento e depois mais trabalho, coisa em que nós mulheres
          somos especialistas, mas é assim que vejo o possível caminho pra
          melhorar nosso dia a dia.
        </p>
      </div>
    </div>
  );
}
