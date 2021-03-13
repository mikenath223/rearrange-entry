import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import CustomNumberFormat from './NumberFormat';

const Input = ({ entry, handleSetEntry }) => (
  <TextField
    value={entry}
    onChange={e => handleSetEntry(e.target.value)}
    name="phone-number"
    label="Enter phone number"
    variant="outlined"
    InputProps={{
      inputComponent: CustomNumberFormat,
    }}
  />
);

Input.propTypes = {
  entry: PropTypes.string.isRequired,
  handleSetEntry: PropTypes.func.isRequired,
};

export default Input;
