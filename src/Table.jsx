import PropTypes from 'prop-types';
import { TableRow } from './TableRow';
import './App.css';

export const Table = ({ akcije }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Ime</th>
          <th>Lokacija</th>
          <th>Vrijeme</th>
          <th>Detalji</th>
        </tr>
      </thead>
      <tbody>
        {akcije.map((akc) => (
          <TableRow key={akc.id} akc={akc} />
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  akcije: PropTypes.array.isRequired,
};
