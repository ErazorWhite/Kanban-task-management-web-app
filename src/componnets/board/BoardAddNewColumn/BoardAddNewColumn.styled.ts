import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBoardAddNewColumn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 280px;
  border-radius: 8px;
  background: var(--color-add-new-column);
  transition: var(--animation-ease-in);

  &:hover,
  &:focus {
    color: var(--color-main-purple);
  }
`;
