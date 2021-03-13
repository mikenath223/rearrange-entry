import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const CustomNumberFormat = ({ inputRef, onChange, name, ...other }) => {

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: name,
            value: values.value,
          },
        });
      }}
      type="tel"
      mask="_"
      format="(###) ###-####"
      isNumericString
    />
  );
}

CustomNumberFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomNumberFormat;