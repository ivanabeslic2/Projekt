import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { Switch } from './Switch';

export const Layout = () => {
  return (
    <div className="layout">
      <div className="traka">
        <Link to="/pocetna">
          <button>Početna</button>
        </Link>
        <Link to="/aktivnosti">
          <button>Aktivnosti</button>
        </Link>
        <Link to="/volonteri">
          <button>Volonteri</button>
        </Link>
        <Link to="/udruge">
          <button>Udruge</button>
        </Link>
        <Switch />
      </div>
      <Outlet />
      <div className="contactInfo">
        <h2>Kontakt informacije</h2>
        <p>
          <a href="tel:+385981889651">Telefon</a>
        </p>
        <p>
          <a href="ivana.beslic2@gmail.com">Email</a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps/place/Vrli%C4%8Dka+ul.+15,+21230,+Sinj/@43.7028019,16.6345945,17z/data=!3m1!4b1!4m6!3m5!1s0x134aac024d93edf9:0xaf504230e433a63c!8m2!3d43.7027981!4d16.6371694!16s%2Fg%2F11sgn7n3vm?entry=ttu"
            target="_blank"
          >
            Adresa
          </a>
        </p>
        <p>
          <a href="www.linkedin.com/in/ivana-bešlić-a44361184">LinkedIn</a>
        </p>
      </div>
    </div>
  );
};
