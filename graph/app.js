/* eslint-disable max-len */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
// import React from 'react';
// import ReactDOM from 'react-dom';
const { React, ReactDOM } = window;
React.Component = window.React.Component;

function WelcomeFunc({ name, children }) {
  // console.log('props :>> '); /* Object { name: "Jean" } */
  console.log('children :>> ', children);
  return (
    <div>
      <h1>Bnojour {name}</h1>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    console.log('props :>> ', props);
  }

  render() {
    console.log('this.props :>> ', this.props);
    return (
      <div>
        <h1>Bnojour {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }

  componentDidMount() {
    // this.timer = window.setInterval(this.tick.bind(this), 1000);
    this.timer = window.setInterval(() => {
      // console.log('DidMount this :>> ', this);
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    // console.log('this :>> ', this);
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        Il est {this.state.date.toLocaleDateString()}{' '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start, step: props.step };
    this.timer = null;
  }

  componentDidMount() {
    // this.timer = window.setInterval(() => {
    //   const number = this.state.n + 1;
    //   this.setState({
    //     n: number,
    //   });
    // }, 1000);
    this.timer = window.setInterval(this.increment.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  increment() {
    // this.setState((prevState) => ({ n: prevState.n + 1 }));
    // this.setState(function (state, props) {
    //   return { n: state.n + 1 };
    // });
    // this.setState((state, props) => ({ n: state.n + state.step }));
    this.setState((state, props) => ({ n: state.n + props.step }));
  }

  render() {
    return <div>{this.state.n}</div>;
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

function Home() {
  return (
    <div>
      <Welcome name="Dorothée" />
      <Welcome name="Jean" />
      <Clock />
      <Incrementer start={10} />
      <Incrementer start={10} step={10} />
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector('#app'));
