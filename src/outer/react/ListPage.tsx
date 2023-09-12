import Header from './Header.tsx';
import styled from 'styled-components';
import TaskItem from './TaskItem.tsx';
import { ViewModel } from '../../adapters/Presenter/ViewModel.ts';
import { PresentableList } from '../../application/AddItemToList.ts';

type Props = {
  viewModel: ViewModel;
};

const ListPage = ({ viewModel }: Props) => {
  const list: PresentableList | undefined = viewModel?.list;
  return (
    <PageWrapper>
      <Header />
      {list?.length ? (
        <List>
          <h2>To Do:</h2>
          {list.map((item) => (
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
