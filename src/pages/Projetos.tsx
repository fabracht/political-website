import React, { useEffect } from "react";
import { GApageView } from "../";

export function Projetos() {
  useEffect(() => {
    GApageView(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="general-container">
      <div className="general-container-content">
        <h1 className="general-container-content-title">projetos</h1>
        <p className="general-container-content-subtitle  center-text">
          Mais um banheiro no Parque Buracão
        </p>
        <p className="general-container-content-text">
          Acredito que todo assisense já foi, ou pelo menos passou em frente ao
          Parque Buracão e pode ver como tem muito movimento de pessoas de todas
          as idades ali. É um lugar muito bom par se estar, praticar atividades
          esportivas ou mesmo descansar e tem um banheiro próximo ao portão da
          Av. Antônio Zuardi, ali próximo aos equipamentos de ginástica.
        </p>
        <p className="general-container-content-text">
          O que dá pra notar facilmente é que a maior concentração de pessoas e
          especialmente crianças é no lado que tem as quadras e os equipamentos
          infantis, por isso é muito importante que se faça um banheiro mais
          próximo dessa área, se alguma criança, ou mesmo qualquer pessoa
          precise usar o sanitário tem uma distancia de pelo 200m se descer e
          subir as escadas ou mais de 300m se for pela ruazinha sinuosa. Imagina
          o sofrimento das crianças e pais nesta situação!
        </p>
        <p className="general-container-content-text">
          Não se trata de luxo não, é necessidade básica humana. É respeito ao
          cidadão.
        </p>
        <p className="general-container-content-subtitle center-text">
          Política de tratamento aos animais de rua
        </p>
        <p className="general-container-content-text">
          Para abordar esse problema grave que temos em Assis, nem precisamos
          falar da opção que cada um tem de ter ou não ter um pet (cachorro,
          gato, aves), mas o mais grave são, principalmente os cães abandonados
          ou maltratados que andam pelas ruas de nossa cidade, podendo ate
          evoluir pra uma epidemia relacionada a superpopulação desses bichinhos
          pelas ruas. Com a recente evolução na esfera federal da lei que pune
          os maus tratos com mais rigor, esperamos que possa reduzir a
          incidência de maus tratos e abandono, mas pra efetivo cumprimento
          dessa lei o município não pode simplesmente esperar que acabe o
          problema, mas implantar meios de fiscalização efetiva do cumprimento
          da lei em nossa cidade e paralelo a isso implantar um centro
          específico de triagem, acolhimento, tratamento e destinação desse
          animais e outros assemelhados.
        </p>
        <p className="general-container-content-text">
          Há algum tempo eu tomei conhecimento de um ocorrido, absurdo, pra
          dizer o mínimo, mas se deu que havia um cavalo morto na residência de
          uma senhora idosa e sem recurso (financeiros e físicos certamente) pra
          destinar o seu animal morto – pasmem - ela procurou ajuda pública e
          ouviu o absurdo de que teria que por o animal na rua pra que a
          prefeitura fizesse o recolhimento do seu cavalo morto!
        </p>
        <p className="general-container-content-text">
          Não dá nem pra comentar mais nada!
        </p>
        <p className="general-container-content-title center-text">
          Divulgação ativa e clara da utilização do orçamento
        </p>
        <p className="general-container-content-subtitle center-text">
          PRINCÍPIOS BÁSICO DA ADMINISTRAÇÃO PÚBLICA BRASILEIRA LEGALIDADE –
          IMPESSOALIDADE – MORALIDADE - PUBLICIDADE - EFICIÊNCIA
        </p>
        <p className="general-container-content-text">
          Existe predeterminação legal para o direcionamento da maioria dos
          recursos do orçamento do município (LEGALIDADE), mas existe sim
          possibilidade de algum manejo desse dinheiro em casos específicos, mas
          é indispensável que exista transparência total do direcionamento de
          todo recurso manipulado pela administração pública.
        </p>
        <p className="general-container-content-text">
          “Ah! Mas tem o portal da transparência!” Sim, mas tem muito cidadão
          que nem sabe ler! E isso não exclui ele do direito de saber como foi
          gasto o dinheiro dele pelo administrador (MORALIDADE).
        </p>
        <p className="general-container-content-text">
          Não é um problema um político divulgar a inauguração de alguma obra ou
          serviço, mas a mesma divulgação deve conter – de maneira bem clara e
          fácil de se entender – os reais valores gastos, a origem dos recursos.
          Ficou mais caro? Por que? - Mudou o projeto? Por que? – Atrasou? Por
          que?(EFICIÊNCIA e PUBLICIDADE).
        </p>
        <p className="general-container-content-text">
          Se não fazem assim, pode ter certeza, tem alguma coisa errada. O
          agente público deve fazer a divulgação, sempre.
        </p>
        <p className="general-container-content-subtitle center-text">
          Divulgação de protocolos de atendimentos
        </p>
        <p className="general-container-content-text">
          Quando alguém procura o “posto de saúde” pra um atendimento existe ali
          uma orientação da Secretaria da Saúde de como deve ser feito o
          atendimento do cidadão/paciente (e da mesma forma, em qualquer outra
          repartição pública de atendimento aos cidadãos).
        </p>
        <p className="general-container-content-text">
          O que deve ser divulgado, por exemplo para a pessoa quer agendar uma
          consulta médica:
        </p>
        <ul className="general-container-content-list">
          <li>
            <p className="general-container-content-list-item">
              Quais os horários para se fazer o agendamento (deve ser durante
              todo o expediente da unidade)
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              Quantos médicos fazem atendimento por dia na unidade, quais suas
              especialidades (pode ter na unidade um especialista pertinente a
              necessidade do paciente) e quais os horários que eles atenderão
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              Qual disponibilidade de consultas por dia de cada médico
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              Na possibilidade de não haver vaga dentro da necessidade/urgência
              do paciente qual a alternativa (deve haver uma alternativa)O que
              deve ser divulgado a respeito de exames pedidos pelos médicos:
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              Quantos exames são oferecidos por dia de cada exame
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              Onde são feitos cada tipo de exame
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              Quando fica pronto o resultado do exame Na possibilidade de demora
              qual a alternativa a necessidade/urgência do paciente (deve haver
              uma alternativa)
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              O que deve ser divulgado no caso a respeito de encaminhamento para
              especialistas
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              Quantas consultas de especialista são oferecidas por dia, por
              especialidade Onde são as consultas
            </p>
          </li>
          <li>
            <p className="general-container-content-list-item">
              Na possibilidade de não haver vaga dentro da necessidade/urgência
              do paciente qual a alternativa (deve haver uma alternativa)
            </p>
          </li>
        </ul>
        <p className="general-container-content-text">
          Assim em todos os atendimento, mesmo outros serviços que não da saúde.
          Uma outra divulgação que ocorre mas de forma errada é que em algumas
          repartições é fixado as penas para possíveis desacato/agressões aos
          funcionários públicos.
        </p>
        <p className="general-container-content-text">
          Considerando a cronologia dos fatos, é justo que se divulgue antes das
          penalidades aos desacatos as deveres legais dos agentes públicos e as
          possíveis penas para o descumprimento da lei.
        </p>
        <span className="general-container-content-subtitle">
          LEI Nº 8.027, DE 12 DE ABRIL DE 1990.
        </span>
        <p className="general-container-content-text">
          São deveres dos servidores públicos civis:
        </p>
        <ol className="general-container-content-olist">
          <li>
            <p className="general-container-content-olist-item">
              exercer com zelo e dedicação as atribuições legais e
              regulamentares inerentes ao cargo ou função;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              ser leal às instituições a que servir;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              observar as normas legais e regulamentares;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              cumprir as ordens superiores, exceto quando manifestamente
              ilegais;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              atender com presteza: a) ao público em geral, prestando as
              informações requeridas, ressalvadas as protegidas pelo sigilo; b)
              à expedição de certidões requeridas para a defesa de direito ou
              esclarecimento de situações de interesse pessoal;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              zelar pela economia do material e pela conservação do patrimônio
              público;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              guardar sigilo sobre assuntos da repartição, desde que envolvam
              questões relativas à segurança pública e da sociedade;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              manter conduta compatível com a moralidade pública;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              ser assíduo e pontual ao serviço;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              tratar com urbanidade os demais servidores públicos e o público em
              geral;
            </p>
          </li>
          <li>
            <p className="general-container-content-olist-item">
              representar contra ilegalidade, omissão ou abuso de poder.
            </p>
          </li>
        </ol>
        <p className="general-container-content-text">(...)</p>
      </div>
    </div>
  );
}
