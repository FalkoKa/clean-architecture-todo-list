import styled from 'styled-components';
import { FormEvent, useContext, useState } from 'react';
import { Context } from './Provider.ts';

const Form = () => {
  const context = useContext(Context);
  const [itemName, setItemName] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!itemName) return;
    context?.controller?.executeAddItemToList(itemName);
    setItemName('');
    console.log(context?.viewModel?.list);
  };

  return (
    <FormWrapper onSubmit={submitHandler} action="">
      <Wrapper>
        <label htmlFor="title">What's to do?</label>
        <input
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
          type="text"
        />
      </Wrapper>
      <Button>Add task</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 100%;
  margin: 30px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 10px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const Button = styled.button`
  color: white;
  background: black;
  border: none;
  font-size: 0.8rem;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;
export default Form;
