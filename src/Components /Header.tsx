import React, { useContext } from 'react';
import { NoteContext, NoteState } from '../App';

const Header: React.FC = () => {
  const note = useContext<NoteState>(NoteContext);
  return (
    <div>
      <h1>First ts Application...</h1>
      <div>{note?.firstNote}</div>
      <div>{note?.secondNote}</div>
    </div>
  );
};

export default Header;
