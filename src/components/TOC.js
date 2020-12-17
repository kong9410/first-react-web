import { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    return this.props.data !== newProps.data;
  }

  render() {
    const data = this.props.data;
    const list = [];

    data.forEach((element) => {
      list.push(
        <li key={element.id}>
          <a
            href={"/content/" + element.id}
            data-id={element.id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {element.title}
          </a>
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
