/* eslint-disable  */

/** TypeScriptの基本の型 */

// boolean 真偽値型
let bool: boolean = true;

// number 数値型
let num: number = 0;

// string　　文字型
let str: string = "A";

// Array　　配列型
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple タプル型
let tuple: [number, string] = [0, "A"];

// any　　　any型(どんな型を入れてもエラーにならない。つまり型を指定する意味がないので、なるべく使わない。)
let any1: any = false;

// void　　void型（何も返却値がない場合の関数をvoid型という）
const funcA = (): void => {
  const test = "TEST";
};

// null null型
let null1: null = null;

// undefined  undefined型
let undefined1: undefined = undefined;

// object object型
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 1, name: "ああ" };
