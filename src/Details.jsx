import './App.css';
import PropTypes from 'prop-types';

export const Details = ({ id, naziv, grad, organizator, datum, voditelj }) => {
  return (
    <div>
      <h2>Detalji aktivnosti</h2>
      <p>ID: {id}</p>
      <p>Naziv: {naziv}</p>
      <p>Opis: {grad}</p>
      <p>Opis: {organizator}</p>
      <p>Opis: {datum}</p>
      <p>Opis: {voditelj}</p>
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.number,
  naziv: PropTypes.string,
  grad: PropTypes.string,
  organizator: PropTypes.string,
  datum: PropTypes.string,
  voditelj: PropTypes.string,
};
