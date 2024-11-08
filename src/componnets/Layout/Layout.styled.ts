import styled from 'styled-components';
import { typography } from '../../global/typography.ts';

export const Main = styled.main`
  ${typography.heading_l}
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  background-color: var(--color-secondary-body-bg);
  color: var(--color-medium-grey);
`;
