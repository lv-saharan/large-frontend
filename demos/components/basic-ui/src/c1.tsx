import { h, tag, Component } from "wpa";

const Tag = "com.hh.ui-c1";
@tag(Tag)
class C1 extends Component {
  render() {
    return <h2>C1</h2>;
  }
}
export { Tag as C1Tag };
