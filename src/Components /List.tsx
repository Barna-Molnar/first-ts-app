import React from 'react';
import { Istate as Iprops } from '../App';

const List: React.FC<Iprops> = ({ people }) => {
  ////
  const renderList = (): JSX.Element[] => {
    return people.map((person, idx) => {
      return (
        <li className="List" key={idx}>
          <div className="List-header">
            <img src={person.url} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old </p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
