import React, { Component } from "react";
import { GApageView } from "../";
import { NewsForm } from "../components/NewsForm";

export class Home extends Component {
  componentDidMount() {
    GApageView(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <div className="home-container">
        <div className="home-section-1">
          <NewsForm />
        </div>
        <div className="home-section-2">
          <div className="home__about-box">
            <h1>Vereadora</h1>
            <p>
              Olá amigos, amigas e cidadãos assisenses, eu quero cumprimentar a
              todos vocês e convidá-los para juntos, desenvolvermos esse tão
              importante momento de nossas vidas, onde vamos definir quem são as
              pessoas que irão cuidar de nossa cidade nos próximos 4 anos.
            </p>
            <hr />
            <p>
              Eu disse tão importante porque serão elas, os que forem eleitos,
              que vão definir o que vai ser feito com todo o nosso dinheiro, vão
              definir quais são as prioridades, vão direcionar recursos daqui
              para ali, vão mudar a maneira de atender certos serviços. Vão
              implantar novos serviços, vão retirar algumas coisas, enfim, eles
              terão o poder, de dizer para nós, o que fazer, como fazer, quando
              fazer e até o que não fazer, e embora existam limites para essas
              ações, nós já sabemos da maneira mais difícil, que em muitos
              casos, nós que somos os legítimos interessados de tudo isso, somos
              esquecidos ou postos à margem de tudo, somos até, em alguns casos,
              impedidos de reclamar de alguma coisa que deveria ser nosso e foi
              direcionado para outro por motivos de puro interesse pessoal ou
              criminoso mesmo.
            </p>
            <hr />
            <p>
              Para mostrar a importância do seu voto eu quero apresentar um
              exemplo bem simples que vivenciamos rotineiramente: todos vamos em
              lojas, supermercados, farmácias fazer nossas compras, mas ninguém
              jamais chega nesses lugares e entrega sua carteira e deixa que o
              vendedor escolha para nós o produto que quiser e cobre o preço que
              quiser.
            </p>
            <hr />
            <p>
              Quando você não vota é isso que você faz. Você está sendo
              indiferente com o que vai ser feito com o seu dinheiro, é, é disso
              que se trata, o uso do seu dinheiro, onde sem sua fiscalização e
              cobrança, algum espertalhão, entrega pra você um serviço ou
              produto de péssima qualidade por um preço absurdamente alto. Por
              tudo isso é que você deve escolher sim, e votar sim em um
              candidato ou candidata à vereador e à prefeito de nossa cidade,
              principalmente porque é aqui no município, que tudo acontece, é
              aqui que você sente literalmente na pele, o resultado de todas as
              ações políticas que são feitas em todas as escalas de
              administração do nossos país.
            </p>
            <hr />
            <p>
              Agora é a hora de você escolher uma pessoa pra representar seus
              interesses e necessidades. E eu estou aqui, colocando à sua
              disposição, o meu trabalho nos próximos quatro anos, pra
              fiscalizar a administração de nossa cidade, pra reclamar dos mal
              feitos de nossos políticos, direcionar suas necessidades, suas
              reclamações. Quero convidar você, pra vir me conhecer, dar seu
              voto de confiança para que eu possa trabalhar por você e por
              Assis. Acesse minhas redes para me conhecer melhor e saber o que
              eu penso e o que posso fazer por você e por nossa cidade.
            </p>
            <hr />
            <p>
              Com verdade e com trabalho podemos conquistar as melhorias para o
              nosso dia a dia, podemos melhorar nossa vida e de todos
              assisenses.
            </p>
          </div>
        </div>
        <div className="home-section-3">
          <a href="/programa" className="home__button">
            Programa
          </a>
          <a href="/videos" className="home__button">
            Vídeos
          </a>
        </div>
      </div>
    );
  }
}
