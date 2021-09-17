import React, { useState } from 'react';
import { Istate as Iprops } from '../App';

interface Props {
  people: Iprops['people'];
  setPeople: React.Dispatch<React.SetStateAction<Iprops['people']>>;
}

const AddToList: React.FC<Props> = ({ people, setPeople }) => {
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
    </div>
  );
};

export default AddToList;
