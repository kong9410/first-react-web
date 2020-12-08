import { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Contnet";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: "WEB",
        subTitle: "World Wide Web",
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          subTitle={this.state.subject.subTitle}
        ></Subject>
        <TOC></TOC>
        <Content
          title="html"
          desc="This is HyperText Markup Language"
        ></Content>
      </div>
    );
  }
}

export default App;
