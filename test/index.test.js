import { init } from '../src'

test('Hello, World!', () => {
  expect(init()).toBe('Hello, World!')
})

test('Hello, Alice!', () => {
  expect(init.greet('Alice')).toBe('Hello, Alice!')
})
