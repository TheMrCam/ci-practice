import Default, { init, greet } from '../src'

test('Hello, World!', () => {
  expect(init()).toBe('Hello, World!')
})

test.each(['Alice', 'Bob', 'Cameron'])('Hello, %s!', (name) => {
  expect(greet(name)).toBe(`Hello, ${name}!`)
})

test('default export', () => {
  expect(Default()).toBe(init())
})
