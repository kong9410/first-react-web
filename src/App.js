import { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.maxContentId = 3;
    this.state = {
      mode: "welcome",
      welcome: {
        title: "Welcome",
        desc: "Hello, React",
      },
      selectedContentId: 2,
      subject: {
        title: "WEB",
        subTitle: "World Wide Web",
      },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is Hyper Text Markup Language" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JS is for interactive" },
      ],
    };
  }
  getReadContent() {
    const finding = this.state.contents.find(
      (content) => content.id === this.state.selectedContentId
    );
    return finding;
  }
  getContent() {
    let _title = null;
    let _desc = null;
    let article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      const content = this.getReadContent();
      console.log(content);
      article = (
        <ReadContent title={content.title} desc={content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      article = (
        <CreateContent
          onSubmit={function (title, desc) {
            this.maxContentId = this.maxContentId + 1;

            const newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.maxContentId,
              title: title,
              desc: desc,
            });

            this.setState({
              contents: newContents,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      const content = this.getReadContent();
      article = (
        <UpdateContent
          data={content}
          onSubmit={function (id, title, desc) {
            let contents = Array.from(this.state.contents);

            contents.forEach((content, index) => {
              if (content.id === id) {
                contents[index] = {
                  id: id,
                  title: title,
                  desc: desc,
                };
              }
            });

            this.setState({
              contents: contents,
            });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return article;
  }

  render() {
    return (
      <div className="App">
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        >
          HOHO
        </a>

        <Subject
          title={this.state.subject.title}
          subTitle={this.state.subject.subTitle}
        ></Subject>

        <TOC
          onChangePage={function (id) {
            this.setState({ mode: "read", selectedContentId: Number(id) });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>

        <Control
          onChangeMode={function (mode) {
            if (mode === "delete") {
              if (window.confirm("really")) {
                const contents = Array.from(this.state.contents);
                contents.forEach((content, index) => {
                  if (content.id === this.state.selectedContentId) {
                    contents.splice(index, 1);
                  }
                });
                this.setState({
                  mode: "welcome",
                  contents: contents,
                });
                alert("deleted");
              }
            } else {
              this.setState({
                mode: mode,
              });
            }
          }.bind(this)}
        ></Control>

        {this.getContent()}
      </div>
    );
  }
}

export default App;
