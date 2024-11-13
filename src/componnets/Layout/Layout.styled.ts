import styled from 'styled-components';
import { typography } from '../../global/typography.ts';

export const ExpandWrapper = styled.div`
  //display: flex;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  ${typography.heading_l}
  overflow-x: scroll;
  flex: 1;
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  padding: 24px 16px;

  background-color: var(--color-secondary-body-bg);
  color: var(--color-medium-grey);
`;
