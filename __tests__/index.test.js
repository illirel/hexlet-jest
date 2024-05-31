import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('helllo')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
