import { sum } from './sum';

describe('sum関数の単体テスト', () => {
  it('空の配列を私た場合、結果は0になる', () => {
    const number: number[] = [];

    const result = sum(number);

    expect(result).toBe(0);
  });

  it('複数の正の数値を渡した場合、正しく合計を返す', () => {
    const numbers = [1, 2, 3];
    const result = sum(numbers);
    expect(result).toBe(6);
  });

  it('負の値を含めても正しく計算できること', () => {
    const numbers = [-1, 5, -3];
    const result = sum(numbers);
    expect(result).toBe(1);
  });

  it('要素が1つだけの配列はそのまま返す', () => {
    const numbers = [42];
    const result = sum(numbers);
    expect(result).toBe(42);
  });
});
