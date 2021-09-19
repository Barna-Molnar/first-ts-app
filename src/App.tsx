import React, { createContext, useState } from 'react';
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

let notes = {
  firstNote: 'this is the fist one ',
  secondNote: 'this is the second one ',
};

export type NoteState = typeof notes;

export const NoteContext = createContext<NoteState>(notes);

function App() {
  const [people, setPeople] = useState<Istate['people']>([
    {
      name: 'Barni',
      age: 32,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKFokimt_nezidKej5ilPoum8yWBY7lzh81tvvLSxk2f6laIuV_X7RWD6aNandvyz664&usqp=CAU',
      note: 'legyen itt vmi nem tudom mi ',
    },
  ]);
  const [note, setNote] = useState<NoteState>(notes);
  console.log(note, NoteContext);

  return (
    <NoteContext.Provider value={note}>
      <div className="App">
        <Header />
        <List people={people} />
        <AddToList
          people={people}
          setPeople={setPeople}
          note={note}
          setNote={setNote}
        />
      </div>
    </NoteContext.Provider>
  );
}

export default App;
