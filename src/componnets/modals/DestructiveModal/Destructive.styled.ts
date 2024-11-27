import styled from 'styled-components';
import { TABLET_BP } from '../../../global/utilities/breakpoints.ts';

export const DestructiveModalButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0 0 0;
  justify-content: space-between;

  @media screen and ${TABLET_BP} {
    flex-direction: row;
  }
`;
