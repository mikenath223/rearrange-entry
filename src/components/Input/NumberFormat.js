import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const CustomNumberFormat = ({
  inputRef, onChange, name, ...other
}) => (
  <NumberFormat
    getInputRef={inputRef}
    onValueChange={values => {
      onChange({
        target: {
          name,
          value: values.value,
        },
      });
    }}
    type="tel"
    mask="_"
    format="(###) ###-####"
    isNumericString
    role="input"
    {...other}
  />
);

CustomNumberFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomNumberFormat;
