import { IAppContainer, IRegisterCsses, IRegisterStyleSheets } from "definition";
import { h, tag, render, Component } from "wpa";

export const AppContainerTag = "large-app-container";

@tag(AppContainerTag)
class AppContainer extends Component implements IAppContainer {
    registerCsses: IRegisterCsses<unknown>;
    regsiterStyleSheets: IRegisterStyleSheets<unknown>;
}
