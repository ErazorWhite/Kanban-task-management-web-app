import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout.tsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};
