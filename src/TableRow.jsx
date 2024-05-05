import PropTypes from 'prop-types';
import { useState } from 'react';
import { Details } from './Details';

export const TableRow = ({ id, akcija }) => {
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  const { naziv, grad, datum } = akcija;

  const toggleIsDetailsOpened = () => {
    setIsDetailsOpened(!isDetailsOpened);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{naziv}</td>
      <td>{grad}</td>
      <td>{datum}</td>
      <td>
        <button onClick={toggleIsDetailsOpened}>Info</button>
      </td>
      {isDetailsOpened && <Details akcija={(id, akcija)} />}
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.number,
  akcija: {
    naziv: PropTypes.string,
    grad: PropTypes.string,
    datum: PropTypes.string,
  },
};
