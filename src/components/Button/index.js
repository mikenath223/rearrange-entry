import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

const CustomButton = ({ handleClick, isDisabled }) => (
  <Button
    variant="contained"
    color="default"
    startIcon={<AddCircleOutline />}
    onClick={handleClick}
    disabled={isDisabled}
    role="button"
  >
    Add
  </Button>
);

CustomButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default CustomButton;
