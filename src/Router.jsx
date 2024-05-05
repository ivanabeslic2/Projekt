import { Navigate, Route, Routes } from 'react-router-dom';
import { Activites } from './Activites';
import { Associations } from './Associations';
import { Layout } from './Layout';
import { StartPage } from './StartPage';
import { Volunteers } from './Volunteers';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/pocetna" element={<StartPage />} />
        <Route path="/aktivnosti" element={<Activites />} />
        <Route path="/volonteri" element={<Volunteers />} />
        <Route path="/udruge" element={<Associations />} />
        <Route path="/*" element={<Navigate to="/pocetna" replace />} />
      </Route>
    </Routes>
  );
};

export default Router;
