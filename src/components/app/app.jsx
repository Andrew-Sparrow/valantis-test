import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Main } from '../main/main';
import { AppRoute } from '../../const';
import { NotFound } from '../not-found/not-found';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
