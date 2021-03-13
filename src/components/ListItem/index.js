import { Draggable } from "react-beautiful-dnd";
import NumberFormat from 'react-number-format';

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 16,
  margin: `0 0 ${8}px 0`,
  color: isDragging ? 'black' : 'lightgrey',

  // change background colour if dragging
  background: isDragging ? "silver" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const ListItem = ({ itemId, itemContent, index }) => {

  return (
    <Draggable draggableId={itemId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}>
          <NumberFormat value={itemContent}
            type="tel"
            mask="_"
            format="(###) ###-####"
            displayType="text" />
          {/* {itemContent} */}
        </div>
      )}
    </Draggable>
  )
}

export default ListItem;