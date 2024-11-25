import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './componnets/App/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { BASENAME } from './global/utilities/constants.ts';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
        basename={BASENAME}
      >
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </DndProvider>
  </StrictMode>
);
