/* eslint-disable react/button-has-type */
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
  // console.log('children :>> ', children);
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
    // console.log('props :>> ', props);
  }

  render() {
    // console.log('this.props :>> ', this.props);
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

class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }

  increment(e) {
    e.preventDefault();
    this.setState((state, props) => ({ n: state.n + 1 }));
  }

  render() {
    return (
      <div>
        Valeur: {this.state.n}
        <button onClick={this.increment.bind(this)} type="button">
          Incrementer
        </button>
      </div>
    );
  }
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: props.start,
      step: props.step,
      timer: null,
    };
  }

  componentDidMount() {
    // this.timer = window.setInterval(() => {
    //   const number = this.state.n + 1;
    //   this.setState({
    //     n: number,
    //   });
    // }, 1000);
    // this.timer = window.setInterval(this.increment.bind(this), 1000);
    this.play();
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timer);
  }

  increment() {
    // this.setState((prevState) => ({ n: prevState.n + 1 }));
    // this.setState(function (state, props) {
    //   return { n: state.n + 1 };
    // });
    // this.setState((state, props) => ({ n: state.n + state.step }));
    this.setState((state, props) => ({ n: state.n + props.step }));
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState({ timer: null });
  }

  play() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }

  toggle() {
    return this.state.timer ? this.pause() : this.play();
  }

  reset() {
    this.setState({ n: 0 });
  }

  render() {
    const method = this.state.timer
      ? this.pause.bind(this)
      : this.play.bind(this);
    const label = this.state.timer ? 'pause' : 'play';

    return (
      <div>
        Valeur: {this.state.n}
        <button onClick={this.toggle.bind(this)}>{label}</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    );
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
  pause: false,
};

function Home() {
  return (
    <div>
      <Welcome name="Dorothée" />
      <Welcome name="Jean" />
      <Clock />
      {/* <ManualIncrementer /> */}
      <Incrementer />
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector('#app'));








 // toggleButton() {
  //   console.log('this.state :>> ', this.state);
  //   if (this.state.pause) {
  //     this.timer = window.setInterval(this.increment.bind(this), 1000);
  //     this.setState((state) => ({ pause: false, ...state }));
  //     console.log('IF this.state :>> ', this.state);
  //     console.log('IF this.timer :>> ', this.timer);

  //   }
  //   else {
  //     console.log('ElSE this.timer :>> ', this.timer);

  //     window.clearInterval(this.timer);
  //     this.setState((state) => ({ pause: true, ...state }));
  //     console.log('ELSE this.state :>> ', this.state);

  //   }
  //   console.log('this.state end :>> ', this.state);
  // }