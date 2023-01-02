// // 闭包
// // function a() {
// //     var aaa = 123;
// //     function b() {
// //         console.log(aaa);
// //     }
// //     return b;
// // }
// // var demo = a();
// // demo();

// // 通过闭包循环出10个10
// // function  a() {
// //     var arr = [];
// //     for(var i = 0; i < 10; i++) {
// //         arr[i] = function() {
// //             console.log(i);
// //         }
// //     }
// //     return arr;
// // }
// // var demo = a();
// // for(var j = 0; j < 10; j++) {
// //     demo[j]();
// // }

// // 通过闭包让0到9都循环出来
// // function a() {
// //     var arr = [];
// //     for(var i = 0; i < 10; i++) {
// //         (function(canshu){
// //             arr[canshu] = function() {
// //                 console.log(canshu);
// //             }
// //         }(i))
// //     }
// //     return arr;
// // }
// // var demo = a();
// // for(var j = 0; j < 10;j++) {
// //     demo[j]();
// // }

// // 继承

// //浅拷贝
// // var obj = {
// //   name: "jingrui",
// //   age: 20,
// // };
// // var obj1 = {};
// // function extend(origin, target) {
// //   for (var prop in obj) {
// //     target[prop] = origin[prop];
// //   }
// // }

// // 深拷贝

// // 第一种    typeof  -> number, string, object, function, undefined
// // typeof(1) -> number
// // typeof('1') -> string
// // typeof([1,1,1]) -> object
// // typeof({name: 'jingrui'}) -> object
// // typeof(function () {}) -> function
// // typeof(null) -> object
// // typeof(undefined) -> undefined

// // 第二种   a instanceof b  a的原型链上是不是有b的原型,原型链的头是Object.prototype---> null

// // 第三种   Object.prototype.toString
// // console.log(Object.prototype.toString.call(1));  [object Number]
// // console.log(Object.prototype.toString.call('1'));  [object Strimg]
// // console.log(Object.prototype.toString.call([]));   [object Array]
// // console.log(Object.prototype.toString.call({}));   [object Object]
// // console.log(Object.prototype.toString.call(null));   [object Null]
// // console.log(Object.prototype.toString.call(undefined));  [object Undefined]
// var obj = {
//   name: "jingrui",
//   age: 20,
//   card: ["vip", "svip", "666", { age: 1 }],
//   jingrui: {
//     home: "heihe",
//     food: {
//       a: {
//         b: {
//           c: {},
//         },
//       },
//     },
//   },
// };
// var obj1 = {};
// // 1. 判断变量类型  没办判断function，null，你加上吧？

// function deepClone(origin, target) {
//   var target = target || {};
//   for (var prop in origin) {
//     // 引用类型
//     if (typeof origin[prop] === "object") {
//       // 是数组
//       if (Object.prototype.toString.call(origin[prop]) === "[object Array]") {
//         var newArray = [];
//         target[prop] = newArray;
//         deepClone(origin[prop], target[prop]);
//       } else {
//         target[prop] = {};
//         deepClone(origin[prop], target[prop]);
//       }
//     } else {
//       target[prop] = origin[prop];
//     }
//   }
//   deepClone(obj, obj1);
//   console.log(obj1);

//   //   var target = target || {},
//   //     arrStr = "array - object";
//   //   for (var prop in obj) {
//   //     if (type(target) == arrStr) {
//   //     } else {
//   //       return (target[prop] = origin[prop]);
//   //     }
//   //   }
// }

// 预编译
// 1. 创建AO
// 2. 变量声明变成undefined
// 3. 形参实参相统一
// 4. 寻找函数声明，把函数体赋值给函数声明
// function func(canshu) {
//   console.log(a);
//   var a = canshu;
//   function a() {
//     console.log(1);
//   }
//   var a = function () {};
// }

// func(123);

// function test(a, b) {
// {
//     a: 3
//     b: function b
//     c: 0
//     d: function d
// }
//   console.log(a);
//   c = 0;
//   var c;
//   a = 3;
//   b = 2;
//   console.log(b);
//   function b() {}
//   function d() {}
//   console.log(b);
// }
// test(1);

// function bar() {
//     // {
//     //     foo: function foo
//     // }
//   return foo;
//   foo = 10;
//   function foo() {}
//   var foo = 1;
// }

// console.log(bar());

// console.log(bar());

// function bar() {
//   foo = 10;
//   function foo() {}
//   var foo = 1;

//   return foo;
// }

function Person(age, name) {
  // _this
  this.age = age;
  this.name = name;
}
function Pet(type) {
  this.type = type;
  return 1;
}
var myPet = new Pet("cat");
// 说一下new的原理，如果让你自己实现一个new你怎么做
// function myNew() {
//   const func = arguments[0];
//   var _this = {}; oBJECT.PROTOTYPE
//   const returnValue = func.apply(
//     _this,
//     Array.prototype.slice.call(arguments, 1)
//   );
//   if (typeof returnValue === "object") {
//     return returnValue;
//   } else {
//     return _this;
//   }
// }

var pet = myNew(Pet, "cat");

console.log(pet);

// 可以百度
// 1. 原型链一定要会，继承4种以上一定要背着写下来，prototype和__proto__的区别
// 2. instanceOf   是做什么的，a的原型链上是不是有b的原型，自己实现一个instanceOf
// 3. 自己实现一个new
// 4. call,apply 都是做什么的区别，+自己实现一个call和apply
// 5. 深克隆完善,链式调用
