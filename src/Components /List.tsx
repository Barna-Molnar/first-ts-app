import React from 'react';
import { Istate as Iprops } from '../App';
import styled from 'styled-components';

// const UlStyles = styled.ul`
//   border: 1px solid #8d8282;
//   width: 600px;
//   margin: 0 auto;
//   .List {
//     display: flex;
//     align-items: center;

//     &-header {
//       padding: 1rem 3rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       img {
//         width: 120px;
//         border-radius: 50rem;
//       }
//       h2 {
//         margin-left: 2rem;
//         font-size: 2rem;
//       }
//     }
//     p {
//       font-size: 1.6rem;
//     }
//     &-note {
//       margin-left: 2rem;
//       font-size: 1.4rem;
//       color: #a19797;
//     }
//   }
// `;

interface Props {
  people: Iprops['people'];
  setPeople: React.Dispatch<React.SetStateAction<Iprops['people']>>;
}

const List: React.FC<Props> = ({ people }) => {
  ////
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
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
