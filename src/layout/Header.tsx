import React, { Component } from "react";
import LaudiLogo1 from "../sass/assets/laudi-logo-grande-verde-1.svg";
import LaudiLogo2 from "../sass/assets/laudi-logo-grande-verde-2.svg";
import { Link } from "react-router-dom";
import { HamburgerButton } from "../components/HamburgerButton";

interface Prop {}
interface State {
  hamburgerClicked: boolean;
}

export class Header extends Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = {
      hamburgerClicked: false,
    };

    this.burgerClick = this.burgerClick.bind(this);
  }

  burgerClick(ev: React.SyntheticEvent<HTMLDivElement>) {
    this.setState({
      hamburgerClicked: !this.state.hamburgerClicked,
    });
  }

  render() {
    return (
      <div className="header-container">
        <div className="header__logo">
          <Link to="/">
            <img
              src={LaudiLogo1}
              className="header__logo-name"
              width="100%"
              alt="Laudiceia para Vereadora"
            />
          </Link>
          <Link to="/">
            <img
              src={LaudiLogo2}
              className="header__logo-name"
              width="100%"
              alt="Laudiceia para Vereadora"
            />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu-links">
            <Link to="/programa" className="menu-link">
              Programa
            </Link>
            <Link to="/videos" className="menu-link">
              Vídeos
            </Link>
            <a
              href="http://www.facebook.com/LaudyBalasdeCoco"
              className="menu-link"
              id="facebook-link"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/laudy_balas_de_coco/"
              className="menu-link"
              id="instagram-link"
            >
              <i className="fa fa-instagram"></i>
            </a>
            {/* THIS IS WHERE THE HAMBURGER BUTTON STARTS */}
            <div
              className="menu-link hamburger-button"
              onClick={this.burgerClick}
            >
              &nbsp;
              <div className="hamburger-button-icon">&nbsp;</div>
              <HamburgerButton clicked={this.state.hamburgerClicked} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
