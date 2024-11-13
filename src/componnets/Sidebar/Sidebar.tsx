import { Aside, LogoContainer } from './Sidebar.styled.ts';
import { Logo } from '../Logo/Logo.tsx';

export const Sidebar = () => {
  return (
    <Aside>
      <LogoContainer>
        <Logo isTextProvided />
      </LogoContainer>
    </Aside>
  );
};
