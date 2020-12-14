import React, { Component } from "react";
import { Menu } from "./Menu";

interface State {}

interface Props {
  clicked: boolean;
}

export class HamburgerButton extends Component<Props, State> {
  render() {
    return (
      <div className="hamburger-button-background">
        <Menu clicked={this.props.clicked}></Menu>
      </div>
    );
  }
}
