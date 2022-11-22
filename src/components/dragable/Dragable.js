import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoList } from "../../redux/common.slice";
import Todo from "../Todo";

const Dragable = () => {
  const { todoList } = useSelector((state) => state.commonState);
  const dispatch = useDispatch();

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "#f2f2f2" : "",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "white" : "",
    ...draggableStyle,
  });
  const reorder = (items, startIndex, endIndex) => {
    const result = Array.from(items);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      todoList,
      result.source.index,
      result.destination.index
    );
    dispatch(updateTodoList(items));
  };

  return (
    <>
      {todoList.length === 0 ? (
        <i>No items TODO</i>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {todoList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Todo key={item.id} arr={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  );
};

export default Dragable;
