import React from 'react';

export class AddAnimal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: props.add,
    };
  }
  render() {
    return (
      <form onSubmit={(event) => this.state.add(event)}>
        <input placeholder="Add new animal" />
        <label htmlFor="isKing">isKing</label>
        <input id="isKing" type="checkbox" />
        <button type="submit">Add</button>
      </form>
    );
  }
}
