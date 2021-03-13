import { render } from '@testing-library/react';
import List from './index';

describe('List', () => {
  it('should match snapshot', () => {
    const { container } = render(<List
      listItems={[]}
      handleSetListItems={jest.fn()}
    />);

    expect(container).toMatchSnapshot();
  });
});
