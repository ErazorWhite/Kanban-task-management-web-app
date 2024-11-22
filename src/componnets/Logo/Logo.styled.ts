import styled from 'styled-components';
import { typography } from '../../global/utilities/typography.ts';
import { TABLET_BP } from '../../global/utilities/breakpoints.ts';
import { Link } from 'react-router-dom';

export const LogoBox = styled(Link)`
  ${typography.heading_xl};
  display: flex;
  gap: 16px;
  align-items: center;
  text-decoration: none;
  color: var(--color-primary-fg);
  padding: 20px 16px;

  @media screen and ${TABLET_BP} {
    width: 260px;
    border-right: 1px solid var(--color-border);
  }
`;

export const LogoText = styled.span`
  display: none;
  font-size: 0;

  @media screen and ${TABLET_BP} {
    ${typography.heading_xl};
    font-size: 32px;
    display: block;
  }
`;
