import ReactDOM from 'react-dom';
import {
  MobileNavigationContainer,
  MobileNavigationTitle,
} from './MobileNavigationModal.styled.ts';

export const MobileNavigationModal = () => {
  const portalRoot = document.getElementById('modal-root');
  if (!portalRoot) return;
  return ReactDOM.createPortal(
    <>
      {/*<Backdrop />*/}
      <MobileNavigationContainer>
        <MobileNavigationTitle>ALL BOARDS (3)</MobileNavigationTitle>
      </MobileNavigationContainer>
    </>,
    portalRoot
  );
};
