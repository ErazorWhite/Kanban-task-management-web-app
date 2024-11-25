import styled from 'styled-components';

interface IStyledBoardContainerProps {
  isOver: boolean;
}

export const StyledBoardContainer = styled.div.withConfig({
  shouldForwardProp: (props) => props !== 'isOver',
})<IStyledBoardContainerProps>`
  transition: var(--animation-ease-in);
  box-shadow: ${({ isOver }) => (isOver ? '0 0 10px var(--color-main-purple-opacity-10)' : 'none')};
`;

export const BoardColumContent = styled.div`
  min-width: 280px;
  width: 280px;
`;
