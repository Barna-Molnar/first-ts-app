import React, { useState } from 'react';
import './App.scss';
import AddToList from './Components /AddToList';
import Header from './Components /Header';
import List from './Components /List';

export interface Istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: undefined | string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate['people']>([
    {
      name: 'Barni',
      age: 32,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKFokimt_nezidKej5ilPoum8yWBY7lzh81tvvLSxk2f6laIuV_X7RWD6aNandvyz664&usqp=CAU',
      note: 'legyen itt vmi nem tudom mi ',
    },
  ]);

  return (
    <div className="App">
      <Header />
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
