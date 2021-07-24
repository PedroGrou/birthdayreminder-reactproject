import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="main">
        <section className="container">
          <h2>{people.length} Birthdays Today</h2>
          <List people={people} setPeople={setPeople} />
          <button className="btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
