import { TextField } from '@material-ui/core';
import CustomNumberFormat from './NumberFormat';

const Input = ({ entry, handleSetEntry }) => {
  return (
    <TextField
      value={entry}
      onChange={(e) => handleSetEntry(e.target.value)}
      name="phone-number"
      label="Enter phone number"
      variant="outlined"
      InputProps={{
        inputComponent: CustomNumberFormat,
      }}
    />
  )
}

export default Input;