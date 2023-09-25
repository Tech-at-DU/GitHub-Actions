import { hello, doMath, greet, pi } from '../src'

test('Test Hello', () => {
	expect(hello()).toBe('Hello World')
})

test('Do math', () => {
	expect(doMath(2, 4)).toBe(8)
})

test('Greet', () => {
	expect(greet('Foo')).toBe('Hello Foo')
})

test('Pi', () => {
	expect(pi()).toBe(3.14)
})