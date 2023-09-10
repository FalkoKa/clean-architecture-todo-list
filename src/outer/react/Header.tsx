import Form from './Form.tsx';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>To Do List</h1>
      <Form />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Header;
