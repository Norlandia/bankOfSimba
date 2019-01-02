import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.animal.name,
      count: props.animal.balance,
      isKing: props.animal.isKing,
    };
  }

  increase() {
    if (this.state.isKing) {
      this.setState({
        count: this.state.count + 10,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  isKingBackground(isKing) {
    if (isKing) {
      return `rgb(0, 255, 0)`;
    }
    return `rgb(255, 0, 0)`;
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.isKingBackground(this.state.isKing),
        }}
      >
        <h1>{`${this.state.name} : ${this.state.count}`}</h1>
        <button onClick={() => this.increase()}>Increase</button>
      </div>
    );
  }
}

// import React, { Component } from 'react';

// class Header extends Component {
//   state = {
//     name: 'Norlandia',
//     count: 0,
//   };

//   increase() {
//     this.setState({
//       count: this.state.count++,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{`${this.state.name} : ${this.state.count}`}</h1>
//         <button onClick={() => this.increase()}>Increase</button>
//       </div>
//     );
//   }
// }

// export default Header;
