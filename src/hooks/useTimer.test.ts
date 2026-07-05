import { act, renderHook } from '@testing-library/react';
import { useTimer } from './useTimer';

describe('useTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('初期状態では停止している', () => {
    const { result } = renderHook(() => useTimer(5, 500));

    expect(result.current.count).toBe(5);
    expect(result.current.isRunning).toBeFalsy();
  });

  it('startで開始し、指定間隔でカウントが増加する', () => {
    const { result } = renderHook(() => useTimer(0, 500));

    act(() => {
      result.current.start();
    });

    expect(result.current.isRunning).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(result.current.count).toBe(3);
  });

  it('stopでカウントが停止する', () => {
    const { result } = renderHook(() => useTimer(0, 500));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(result.current.count).toBe(3);

    act(() => {
      result.current.stop();
    });

    act(() => {
      vi.advanceTimersByTime(1500);
    });
    expect(result.current.count).toBe(3);
  });

  it('resetで初期値に戻り停止する', () => {
    const { result } = renderHook(() => useTimer(0, 500));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(result.current.count).toBe(3);

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
    expect(result.current.isRunning).toBeFalsy();
  });
});
