import { h, tag, Component } from "wpa";

const Tag = "com.hh.ui-c2";
@tag(Tag)
class C1 extends Component {
  render() {
    return <h2>C2</h2>;
  }
}
export { Tag as C2Tag };
