import { LuEdit } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';
import { BiSolidSave } from 'react-icons/bi';
import styled from 'styled-components';
import { useState } from 'react'; // useEffect, useRef
import { Item } from '../../domains/Item.ts';

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
  item?: Item;
};
const TaskItem = ({ item }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleDoubleClick = () => {
    setEdit(true);
  };

  // const handleClickOutside = () => {
  //     setEdit(false);
  // };
  //
  // const ref = useOutsideClick(handleClickOutside)

  return (
    <ItemWrapper>
      <IconWrapper>
        <input type="checkbox" checked={item?.status} onChange={() => {}} />
        {edit ? (
          <>
            <EditInput defaultValue={item?.title} />
          </>
        ) : (
          <span onDoubleClick={handleDoubleClick}>{item?.title}</span>
        )}
      </IconWrapper>
      <IconWrapper>
        {edit ? (
          <BiSolidSave onClick={() => setEdit((prev) => !prev)} size={20} />
        ) : (
          <LuEdit onClick={() => setEdit((prev) => !prev)} />
        )}
        <MdDelete onClick={() => console.log('delete')} size={20} />
      </IconWrapper>
    </ItemWrapper>
  );
};

const EditInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 0;
  //border: none;
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
