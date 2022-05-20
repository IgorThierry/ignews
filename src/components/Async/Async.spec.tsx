import { render, screen, waitFor } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello World')).toBeInTheDocument();
  /* expect(
    await screen.findByText('Button', {}, { timeout: 1000 }),
  ).toBeInTheDocument(); */

  /* await waitFor(() => {
    return expect(screen.getByText('Button')).toBeInTheDocument();
  }); */

  /*  await waitForElementToBeRemoved(screen.queryByText('Button')); */

  await waitFor(() => {
    return expect(screen.queryByText('Button')).not.toBeInTheDocument();
  });
});