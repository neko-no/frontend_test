import { act, render, screen } from '@testing-library/react';
import { DelayedMessage } from './delayedMessage';

describe('DelayedMessage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  test('非同期処理の結果、正しいメッセージが表示される', () => {
    render(<DelayedMessage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
