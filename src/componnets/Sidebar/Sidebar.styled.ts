import styled from 'styled-components';
import { typography } from '../../global/typography.ts';
import { MOBILE_BP } from '../../global/breakpoints.ts';

export const Aside = styled.aside`
  min-width: 260px;
  background-color: var(--color-primary-body-bg);
  border-right: 1px solid var(--color-medium-grey-opacity-25);

  @media screen and ${MOBILE_BP} {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  ${typography.heading_xl};
  display: flex;
  gap: 16px;
  margin: 0 0 54px 0;
`;
