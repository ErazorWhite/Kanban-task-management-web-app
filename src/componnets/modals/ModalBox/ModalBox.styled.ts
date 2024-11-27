import styled from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';

export const ModalBoxContainer = styled.div`
  width: 100%;
  ${typography.body_l};
  color: var(--color-secondary-fg);
  background-color: var(--color-primary-body-bg);
  padding: 24px;
  border-radius: 6px;
`;

export const ModalBoxHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 24px 0;
`;

interface IModalBoxTitleProps {
  isDestructive: boolean;
}

export const ModalBoxTitle = styled.h4.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDestructive',
})<IModalBoxTitleProps>`
  ${typography.heading_l};
  color: ${({ isDestructive }) => (isDestructive ? `var(--color-red)` : `var(--color-primary-fg)`)};
`;
