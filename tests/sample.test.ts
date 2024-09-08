import { add, sub } from '~/sample';

test('1 + 2 = 3 の計算が正しいこと', () => {
  expect(add(1, 2)).toBe(3);
});

test('5 - 3 = 2 の計算が正しいこと', () => {
  expect(sub(5, 3)).toBe(2);
});
