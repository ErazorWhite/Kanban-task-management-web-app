import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  min-width: 320px;
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1600;
  padding: 25px 16px;
  overflow-y: scroll;
  transform: translate(-50%, -50%);
`;
