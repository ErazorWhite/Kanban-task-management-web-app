import styled from 'styled-components';
import { MOBILE_BP, TABLET_BP } from '../../global/utilities/breakpoints.ts';

export const ToggleMainBlock = styled.button`
  display: flex;
  gap: 23px;

  justify-content: center;
  align-items: center;
  padding: 14px 0;
  min-width: 235px;
  background-color: var(--color-secondary-body-bg);
  border-radius: 8px;
  overflow: auto;

  @media screen and ${MOBILE_BP} {
    margin: 16px 0 0 0;
  }
  @media screen and ${TABLET_BP} {
    margin: 0 0 16px 0;
  }
`;

interface ToggleOptionProps {
  active: boolean;
}

export const ToggleOption = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<ToggleOptionProps>`
  color: ${({ active }) => (active ? 'var(--color-main-purple)' : 'var(--color-medium-grey)')};
  transition: color 0.3s;
`;

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  width: 38px;
  height: 20px;
  background-color: var(--color-main-purple);
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`;

interface ToggleThumbProps {
  isChecked: boolean;
}

export const ToggleThumb = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isChecked',
})<ToggleThumbProps>`
  position: absolute;
  top: 4px;
  left: ${({ isChecked }) => (isChecked ? 'calc(100% - 15px)' : '3px')};
  width: 12px;
  height: 12px;
  background-color: var(--color-white);
  border-radius: 30px;
  transition: left 0.3s;
  z-index: 0;
`;
