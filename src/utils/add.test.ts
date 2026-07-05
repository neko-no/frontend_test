import { add } from './add';

it('add関数がユーザーの年齢を加算して合計年齢を出す', () => {
  // Arrange ユーザーの年齢情報を準備

  const userAge = 28;
  const friendAge = 32;

  // Act 関数を実行
  const totalAge = add(userAge, friendAge);

  // Assert: 関数の結果を検証
  expect(totalAge).toBe(60);
});
