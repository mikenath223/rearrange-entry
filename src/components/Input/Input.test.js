import { render } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  const props = {
    entry: '',
    handleSetEntry: jest.fn(),
  };

  it('should match snapshot', () => {
    const { container } = render(<Input {...props} />);

    expect(container).toMatchSnapshot();
  });
});
