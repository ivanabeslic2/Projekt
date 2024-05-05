import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { FormEntry } from './FormEntry';
import { Table } from './Table';

export const Activites = () => {
  const [actions, setActions] = useState([]);
  const [isFormEntryOpened, setIsFormEntryOpened] = useState(false);

  useEffect(() => {
    const fetchActions = () => {
      axios
        .get('http://localhost:3001/akcije')
        .then((res) => setActions(res.data));
    };

    fetchActions();
  }, []);

  const toggleIsEnterFormOpened = () => {
    setIsFormEntryOpened(!isFormEntryOpened);
  };

  return (
    <div>
      <h2>Popis:</h2>
      <Table akcije={actions} />
      <button onClick={toggleIsEnterFormOpened}>+</button>
      {isFormEntryOpened && <FormEntry />}
    </div>
  );
};
