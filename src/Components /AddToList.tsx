import React, { useState } from 'react';
import { Istate as Props, NoteState } from '../App';

interface Iprops {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
  note: NoteState;
  setNote: React.Dispatch<React.SetStateAction<NoteState>>;
}

const AddToList: React.FC<Iprops> = ({ people, setPeople, note, setNote }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClickNote = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    console.log('faszom');
    setNote({
      ...note,
      secondNote: input.note,
    });
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (!input.name || !input.age || !input.url) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: '',
      age: '',
      url: '',
      note: '',
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="img-url"
        className="AddToList-input"
        value={input.url}
        name="url"
        onChange={handleChange}
      />
      <textarea
        placeholder="note"
        className="AddToList-input"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Set People
      </button>
      <br></br>
      <button className="AddToList-btn" onClick={handleClickNote}>
        Set note
      </button>
    </div>
  );
};

export default AddToList;
