import { ModalBoxContainer, ModalBoxHeadingWrapper, ModalBoxTitle } from './ModalBox.styled.ts';
import { FC, ReactNode } from 'react';
import { Overlay } from '../Overlay/Overlay.styled.ts';
import { DropdownMenuButton } from '../../buttons/DropdownMenuButton/DropdownMenuButton.tsx';
import { sizes } from '../../../global/constants.ts';
import { Backdrop } from '../../Backdrop/Backdrop.tsx';
import ReactDOM from 'react-dom';

interface IModalBoxProps {
  title: string;
  dropDownMenu?: () => void;
  children?: ReactNode;
  isDestructive?: boolean;
}

export const ModalBox: FC<IModalBoxProps> = ({
  title,
  dropDownMenu,
  isDestructive = false,
  children,
}) => {
  const portalRoot = document.getElementById('modal-root');
  if (!portalRoot) return;
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <Overlay>
        <ModalBoxContainer>
          <ModalBoxHeadingWrapper>
            <ModalBoxTitle isDestructive={isDestructive}>{title}</ModalBoxTitle>
            {dropDownMenu && <DropdownMenuButton onClick={dropDownMenu} size={sizes.MEDIUM} />}
          </ModalBoxHeadingWrapper>
          {children && children}
        </ModalBoxContainer>
      </Overlay>
    </>,
    portalRoot
  );
};
