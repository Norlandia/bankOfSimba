import React from 'react';
import { Header } from './Header';
import { AddAnimal } from './AddAnimal';

const animals = [
  { name: 'Norlandia', balance: 0, isKing: true },
  { name: 'Kond', balance: 0, isKing: false },
  { name: 'Mark', balance: 0, isKing: false },
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: animals,
    };
  }
  addNewAnimal(event) {
    event.preventDefault();
    event.persist();
    const name = event.target[0].value;
    const isKing = event.target[1].checked;

    animals.push({
      name: name,
      balance: 0,
      isKing: isKing,
    });
    this.setState({
      animals: animals,
    });
  }

  render() {
    return (
      <div>
        {this.state.animals.map((animal, index) => (
          <Header animal={animal} key={index} />
        ))}
        <AddAnimal add={this.addNewAnimal.bind(this)} />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <Header />
//     </div>
//    );
// }

// export default App;
