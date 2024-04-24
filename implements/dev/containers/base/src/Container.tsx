import { IContainer, IHost } from "definitions";
import { h, tag, render, Component } from "wpa";
import { css } from "wpa-ui";
import reboot from "/csses/bootstrap/reboot"
import tables from "/csses/bootstrap/tables";
import utilities from "/csses/bootstrap/utilities";
import forms from "/csses/bootstrap/forms";
import buttons from "/csses/bootstrap/buttons";
import grid from "/csses/bootstrap/grid";
import card from "/csses/bootstrap/card";
import progress from "/csses/bootstrap/progress";

export class Container extends Component implements IContainer {
  static css = [
    reboot.cssss,
    utilities.cssss,
    tables.cssss,
    forms.cssss,
    buttons.cssss,
    grid.cssss,
    card.cssss,
    progress.cssss,
  ];
  get on() {
    return this.host.on;
  }
  get off() {
    return this.host.off;
  }
  get emit() {
    return this.host.emit;
  }
  props = { host: null as IHost };
  get host(): IHost {
    return this.props.host;
  }

  registerCsses = (...csses) => {
    this.cssss = csses;
    this.updateStyle();
  };
  registerStyleSheets = (...stylesheets) => {
    this.stylesheets = stylesheets;
    this.updateStyle();
  };

  render(props) {}
}
