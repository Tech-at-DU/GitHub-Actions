export function hello(): string {
	return 'Hello World'
}

export function doMath(a: number, b: number): number {
	return a * b
}

export function random(n: number): number {
	return Math.floor(Math.random() * n)
}

export function greet(name: string): string {
	return `Hello ${name}`
}