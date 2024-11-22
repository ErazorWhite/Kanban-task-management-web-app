import styled from 'styled-components';
import { typography } from '../../../global/utilities/typography.ts';

export const CheckBoxGroupFieldset = styled.fieldset`
  ${typography.body_l}
  margin: 24px 0 0 0;
`;

export const CheckBoxGroupLegend = styled.legend`
  ${typography.heading_m};
  color: var(--color-secondary-fg);
  margin: 0 0 16px 0;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
