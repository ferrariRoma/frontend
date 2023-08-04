/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { CardAtom, TypoAtom } from '../atoms';
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import { useState } from 'react';
import IconAtom from '../atoms/IconAtom';
import styled from '@emotion/styled';

const todoStubs = [
  {
    id: 1,
    date: new Date('Dec 27, 2022 18:00:30'),
    todo: 'Go to grocery store',
    createdAt: new Date('Dec 26, 2022 18:00:30'),
    duration: 60 * 60,
    done: false,
    categories: null,
    focusTime: 0,
    order: 1,
  },
  {
    id: 2,
    date: new Date('Dec 29, 2022 18:00:30'),
    todo: 'Go to Gym',
    createdAt: new Date('Dec 26, 2022 18:00:30'),
    duration: 60 * 60,
    done: false,
    categories: null,
    focusTime: 0,
    order: 0,
  },
  {
    id: 3,
    date: new Date('Dec 30, 2022 18:00:30'),
    todo: 'Go to institute',
    createdAt: new Date('Dec 28, 2022 18:00:30'),
    duration: 60 * 60 * 2,
    done: true,
    categories: null,
    focusTime: 0,
    order: null,
  },
  {
    id: 4,
    date: new Date('Dec 27, 2022 18:00:30'),
    todo: 'Go to grocery store',
    createdAt: new Date('Dec 26, 2022 18:00:30'),
    duration: 60 * 60,
    done: false,
    categories: null,
    focusTime: 0,
    order: 0,
  },
  {
    id: 5,
    date: new Date('Dec 27, 2022 18:00:30'),
    todo: 'write test code',
    createdAt: new Date('Dec 26, 2022 18:00:30'),
    duration: 60 * 60,
    done: false,
    categories: null,
    focusTime: 0,
    order: 1,
  },
  {
    id: 6,
    date: new Date('Dec 27, 2022 18:00:30'),
    todo: 'work ET',
    createdAt: new Date('Dec 26, 2022 18:00:30'),
    duration: 60 * 60,
    done: false,
    categories: null,
    focusTime: 0,
    order: 2,
  },
  {
    id: 7,
    date: new Date('Dec 27, 2022 18:00:30'),
    todo: 'go to gym',
    createdAt: new Date('Dec 26, 2022 18:00:30'),
    duration: 60 * 60,
    done: false,
    categories: null,
    focusTime: 0,
    order: 3,
  },
  {
    id: 8,
    date: new Date('Dec 27, 2022 18:00:30'),
    todo: 'Go to grocery store',
    createdAt: new Date('Dec 26, 2022 18:00:30'),
    duration: 60 * 60,
    done: false,
    categories: null,
    focusTime: 0,
    order: 4,
  },
];

const TodoListModal = () => {
  const [todoState, setTodoState] = useState<typeof todoStubs>(todoStubs);

  const modifiedSameDate = (
    source: DraggableLocation,
    destination: DraggableLocation,
  ) => {
    setTodoState((prev) => {
      const copyPrev = [...prev];
      const targetTodo = copyPrev[source.index];
      copyPrev.splice(source.index, 1);
      copyPrev.splice(destination.index, 0, targetTodo);
      return copyPrev;
    });
  };

  const modifiedDiffDate = () => {
    alert('diff');
  };

  const onDragDropHandler = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    // 이동이 없을 때
    if (!destination) return;

    // 같은 날 안에서 이동을 했을 때
    if (source.droppableId === destination.droppableId) {
      modifiedSameDate(source, destination);
    } else if (source.droppableId !== destination.droppableId) {
      // 다른 날에서 이동했을 때
      modifiedDiffDate();
    }
  };
  return (
    <>
      <CardAtom>
        <DragDropContext onDragEnd={onDragDropHandler}>
          {/* TODO : droppabledId는 날짜가 되어야 될 듯. 백엔드에서 추가적인 작업을 해줘야 할 듯. todolist를 호출할 때는 날짜로 정렬을 해서 줘야 될 듯 */}
          <Droppable droppableId="today">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <TypoAtom>오늘</TypoAtom>
                {todoState.map(({ id, todo }, idx) => (
                  <Draggable draggableId={String(id)} index={idx} key={id}>
                    {(provided) => (
                      <>
                        <DraggableContainer
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <IconAtom {...provided.dragHandleProps}>
                            <img src={'icons/handle.svg'}></img>
                          </IconAtom>
                          <TypoAtom>{todo}</TypoAtom>
                        </DraggableContainer>
                      </>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </CardAtom>
    </>
  );
};

export default TodoListModal;

const DraggableContainer = styled.div`
  display: flex;
  align-items: center;
`;
