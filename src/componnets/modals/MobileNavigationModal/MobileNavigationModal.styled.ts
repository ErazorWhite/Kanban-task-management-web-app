import styled from 'styled-components';
import { typography } from '../../../global/typography.ts';

export const MobileNavigationContainer = styled.div`
  ${typography.heading_m};
  position: fixed;
  z-index: 3000;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 300px;
  padding: 16px 13px 16px 0;
  background-color: var(--color-primary-body-bg);
  color: var(--color-medium-grey);
  border-radius: 8px;
  outline: 5px dashed red;
`;

export const MobileNavigationTitle = styled.h2`
  ${typography.heading_m};
  letter-spacing: 2px;
  padding: 0 0 0 24px;
`;
