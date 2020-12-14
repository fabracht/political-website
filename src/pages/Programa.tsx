import React, { Component } from "react";
import { GApageView } from "../";
import image1 from "../sass/assets/programa-1.png";
import image2 from "../sass/assets/programa-2.png";
import image3 from "../sass/assets/programa-3.png";
import image4 from "../sass/assets/programa-4.png";

export class Programa extends Component {
  componentDidMount() {
    GApageView(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <div className="general-container">
        <div className="general-container-content">
          <h1 className="general-container-content-title">PROGRAMA</h1>
          <p className="general-container-content-text">
            Alem das marcantes mudanças impostas pela pandemia do novo corona
            vírus, e não devemos deixar de observá-las, a humanidade vive nos
            dias de hoje uma expressiva onda de mudanças. A globalização e a
            consoante evolução tecnológica arrasta consigo a necessidade de
            adequações na educação, na sustentabilidade, na cultura, na saúde,
            no trabalho, nas relações socioeconômicas e consequentemente na
            política, que em regra dita as novas normas para essa nova
            convivência.
            <img
              className="general-container-content-img-1"
              src={image1}
              alt=""
            />
          </p>
          <p className="general-container-content-text">
            A força da globalização, como se tivesse vontade própria, molda
            nações, sociedades, costumes e crenças e vai conduzindo o cidadão,
            indivíduo base, ora agente passivo, ora agente ativo de toda força
            da ação dessa inexorável mudança global e muitas vezes não lhe deixa
            alternativa, se não, ser levado nessa corrente sem volta.
          </p>
          <img
            className="general-container-content-img-2"
            src={image2}
            alt=""
          />
          <p className="general-container-content-text">
            Ao principal paciente, o cidadão, cabe o direito/dever de buscar e
            implementar as políticas que lhe permitam direcionar e fiscalizar as
            ações do Estado, garantindo a soberania da democracia e equidade
            social, as premissas básicas de manutenção dos direitos humanos,
            sobretudo evitar qualquer exclusão ou preconceito.
          </p>
          <p className="general-container-content-text">
            Na República Federativa do Brasil, constituída pelos estados e
            municípios, principalmente devido suas dimensões, diversidades
            culturais e sociais, devemos ter a consciência de buscar
            objetivamente as necessidades e interesses dos cidadãos em cada
            município, surgindo aí a importância da representação política
            local, o vereador, o primeiro interlocutor entre o cidadão e o
            Estado.
          </p>
          <img className="general-container-content-img" src={image3} alt="" />
          <br />
          <img
            className="general-container-content-img-1"
            src={image4}
            alt=""
          />
          <p className="general-container-content-text">
            A política municipal deve ser pautada na busca da melhoria de vida
            do cidadão, garantindo a saúde, educação, trabalho, segurança
            pública e sustentabilidade, dentro dos parâmetros de evolução
            cobrados pelas mudanças no âmbito global, sem nenhum prejuízo de
            tempo de adequação. E ainda buscar o meio termo para a ineficiência
            do Estado como agente econômico, e a força das ações excludentes do
            Mercado.
          </p>
        </div>
      </div>
    );
  }
}
