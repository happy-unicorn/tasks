import React, { Component, Fragment, PureComponent } from "react";
import ReactDOM from "react-dom";

// У нас есть список имен
// Как предотвратить отрисовку всех элементов массива при вставке нового
// элемента в начало массива
// Редактировать код конечно можно под свое усмотрение.

class App extends Component {
  state = {
    names: ["Георгий", "Даниил", "Марина"]
  };
  addTop = (name) => {
    this.setState((state) => ({
      names: [name, ...state.names]
    }));
  };
  addBottom = (name) => {
    this.setState((state) => ({
      names: [...state.names, name]
    }));
  };
  render() {
    return (
      <Fragment>
        <Names names={this.state.names} />
        <AddName addTop={this.addTop} addBottom={this.addBottom} />
      </Fragment>
    );
  }
}

class AddName extends PureComponent {
  getInput = (el) => {
    this.input = el;
  };
  addToTop = () => {
    if (!this.input.value.trim()) {
      return;
    }
    this.props.addTop(this.input.value);
    this.input.value = "";
  };
  addToBottom = () => {
    if (!this.input.value.trim()) {
      return;
    }
    this.props.addBottom(this.input.value);
    this.input.value = "";
  };
  render() {
    return (
      <Fragment>
        <input ref={this.getInput} />
        <button onClick={this.addToTop}>Add to TOP</button>
        <button onClick={this.addToBottom}>Add to BOTTOM</button>
      </Fragment>
    );
  }
}

class Names extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.names.map((name) => (
          <Name key={name}>{name}</Name>
        ))}
      </ul>
    );
  }
}

class Name extends PureComponent {
  componentDidMount() {
    console.log(`Mounted with ${this.props.children}`);
  }
  componentDidUpdate(prevProps) {
    console.log(`Updated from ${prevProps.children} to ${this.props.children}`);
  }
  render() {
    return <li>{this.props.children}</li>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// нужно поменять
// class Name extends Component -> class Name extends PureComponent
// <Name>{name}</Name> -> <Name key={name}>{name}</Name>