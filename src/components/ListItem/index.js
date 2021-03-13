import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import NumberFormat from 'react-number-format';

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: 16,
  margin: `0 0 ${8}px 0`,
  color: isDragging ? 'black' : 'lightgrey',
  background: isDragging ? 'silver' : 'grey',
  ...draggableStyle,
});

const ListItem = ({ itemId, itemContent, index }) => (
  <Draggable draggableId={itemId} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(
          snapshot.isDragging,
          provided.draggableProps.style,
        )}
      >
        <NumberFormat
          value={itemContent}
          type="tel"
          mask="_"
          format="(###) ###-####"
          displayType="text"
          role="listitem"
        />
      </div>
    )}
  </Draggable>
);

ListItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  itemContent: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ListItem;
