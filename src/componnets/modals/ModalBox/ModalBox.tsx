import { ModalBoxContainer, ModalBoxHeadingWrapper, ModalBoxTitle } from './ModalBox.styled.ts';
import { FC, ReactNode, useEffect } from 'react';
import { Overlay } from '../Overlay/Overlay.styled.ts';
import { Backdrop } from '../../Backdrop/Backdrop.tsx';
import ReactDOM from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { DropdownAction, IDropdownAction } from '../../dropdown/DropdownAction/DropdownAction.tsx';

interface IModalBoxProps {
  title: string;
  dropdownActionMenu?: IDropdownAction[];
  children?: ReactNode;
  isDestructive?: boolean;
}

export const ModalBox: FC<IModalBoxProps> = ({
  title,
  dropdownActionMenu,
  isDestructive = false,
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const portalRoot = document.getElementById('modal-root');
  if (!portalRoot) return null;
  const handleCloseModal = () => {
    navigate(location.state?.backgroundLocation || '/', { replace: true });
  };

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={handleCloseModal}>
        <Overlay>
          <ModalBoxContainer onClick={(e) => e.stopPropagation()}>
            <ModalBoxHeadingWrapper>
              <ModalBoxTitle isDestructive={isDestructive}>{title}</ModalBoxTitle>
              {dropdownActionMenu && <DropdownAction actionList={dropdownActionMenu} />}
            </ModalBoxHeadingWrapper>
            {children && children}
          </ModalBoxContainer>
        </Overlay>
      </Backdrop>
    </>,
    portalRoot
  );
};
