import {
    IApp,
  IAppContainer,
  IRegisterCsses,
  IRegisterStyleSheets,
} from "definition";
import { h, tag, render, Component } from "wpa";

export const AppContainerTag = "large-app-container";

@tag(AppContainerTag)
class AppContainer extends Component implements IAppContainer {
  registerCsses: IRegisterCsses<unknown>;
  regsiterStyleSheets: IRegisterStyleSheets<unknown>;

  render(props) {
    const { apps } = props;
    return (
      <div>
        {(apps as IApp[]).map((app) => (
          <h1>{app.manifest.name}</h1>
        ))}
      </div>
    );
  }
}
