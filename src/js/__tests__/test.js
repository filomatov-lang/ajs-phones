import normalizePhone from '../app.js';

describe('normalizePhone:', () => {
  test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
    ['79771112233', '+79771112233'],
    ['+8911-222-44-55', '+79112224455'],
    ['+79e22-333_44!99*', '+79223334499'],
    ['', null],
  ])('"%s" -> "%s"', (input, expected) => {
    expect(normalizePhone(input)).toBe(expected);
  });
});
