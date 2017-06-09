import React, { Component } from 'react';

let colors = ["rainbow", "purple", "blue", "green"];

class Doll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishesGranted: 0,
      currentHairColor: this.props.hairColor
    };
  }

  updateWishes() {
    this.setState(
      {wishesGranted: this.state.wishesGranted + 1}
    );
  }

  updateHair() {
    this.setState(
      {
        currentHairColor: this.state.currentHairColor + Math.ceil(Math.random() * 3)
      }
    )
  }
  render() {
    return (
      <div>
        <p>
          Its name is <span onClick={() => this.updateWishes()}>{this.props.name}</span>.
          It has {colors[this.state.currentHairColor % colors.length]} hair.
        </p>
        <p> It has granted {this.state.wishesGranted} wishes.</p>
        <button onClick={() => this.updateHair()}>Cycle hair color</button>
      </div>
    )
  }
}

export default Doll;
