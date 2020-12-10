import { Component } from "react";

class TOC extends Component {
  render() {
    const data = this.props.data;
    const list = [];

    data.forEach((element) => {
      list.push(
        <li key={element.id}>
          <a href={"/content/" + element.id}>{element.title}</a>
        </li>
      );
    });

    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default TOC;
