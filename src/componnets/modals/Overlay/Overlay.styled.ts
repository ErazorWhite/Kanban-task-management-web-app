import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  min-width: 320px;
  max-width: 480px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1600;
  padding: 25px 16px;
  overflow-y: scroll;
  transform: translateX(-50%);
`;
