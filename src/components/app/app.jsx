import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import { Main } from '../main/main';
import { AppRoute } from '../../const';
import { NotFound } from '../not-found/not-found';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export { App };
