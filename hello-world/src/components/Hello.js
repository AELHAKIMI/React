import React, {Component} from 'react'

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.FirstName} {this.props.LastName}{" "}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Hello
