# Typescript quiz (Basic Level - 1)

1. What are the basic data types in TypeScript?<br>
   Ans. Boolean,string,number,null,undefined,void,any.<br>

2. What is Generic data type.<br>
   Ans. Generics are code templates that we can define and reuse throughout the code.Generics allows us to write generic class,interface and functions.<br>

3. What is type inferring in TS.<br>
   Ans. Type inferring helps us by ensuring that the code is type-safe.It ensures that the value of data is according to the assigned data type.<br>

4. What are the possible ways to define typing for functions.<br>
   Ans. There are many ways to define typing for functions.some of are following:

```Javascript

//basic syntax for declaring functions
let myfunction = (param1: type1, param2: type2) => returntype

//function type annotations and return types
function add(a:number, b:number): number {
    return a+b
}

//arrow functions and function type
const greet: (name: string) => string = (name) => `Hello, ${name}!`;

//type inference with function types
//type inference for return type
function multiply(a: number, b: number) {
    return a*b;//typescipt infers the return type as a number
}

//type aliases for function types
//type aliases in typescript can be used to create reusable and complex function types
type greetfunction: (name: string) => string;

const sayhello: greetfunction = (name) => `Hello, ${name}`;
```

5. How to define Generic type for Classes?<br>
   Ans.

```Javascript
    class classname<T,U,...> {
        //class members and methods
    }
```
