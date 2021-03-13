import { Draggable } from "react-beautiful-dnd";
// import FaceIcon from '@material-ui/icons/Face';

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 16,
  margin: `0 0 ${8}px 0`,
  color: 'lightgrey',

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const ListItem = ({ itemId, itemContent, index }) => {

  return (
    <Draggable key={itemId} draggableId={itemId} index={index}>
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
          {itemContent}
        </div>
      )}
    </Draggable>
  )
}

export default ListItem;