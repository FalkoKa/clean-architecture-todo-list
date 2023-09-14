import { LuEdit } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';
import { BiSolidSave } from 'react-icons/bi';
import styled from 'styled-components';
import { ChangeEvent, useContext, useState } from 'react'; // useEffect, useRef
import { Context } from './Provider.ts';
import { ContextType } from './Provider.ts';
import { PresentableListItem } from '../../application/AddItemToList.ts';

// const useOutsideClick = (callback) => {
//     const ref = useRef();
//
//     useEffect(() => {
//         const handleClick = (event) => {
//             callback();
//         };
//
//         document.addEventListener('click', handleClick);
//
//         return () => {
//             document.removeEventListener('click', handleClick);
//         };
//     }, []);
//
//     return ref;
// };

type Props = {
  item?: PresentableListItem;
};

const TaskItem = ({ item }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState(item?.title);
  const context: ContextType | null = useContext(Context);

  const handleDoubleClick = () => {
    setEdit(true);
  };

  const handleDelete = (id: string | undefined): void => {
    if (!id) return;
    context?.controller?.executeRemoveItemFromList(id);
  };

  const handleChangeStatus = (id: string | undefined): void => {
    if (!id) return;
    context?.controller?.executeChangeItemStatus(id);
  };

  const handleSave = (id: string | undefined) => {
    if (!id) return;
    setEdit(false);
    if (title) {
      context?.controller?.executeEditItemTitle({ id, newTitle: title });
    }
  };

  // const handleClickOutside = () => {
  //     setEdit(false);
  // };
  //
  // const ref = useOutsideClick(handleClickOutside)

  return (
    <ItemWrapper>
      <IconWrapper>
        <input
          type="checkbox"
          id={item?.id}
          checked={item?.status}
          onChange={() => handleChangeStatus(item?.id)}
        />
        {edit ? (
          <>
            <EditInput
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              defaultValue={item?.title}
              value={title}
            />
          </>
        ) : (
          <Task
            htmlFor={item?.id}
            onDoubleClick={handleDoubleClick}
            className={item?.status ? 'done' : 'undone'}
          >
            {item?.title}
          </Task>
        )}
      </IconWrapper>
      <IconWrapper>
        {edit ? (
          <BiSolidSave onClick={() => handleSave(item?.id)} size={20} />
        ) : (
          <LuEdit onClick={() => setEdit((prev) => !prev)} />
        )}
        <MdDelete onClick={() => handleDelete(item?.id)} size={20} />
      </IconWrapper>
    </ItemWrapper>
  );
};

const Task = styled.label`
  text-decoration: ${(props): string =>
    props.className === 'done' ? 'line-through' : 'none'};
`;

const EditInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const ItemWrapper = styled.article`
  font-size: 0.7rem;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default TaskItem;
