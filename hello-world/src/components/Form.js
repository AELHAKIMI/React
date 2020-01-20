import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react"
    };
  }
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    });
  };
  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="">Comments:</label>
            <textarea value={comments} onChange={this.handleCommentsChange} />
          </div>
          <div>
            <label htmlFor="">Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="angular">Angular</option>
              <option value="react">React </option>
              <option value="vue">Vue </option>
            </select>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
