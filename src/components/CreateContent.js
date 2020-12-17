import { Component } from "react";

class CreateContent extends Component {
  render(h) {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="POST"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <div>
            <input type="text" name="title" placeholder="title" />
            <p>
              <textarea name="desc" placeholder="description" />
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </div>
        </form>
      </article>
    );
  }
}

export default CreateContent;
