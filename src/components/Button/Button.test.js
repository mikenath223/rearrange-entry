import { render } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  const props = {
    handleClick: jest.fn(),
    isDisabled: false,
  };

  it('should match snapshot', () => {
    const { container } = render(<Button {...props} />);

    expect(container).toMatchSnapshot();
  });
});
