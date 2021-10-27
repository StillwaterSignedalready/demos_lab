declare module xx {
    export const foo: number;
}

declare module 'foo' {
    // some variable declarations
    export const barbar: number;
}

type I000 = string | number

interface Window {
    ffff: SyntaxError
}

type xx = Window['addEventListener']

type Iojj = DateConstructor