import Header from './Header.tsx';
import styled from 'styled-components';
import TaskItem from './TaskItem.tsx';
import { useContext } from 'react';
import { Context } from './Provider.ts';

const ListPage = () => {
  const context = useContext(Context);

  return (
    <PageWrapper>
      <Header />
      {context?.viewModel?.list ? (
        <List>
          <h2>To Do:</h2>
          {context.viewModel.list.map((item) => (
            <TaskItem key={item.id} item={item} />
          ))}
        </List>
      ) : (
        <EmptyList>There are no tasks!</EmptyList>
      )}
    </PageWrapper>
  );
};

const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const EmptyList = styled.div`
  font-size: 0.8rem;
  text-align: center;
`;

const PageWrapper = styled.div`
  border: 1px solid black;
  padding: 45px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
`;
export default ListPage;
