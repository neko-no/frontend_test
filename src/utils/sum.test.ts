import { sum } from './sum';

describe('sum関数の単体テスト', () => {
  it('2つの数値の合計を返すこと', () => {
    expect(sum([1, 2])).toBe(3);
  });

  it('負の値を含めても正しく計算できること', () => {
    expect(sum([-5, 5])).toBe(0);
  });
});
