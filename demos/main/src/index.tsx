import { h, tag, render, Component } from "wpa";

const MainTag = "com.hh-main";
@tag(MainTag)
class MainApp extends Component {
  render() {
    return <h1>Main App</h1>;
  }
}
render(<MainTag>Main App</MainTag>, "body");
