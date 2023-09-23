import { hello, doMath, greet } from '../src/index.js'

test('Test Hello', () => {
	expect(hello()).toBe('Hello World')
})

test('Do math', () => {
	expect(doMath(2, 4)).toBe(8)
})

test('Greet', () => {
	expect(greet('Foo')).toBe('Hell Foo')
})