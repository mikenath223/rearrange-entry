import { Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

const CustomButton = ({ ...other }) => {

  return (
    <Button
      variant="contained"
      color="default"
      startIcon={<AddCircleOutline />}
      disabled
      {...other}>
      Add
    </Button>
  )
};

export default CustomButton;