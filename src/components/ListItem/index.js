import { Draggable } from "react-beautiful-dnd";
import FaceIcon from '@material-ui/icons/Face';

const ListItem = ({ }) => {

  return (
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
          {item.content}
        </div>
      )}
    </Draggable>
  )
}

export default ListItem;