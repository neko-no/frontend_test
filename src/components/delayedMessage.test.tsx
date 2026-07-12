import { render, screen } from '@testing-library/react';
import { DelayedMessage } from './delayedMessage';

test('非同期処理の結果、正しいメッセージが表示される', async () => {
  render(<DelayedMessage />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Hello World!')).toBeInTheDocument();
});
