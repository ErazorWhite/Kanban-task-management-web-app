import styled from 'styled-components';
import { TABLET_BP } from '../../../global/utilities/breakpoints.ts';

export const DropdownMenuButtonBox = styled.button`
  display: flex;
  align-items: center;
  padding: 24px 16px;
  cursor: pointer;

  @media screen and ${TABLET_BP} {
    padding: 24px;
  }
`;
