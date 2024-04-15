import { h, tag, Component } from "wpa";

import { createManifest } from "./util";

export const manifest = createManifest("c2");

@tag(manifest.tag)
class C1 extends Component {
  render() {
    return <h2>C2</h2>;
  }
}
 
