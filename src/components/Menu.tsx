import React, { useState } from "react";

enum EMenus {
  vereadora = "vereadora",
  programa = "programa",
  posicionamentos = "posicionamentos",
  projetos = "projetos",
  videos = "videos",
}
enum ESubMenus {
  minhahistoria = "Minha História",
  pqvereadora = "Porque Vereadora?",
  verdade = "Verdade",
  trabalho = "Trabalho",
  pandemia = "Pandemia",
  volta = "Volta Às Aulas",
  direitaesquerda = "Direita Esquerda",
  projetos = "Projetos",
  projetofarmacia = "Projeto Farmácia",
}

interface Props {
  clicked: boolean;
}

export function Menu(props: Props) {
  const [subMenu, setSubMenu] = useState<JSX.Element | undefined>(undefined);

  const createMenu = (): JSX.Element[] => {
    let elements: JSX.Element[] = [];

    for (let value of Object.values(EMenus)) {
      elements.push(
        <li
          onClick={createSubMenu}
          key={value}
          id={value}
          className="hamburger-button-background-list-item"
        >
          <a href={`/${value}`}>{value}</a>
        </li>
      );
    }

    return elements;
  };

  const createSubMenu = (ev: React.SyntheticEvent<HTMLElement>) => {
    let elements: JSX.Element[] = [];
    const subChoices = createSubMenuChoices(ev.currentTarget.id);
    if (subChoices.length > 1) {
      ev.preventDefault();
      ev.stopPropagation();
      elements = subChoices.map((el: string) => {
        const index = Object.values(ESubMenus).findIndex(
          (men: string) => men === el
        );
        const slug = Object.keys(ESubMenus)[index];
        return (
          <li
            key={el}
            id={el}
            className="hamburger-button-background-sublist-item"
          >
            <a href={`/${ev.currentTarget.id}/${slug}`}>{el}</a>
          </li>
        );
      });
    }
    const finalElement = (
      <ul
        key={ev.currentTarget.id}
        className="hamburger-button-background-sublist"
      >
        {elements}
      </ul>
    );

    if (subMenu?.key === finalElement.key) {
      setSubMenu(undefined);
    } else {
      setSubMenu(finalElement);
    }
  };

  const createSubMenuChoices = (choice: EMenus | string): string[] => {
    switch (choice) {
      case EMenus.vereadora:
        return [ESubMenus.minhahistoria, ESubMenus.pqvereadora];
      case EMenus.programa:
        return ["programa"];
      case EMenus.posicionamentos:
        return [
          ESubMenus.verdade,
          ESubMenus.trabalho,
          ESubMenus.pandemia,
          ESubMenus.volta,
          ESubMenus.direitaesquerda,
        ];
      case EMenus.projetos:
        return [ESubMenus.projetos, ESubMenus.projetofarmacia];
      case EMenus.videos:
        return ["videos"];
      default:
        return [];
    }
  };
  if (props.clicked) {
    return (
      <ul className="hamburger-button-background-list">
        {createMenu()}
        <li className="hamburger-button-background-list-item">
          {subMenu ? subMenu : <div></div>}
        </li>
      </ul>
    );
  } else {
    return <div className=""></div>;
  }
}
