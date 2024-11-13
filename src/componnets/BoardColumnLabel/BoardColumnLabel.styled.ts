import styled from 'styled-components';
import { typography } from '../../global/typography.ts';

export const BoardColumnLabelContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0 0 24px 0;
`;

export const ColoredCircle = styled.div`
  background-color: #49c4e5;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const BoardColumnTitle = styled.h2`
  ${typography.heading_s}
`;
