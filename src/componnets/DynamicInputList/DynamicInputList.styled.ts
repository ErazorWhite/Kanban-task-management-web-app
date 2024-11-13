import styled from 'styled-components';
import { StyledButton } from '../buttons/Button/Button.styled.ts';

export const DynamicInputListContainer = styled.div`
  margin: 24px 0 0;

  & > ${StyledButton} {
    margin-top: 12px;
  }
  & + ${StyledButton} {
    margin-top: 24px;
  }
`;

export const DynamicInputListLegend = styled.legend`
  margin: 0 0 8px 0;
`;

export const DynamicInputContainer = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 12px;
  }
`;
