import { useCallback } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ListItem from 'components/ListItem';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "black" : "lightgrey",
  padding: 8,
  width: 250,
  minHeight: 50
});

const List = ({ listItems, handleSetListItems }) => {
  const onDragEnd = useCallback(({ source, destination }) => {
    // dropped outside the list
    if (!destination) {
      return;
    }

    const items = reorder(
      listItems,
      source.index,
      destination.index
    );

    handleSetListItems(items);
  }, [listItems, handleSetListItems])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {listItems.map((item, index) => (
              <ListItem key={item.id} itemId={item.id} itemContent={item.entry} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List