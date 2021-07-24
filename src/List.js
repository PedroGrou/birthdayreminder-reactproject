import React from 'react';
import { BsFillDashCircleFill } from 'react-icons/bs';

const List = ({ people, setPeople }) => {
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);

    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="person-item">
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <div>
              <button type="button" className="btn" onClick={() => removeItem(id)}>
                <BsFillDashCircleFill />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
