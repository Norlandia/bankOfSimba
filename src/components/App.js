import React from 'react';
import { Header } from './Header';

const animals = [
  {name: 'Norlandia', balance: 0, isKing: true},
  {name: 'Kond', balance: 0, isKing: false},
  {name: 'Mark', balance: 0, isKing: false},

];

export const App = () => {
  return (
    <div>
      {animals.map((animal, index) => (
        <Header animal={animal} key={index} />
      ))}
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <Header />
//     </div>
//    );
// }

// export default App;
