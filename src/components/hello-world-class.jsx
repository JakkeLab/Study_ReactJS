import { Component } from "react";

export class HelloWorld2 extends Component {
  constructor() {
    this.super();
    console.log("This has been initialized!");
  }

  render() {
    const { name, surname } = this.props.person;
    return (
      <h1>
        Hello {name} {surname}!
      </h1>
    );
  }
}
