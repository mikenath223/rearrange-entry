import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './index';

describe('Home', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it('should add phone number to list', async () => {
    const { getByRole } = render(<Home />);
    const input = getByRole('input');
    const button = getByRole('button');

    const testNumber = '(123) 456-7890';
    userEvent.type(input, testNumber);
    userEvent.click(button);
    const listItem = await screen.findByRole('listitem');

    expect(listItem.textContent).toBe(testNumber);
  });
});
