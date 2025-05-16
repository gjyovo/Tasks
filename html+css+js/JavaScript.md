JavaScript

#### 导入方式

- 在<head>或<body>中写<script>标签内嵌内容。
- 在文件夹内新建.js文件，通过在<head>中写入<script src=script.js（文件地址）></script>引入



#### 基础语句

##### 输出语法

```
语法1：把内容输出至<body>标签中
document.write('内容')
document.write('<h1>一级标题</h1>')  

语法2：弹出警告框
alert('要出示的内容')

语法3：控制台打印输出
console.log('给程序员看的内容')
```

##### 输入语法

```
显示一个对话框，提示用户输入文字
prompt('请输入您的姓名：') 
```

注：prompt获得的数据类型为字符型，若要转换为数字型进行运算可以写成 +prompt()

#### 变量

用来储存数据的容器

##### 类型

- **var**声明具有函数作用域的变量（变量只在函数内有效）

- **let**声明具有块级作用域的变量（变量只在当前块内有效）

  ```
  let age = 19
  let name = 'gjy'
  ```

- **const**声明常量，值不可更改（常量的引用类型值可以修改），声明时需要赋值

##### 命名

- 不能用关键字
- 只能用下划线、字母、数字、$组成，数字不能开头
- 字母严格区分大小写
- 起名要有意义，小驼峰命名法：userName

注：let比var更安全，更灵活，避免了var可能出现的一些问题，推荐用let和const控制语句



#### 分支语句

##### 条件语句

`if`语句：

```
if(condition){
    //如果条件为真，执行这里的代码
}
```

`else`语句：

```
if(condition){
    //如果条件为真，执行这里的代码
}else{
	//如果条件为假，执行这里的代码
}
```

`if-else`语句：

```
if(condition1){
    //如果条件1为真，执行这里的代码
}else if(condition2){
	//如果条件2为假，执行这里的代码
}else{
	//如果以上条件都为假，执行这里的代码
}
```

##### 循环语句

`for`循环语句：

```
for(初始化表达式;循环条件;迭代器){
    //循环体，执行这里的代码
}
```

`while`循环语句:

```
while(循环条件){
	//循环体，执行这里的代码
}
```

循环的关键字：

`break`用于跳出循环，结束剩余循环的执行。

`continue`用于跳过当前循环中的剩余代码，继续下一次循环。

```
<body>
    <script>
    
        let grade = 88;
        if(grade > 60){
            console.log('合格');
        }else{
            console.log('不合格');
        }

        let time = 22;
        if(time < 12){
            alert('上午好');
        }else if(time < 18){
            alert('下午好');
        }else{
            alert('晚上好');
        }

        console.log('for循环');
        for(let i = 1;i <= 10;i++){
            console.log(i);
        }

        console.log('while循环');
        let count = 1;
        while(count <= 10){
            console.log(count);
            count++;
        }

        console.log('循环关键字');
        for(var i = 0;i < 7;i++){
            if(i == 2){
                continue;
            }
            if(i == 5){
                break;
            }
            console.log(i);
        }
    </script>
</body>
```

#### 数据类型

##### undefined和null

- `undefined`是一种 未定义的状态，表示变量声明但未赋值、对象属性不存在、函数无返回值等情况。（可能还会有值)
- `null` 是一种明确的空值，表示变量被手动赋值为空，或用于占位表示没有对象值。（就是空）

##### Number和Boolean

|              | **`Number`**                                   | **`Boolean`**                   |
| ------------ | ---------------------------------------------- | ------------------------------- |
| **定义**     | 表示数值类型，包括整数和浮点数。               | 表示逻辑值：`true` 和 `false`。 |
| **特殊值**   | `NaN`、`Infinity`、`-Infinity`。               | `false`、`true`。               |
| **常用方法** | `toFixed()`、`parseInt()`、`parseFloat()` 等。 | 逻辑运算符：`&&`、`             |
| **应用场景** | 数学运算、格式化数值、数据转换等。             | 条件判断、逻辑控制。            |

```
    <script>

        const username = "Sakuya";

        const age = 17;

        const rate = 4.5; //此上都是number类型

        const isCute  = true; //布尔

        const x = null;

        const y = undefined;

        let z;

    </script>
```

##### 字符串

(用''或""或``包裹)

- 字符串内置方法

```
    <script>
    //字符串的内置方法
    const str ='Hello World!';
 
    console.log(str.length);//获取字符串的长度->12
    console.log(str.toUpperCase());//将字母全部大写->HELLO WORLD!
    console.log(str.toLowerCase());//将字母全部小写->hello world!
    console.log(str.substring(0,5).toUpperCase());//将字符串全部分割开,传入的两个参数分别是起始和终止位置的索引->HELLO
    console.log(str.split(""));//将字符串转化为数组->["H","e",...,"!"]

    const p = "a, b, c, d";
    console.log(p.split(", "));//使用特定分割内容来分割字符串->["a","b","c","d"]
    </script>
```

- 字符串可以使用 + 相连（拼接成新的字符串）

```
document.write('我今年' + age + '岁了')
```

###### 模版字符串

- 最外面必须用``包含
- 用${}包裹变量

```
document.write(`我今年${age}岁了`)
```

##### 数组

###### 语法

```
let 数组名 = ['耿佳钰','得能勇志','藤永咲哉',...]
```

###### 内置方法及增删

```
    <script>
    //数组的内置方法
    const numbers = new Array(1,2,3,4,5);
    console.log(numbers); ->[1,2,3,4,5]

    const fruits = ["apples","oranges","pears",10,true];
    fruits[5] = "grapes";
    
    fruits.push("mangos");//数组末尾添加一个元素，返回数组的新长度
    fruits.unshift("strawberries");//数组开头添加一个元素，返回数组新长度
    
    fruits.pop()//删除数组末尾的元素
    fruits.shift() //删除数组开头元素
    fruits.splice(起始位置，删除几个元素) //删除指定元素
    
    console.log(Array.length) //数组长度
    console.log(Array.isArray(fruits))//判断一个变量是否是数组 -> true
    console.log(fruits.indexOf("oranges"));//得到特定元素的索引 -> 1
    console.log(fruits); ->  ["strawberries","apples","oranges","pears",10,true,"grapes"]
    console.log(fruits[0]);//访问数组中的特定元素 -> strawberries
    </script>
```

##### JS对象

###### 语法

JavaScript 对象是由属性（键值对）和方法组成的数据结构

属性用来存储数据，方法用来定义行为


        <script>
               //对象
           let person = {
               firstName: "Yushi",
               lastName: "Tokuno",
               age: 21,
               hobbies: ["music","movies","sports"],
               address: {
               street: "50 main st",
               city: "Tokyo",
               },
           };
           console.log(person); -> 整个person对象
           console.log(person.lastName,person.firstName);
           console.log(person.hobbies[1]); -> movies
           console.log(person.address.city); -> Tokuyo

###### 更改

- 改/增

```
对象名.属性 = 新值
```

- 查

```
语法1：console.log(对象名.属性名)
语法2：console.log(对象名['属性名'])
```

###### 方法

（在对象外叫函数，在对象内叫方法）

```
let person = {
    name:'gjy',
    SayHi:function(){                  //方法
        document.write('hi')
    }
}
person.sayHi()
```

###### 遍历对象

- for in

```
let arr = ['red','pink','blue']
for (let k in arr){
  console.log(k)     //打印属性名 数组的下标 字符串类型
  console.log(arr[k])    //打印属性值
}
```

###### (对象数组)

   ```
    <script>
        //对象数组
    const todolist = [
        {
        id: 1,
        text: "Take out trash",
        isCompleted: true,
        },
        {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true,
        },
        {
        id: 3,
        text: "Dentist appt",
        isCompleted: false,
        },
    ];

    console.log(todolist[1].text);
    </script>
   ```

###### 内置对象

- Math

  random：生成[0,1)之间的随机数

  ceil：向上取整

  floor：向下取整

  max：最大数

  min：最小数

  abs：绝对值

  pow：幂运算

###### [例]随机数函数

语法：

```
Math.random()

let random = Math.floor(Math.random() * arr.length)    //从数组中取随机
```

```
生成N-M间的随机数
Math.floor(Math.random() * (M - N + 1)) + N
```



##### 类型转换

###### 隐式转换

规则：

- ”+“两边只要有一个是字符串，两个都会转换成字符串，单用“+”会转换成数字型
- 除了“+”以外的算数运算符，都会把数据转换成数字类型

缺点：

需要靠经验判断，不严谨

###### 显式转换

```
<script>
        let str = '123'
        console.log(Number(str))
        console.log(Number('gjy')) //强制转换成数字型
        let num = prompt('输入年薪')
        console.log(num)
    </script>
```



## 函数

##### 函数声明方式

```
function 函数名(){
    函数体
}                          //函数主体
函数名()                    //函数调用
```

```
function hd(title){
console.log(title);//函数体内容
}
hd("gjy");//函数存在之后可以多次调用
```

```
let cms = function(title){
console.log(title);//函数体内容
};
cms("gjy");
```

##### 常用命名方式

| 动词 | 含义                 |
| ---- | -------------------- |
| can  | 判断是否可执行某操作 |
| has  | 判断是否含义某个值   |
| is   | 判断是否为某个值     |
| get  | 获取某个值           |
| set  | 设置某个值           |
| load | 加载某些数据         |

##### 匿名函数与函数提升

匿名函数：没有函数名的function函数

```
hd(); //匿名函数无法函数提升，报错
let hd = function(){
console.log("gjy");
};
show(); //函数提升，输出gjy.com
function show(){
console.log("gjy.com");
}
```

##### 默认参数

```
function avg(total,year = 1){
console.log(year);
}
console.log(avg(2000,2)); //若传入了实参2则输出2，若year无实参传入则输出默认参数1
```

##### 作用域和作用域链

###### 局部作用域Local（函数内部）

- 函数作用域

- 块作用域（有大括号包围）

  - var不会产生块作用域，外界可以访问

  - let产生块作用域，外部无法访问

###### 全局作用域Global（外部）

```
    <script>
        function hello(){

            console.log('Hello,world!');

        }


        hello();


        function hello_with_return(){

            return 'Hello,World!'

        }


        let a = hello_with_return();

        console.log(a);

        console.log(hello_with_return()); //二者同样输出Hello，World！


        function FullName(name){

            console.log('Tokuno'+name);

        }

        

        hello_with_params('Yushi');
        

        //作用域

        let global_var = '全局变量';

        function local_var_function(){

            let local_var = '局部变量';

            console.log('函数内打印全局变量:'+ global_var);

            console.log('函数内打印局部变量:'+ global_var);

        }


        local_var_function();


        console.log('全局打印全局变量:'+ global_var);

        console.log('全局打印局部变量:'+ local_var); //函数外无法打印局部变量

    </script>
```

###### 作用域链

（变量查找机制）

子作用域<u>依次逐级</u>查找父作用域，父作用域无法越级访问子作用域

##### 闭包

- 简单理解：内层函数 + 外层函数的变量

  ```
  function outer(){
    const a = 1
    function fn(){
      console.log(a)    //内层函数引用了外层变量a
    }
    return fn
  }
  const fun = outer()   // outer() = fn = function fn(){}
                           const fun = function fn(){}
  fun()      //实现外部函数使用函数内部变量
  ```

- 作用：封闭数据，提供操作，外部也可以访问函数内部变量

  ```
  利用闭包计算函数被调用的次数
  
  function count(){
    let count = 1
    function fun(){
      count++
      console.log('函数被调用${count}次')
    }
    return fun
  }
  const result = fn()
  result()  //2
  result()  //3
  ```

- 缺点

  由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

##### 函数剩余参数与展开运算符

###### 动态参数：arguments

- 伪数组，包含了调用函数时传入的所有实参（不确定穿多少实参时可以使用）
- 只存在函数中

###### 剩余参数：...arr

- 函数参数使用

```
function getSum(...arr){   //arr作为名字可以随便写
  console.log(arr)
}
getSum(2,3)
getSum(1,2,3)
```

用户至少输入两个数  ->  语句1变成function getSum(a,b,...arr)   //这样可以把多于2个的元素给arr作为真数组

注：推荐使用剩余参数。

###### 展开运算符

- 不会修改原数组
- 数组中使用，数组展开

```
const arr = [1,2,3,4,5]
console.log(...arr)  //1,2,3,4,5
```

- 作用：

  - 可以求数组最大值

  ```
  console.log(Math.max(...arr))
  ```

  - 合并数组

  ```
  const arr1 = [1,2,3]
  
  const arr2 = [4,5,6]
  
  const arr = [...arr1,...arr2]
  ```

##### 构造函数

- 作用：初始化对象，可以使用构造函数来快速创建多个类似的对象。

- 函数内部不需要写return，构造函数自动返回创建的新的对象 

- 约定：函数名以大写字母开头

  ​            使用*new*关键字来调用被称为*实例化*

  ```
  function Pig(uname,age){
    this.uname =uname
    this.age = age
  }
  const peppa = new Pig('佩奇')
  console.log(peppa) 
  ```

##### 处理this

###### this的指向

- 普通函数：谁调用指向谁
- 箭头函数：并不存在this，引用最近作用域中的this
- 构造函数，原型函数，DOM事件回调函数如果需要DOM对象的this，则不推荐使用箭头函数

###### this的改变-call

```
fun.call(thisArg,arg1,arg2,...)
```

thisArg是想让this的指向

arg1，arg2是参数值

```
const obj = {
  uname:'pink'
}
function fn(x,y){
  console.log(this)
  console.log(x + y)
}
fn.call(obj,1,2)
```

###### this的改变-apply

```
fun.apply(thisArg,[argsArray])
```

```
const obj = {
  uname:'pink'
}
function fn(x,y){
  console.log(this)
  console.log(x + y)
}
fn.apply(obj,[1,2])
```

使用：求数组最大值/最小值

```
const arr = [100,44,77]
const max = Math.max.apply(Math,arr)
const min = Math.min.apply(null,arr)   //指向null或Math
console.log(max,min)
```



## ES6

#### let与const

##### let

`let`声明的变量只在它所在的代码块有效

- 应用：`for`循环的计数器

  ```
  for (let i = 0; i < 10; i++) {
    // ...
  }
  
  console.log(i);
  // ReferenceError: i is not defined
  ```

  计数器`i`只在`for`循环体内有效，在循环体外引用就会报错。

  `for`就是设置循环变量的部分是一个父作用域，而循环体内部是一个单独的子作用域（同一个作用域不可使用 `let` 重复声明同一个变量）。

- 不存在变量提升

  ```
  // var 的情况
  console.log(foo); // 输出undefined
  var foo = 2;
  
  // let 的情况
  console.log(bar); // 报错ReferenceError
  let bar = 2;
  ```

- 暂时性死区

  使用`let`命令声明变量之前，该变量都是不可用的

  - 例：

    ```
    function bar(x = y, y = 2) {
      return [x, y];
    }
    
    bar(); // 报错
    ```

    参数`x`默认值等于另一个参数`y`，而此时`y`还没有声明，属于“死区”。

    ```
    // 不报错
    var x = x;
    
    // 报错
    let x = x;
    // ReferenceError: x is not defined
    ```

- 不允许重复声明

##### 块级作用域

- 外层代码块不受内层代码块的影响

  ```
  function f1() {
    let n = 5;
    if (true) {
      let n = 10;
    }
    console.log(n); // 5
  }
  ```

- ES6 允许块级作用域的任意嵌套

  ```
  {{{{
    {let insane = 'Hello World'}
    console.log(insane); // 报错
  }}}};
  ```

  每一层都是一个单独的作用域，不能越级访问。第四层作用域无法读取第五层作用域的内部变量。

###### 块级作用域与函数声明

- 允许在块级作用域内声明函数。
- 函数声明类似于`var`，即会提升到全局作用域或函数作用域的头部。
- 同时，函数声明还会提升到所在的块级作用域的头部。

注：上面三条规则只对 ES6 的浏览器实现有效

```
// 块级作用域内部，优先使用函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
```

##### const

只在声明所在的块级作用域内有效

`const`声明一个只读的常量。一旦声明，常量的值就不能改变。必须立即初始化，不能留到以后赋值。

- `const`命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

- 本质：变量指向的那个内存地址所保存的数据不得改动，即不能把`const变量`指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。

  ```
  const a = [];
  a.push('Hello'); // 可执行
  a.length = 0;    // 可执行
  a = ['Dave'];    // 报错
  ```

- 如果真的想将对象冻结，应该使用`Object.freeze`方法。

  ```
  const foo = Object.freeze({});
  
  // 常规模式时，下面一行不起作用；
  // 严格模式时，该行会报错
  foo.prop = 123;
  ```

##### 顶层对象

顶层对象，在浏览器环境指的是`window`对象，在 Node 指的是`global`对象。

`var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；`let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性。

```
var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined
```

#### Promise&async/await异步编程

（程序无需等待，加强cpu执行效率）

##### Promise

链式调用

- 不受外界影响，`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。与事件不同的是，错过后无法监听

```
const promise = new Promise(function(resolve, reject) {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

- `resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；

  `reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

- Promise.then()

  `Promise`实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数。

  ```
  promise.then(function(value) {
    // success
  }, function(error) {
    // failure
  });
  ```

- `then`：可以接受两个回调函数作为参数。第一个回调函数是`Promise`对象的状态变为`resolved`时调用，第二个回调函数是`Promise`对象的状态变为`rejected`时调用。

  这两个函数都是可选的，不一定要提供。它们都接受`Promise`对象传出的值作为参数。

- Promise新建后立即执行

  ```
  let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
  });
  
  promise.then(function() {
    console.log('resolved');
  });
  
  console.log('Hi!');
  
  // Promise
  // Hi!
  // resolved    then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行
  ```

- 异步加载图片

  ```
  function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
      const image = new Image();
  
      image.onload = function() {
        resolve(image);
      };    //成功显示图片
  
      image.onerror = function() {
        reject(new Error('Could not load image at ' + url));
      };    //失败提示
  
      image.src = url;
    });
  }
  ```

- Promi.prototype.catch()

  `Promise.prototype.catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

  ```
  getJSON('/posts.json').then(function(posts) {
    // ...
  }).catch(function(error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('发生错误！', error);
  });
  ```

```
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```

- Promise.prototype.finally()

- Promise.all()

  

- Promise.race()

- Promise.allSettled()

- Promise.any()

- Promise.resolve()

- Promise.reject()

- Promise.try()

##### async/await

```
async function f(){
  await reponse = await fetch("网页地址");   //使用await在函数中嵌套异步函数
  //当有多个await需要同时执行则由1,2改为3
  const promiseA = fetch("");
  const promiseB= fetch("");
  const [a,b] = await Promise.all([promiseA,promiseB]);
}
f();   //用async将函数标记为返回值是Promise对象的异步函数
```



## （JSON）

#### 介绍

是一种文本数据格式，来源于JS的对象语法。简言之，JSON是一种文本规范，或一种字符串规范。

#### 使用

由于JSON本质是字符串，在JS使用中需要将其转换为对象变量才能使用

- JS中将 JSON字符串 转换为 对象变量

  ```
  var jsonText ='{"node 1":{"node 1-1":1,"node 1-2":"sample"}}';
  var object = JSON.parse(jsonText);    转换方法
  ```

- JS中将 对象变量 转换为 JSON字符串

  ```
  var object = {
    "node 1":{
      "node 1-1":1,
      "node 1-2":"sample"
    }
  }
  var jsonText = JSON.stringify(object);
  ```

#### 常规值类型

- 字符串：包含在一对" "内，字符串中含有双引号需要使用 \ 转义

  ```
  "test \" string"
  ```

- 数字：可以是整数、浮点数（小数）

- 布尔值

- null

注：这四种类型的值是不允许内嵌其他值的

​        一个JSON文本可以仅含有一个字符串或一个数字

- 对象，键/值对字典（哈希表）：

  - 需要包含在一对 {} 之内

  - 用 , 隔开多个键值对，最后一个键值对后不能添加

  - 键值对的键必须为字符串

  - 键值对的值可以是6种类型的任意一种，无需统一类型

    ```
    {"key 1":"value 1","key 2":true,"key 3":{},"key 4":123}
    ```

- 数组：

  - 需要包含在一对 [] 之内

  - 用 , 隔开多个值

  - 数组的值可以是6种类型的任意一种，无需统一类型

    ```
    ["list 1",true,{},[],123]
    ```



## （Ajax）

#### 简介

动态异步无刷新技术

#### $.Ajax

- 格式

```
$.ajax({})
```

- 参数：

  *type：请求方式GET/POST

  *url：请求地址url

    async：是否异步，默认是true表示同步

  *data：发送到服务器的数据

    dataType：预期服务器返回的数据类型

    contentType：设置请求头

  *success：请求成功时调用此函数

    error：请求失败时调用此函数

  ```
  //在<body>设置一个button来实现点击按钮，发送ajax请求，将数据显示
  <script src="js/jquery.js" type="text/javascript" charset="utf-8"></script>
  $("#btn").click(function(){
  $.ajax({
    type:"get"
    url:"js/data.json"    //请求地址（文件地址）
    data:{
    
    }
    dataType:"json",      //规定预期返回值类型（原数据也需要是json格式），防止报错
    success:function(data){
      console.log(data);
   
    //若用获得的数据创建ul
    var ul = $("<ul></ul>");
    for(var i = 0;i < data.length; i++){
      var user = data[i];
      var li = "<li>" + user.userName + "</li>";
      ul.append(li);
    }
    console.log(ul);
    $("body").append(ul);
    }
  })
  }
  ```

#### $.get

简单的GET

```
//请求json文件，忽略返回值
$.get('js/cuisine_area.json');
```

```
//请求json文件，传递参数，忽略返回值
$.get('js/cuisine_area.json',{name:"tom",age:100});
```

```
//请求json文件，拿到返回值，请求成功后可拿到返回值
$.get('js/cuisine_area.json'，function(data){
  console.log(data);
});
```

```
//请求json文件，传递参数，拿到返回值
$.get('js/cuisine_area.json'，{name:"Tom",age:100},function(data){
  console.log(data);
});
```

#### $post

把get改为post

#### $getJSON

把get改为getJSON

注：要求返回数据格式满足JSON格式



## API

#### 作用

通过JS去操作html和浏览器

#### 分类

DOM（文档对象模型）、BOM（浏览器对象模型）

#### 声明变量

地址没有变过的值，const优先（追加/删除数组元素可以使用const）

建议：数组和对象用const声明

#### DOM

​                 ————浏览器提供的一套专门用来 操作网页内容 的功能

###### 作用

开发网页内容特效实现用户交互

###### DOM树

将HTML文档用描述网页内容关系的名词以树状结构直观的表现出来

直观体现了标签与标签之间的关系![99fa18468a28503841cb88fe37981b31](F:\聊天记录\Tencent Files\2945908053\nt_qq\nt_data\Pic\2025-05\Ori\99fa18468a28503841cb88fe37981b31.png)

###### DOM对象

- 即：浏览器根据 HTML标签 生成的 JS对象（如：div）

- document对象

  - 是DOM提供的一个最大对象
  - 它提供的属性和方法都是用来访问和操作网页内容的（document.write）
  - 网页所有内容都在document里

- 获取DOM元素：

  （根据CSS选择器）

  - 语法：

    ```
    获取匹配的第一个对象，可以修改
    <div class="box">123</div>
    const box = document.querySelector('div')
    const box = document.querySelector('.box')
    
    <p id="nav">导航栏</p>
    <ul>
      <li>test1</li>
      <li>test2</li>
    </ul>
    const nav = document.querySelector('#nav')
    const li = document.querySelector('ul li：first-child')
    
    获取多个元素，返回为数组，只能通过遍历数组修改
    const lis = document.querySelectorAll('ul li')
    ```

  - 参数：包含一个或多个有效的CSS选择器字符串

  - 返回值：CSS选择器匹配的第一个元素，一个HTMLElement对象

    ​                没有匹配则返回null

  - querySelectorAll()获取数组遍历得到每个元素：

    ```
    const lis = document.querySelectorAll('ul li')
    for (let i = 0;i < lis.length;i++){
      console.log(lis[i])
    }
    ```

###### DOM修改元素内容

- innerText属性

  - ```
    <div class=box>文字内容</div>
    //获取文字内容
    const box = document.querySelector('.box')
    console.log(box.innerText)
    //修改文字内容
    box.innerText = '我是一个盒子'
    ```

    注：显示纯文本，不解析标签

- innerHTML

  - ```
    <div class=box>文字内容</div>
    //获取文字内容
    const box = document.querySelector('.box')
    console.log(box.innerText)
    //修改文字内容,会解析标签（加粗文字）
    box.innerHTML = '<strong>我是一个盒子</strong>'
    ```

    注：可以直接写innerHTML避免纠结

###### 修改样式属性

- style修改属性[修改少量属性]

  ```
  对象.style.样式属性 = '值'
  ```

  注：多组单词的采用小驼峰命名法，例：background-color -> backgroundColor

- 类名修改属性

  ```
  <head>
  <style>
  div{
    ...
  }
  .nav{
    ...
  }
  .box{
    ...
  }
  </style>
  </head>
  
  <body>
  <div class="nav"></div>
  <script>
  const div = document.querySelector('div')
  
  // 使用类名修改，新值换旧值（覆盖）（class为关键字，用className）
  div.className = 'box'
  //nav box同时存在
  
  div.className = 'nav box'
  </script>
  </body>
  ```

- classList修改属性[推荐]

  为了解决className容易覆盖以前的类名，可以通过classList追加和删除类名

  ```
  //追加一个类
  元素.classList.add('类名')
  //删除一个类
  元素.classList.remove('类名')
  //切换一个类：有就删掉，没有就加上
  元素.classList.toggle('类名')
  ```

###### 操作表单元素

获取：DOM对象.属性名

设置：DOM对象.属性名 = '新值‘

```
表单.value = '用户名'
表单.type = 'password'
```

表单中一律使用布尔值代表是否拥有该属性

disabled 禁用              

checked 

```
const ipt = document.querySelector('input')   //false
ipt.checked = 'true'  //被勾选状态
```

###### 自定义属性data（data-xxx）

```
<div data-id='1' data-spm="不知道">1</div>
<script>
const one = document.querySelector('div') 
console.log(one.dataset)   //获取所有data标签
console.log(one.dataset.id)  //1
```

###### 间歇函数（定时器）

- 开启定时器：每隔一段时间（单位：毫秒）调用一次这个函数

  ```
  setInterval(函数，间隔时间)
  ```

- 关闭定时器：

  ```
  let 变量名 = setInterval(函数，间隔时间)
  clearInterval(变量名)
  ```

- 应用：轮播图 倒计时

##### 事件

###### 定义

事件是网页中用户交互的触发点，如点击、悬浮等操作。（事件监听）

###### 事件类型

| 事件        | 描述             |
| ----------- | ---------------- |
| onClick     | 点击事件         |
| onMouseOver | 鼠标经过         |
| onMouseOut  | 鼠标移出         |
| onChange    | 文本内容改变事件 |
| onSelect    | 文本框选中       |
| focus       | 焦点触发         |
| blur        | 焦点消失         |
| onBlur      | 移开光标         |
| keyup       | 键盘抬起         |
| keydown     | 键盘按下         |

###### 引用方式

- 使用`HTML`属性:在HTML标签中添加事件属性
- `DOM`属性
- `addEventListener`方法

```
元素对象.addEventListener('事件类型'，要执行的函数)
```

###### 事件对象

有事件触发相关信息的对象

- 命名：event、ev、e

```
元素对象.addEventListener('事件类型'，function(e)){}
```

- 常见属性

  type：获取当前的事件类型

  clientX/clientY：获取光标相对于浏览器可见窗口左上角位置

  offsetX/offsetY：获取光标相对于当前DOM元素左上角位置

  key：用户按下的键盘键的值

  ```
  if(e.key === 'Enter'){
  }
  ```

  ###### 环境对象

  指的是函数内部特殊的变量 this，每个函数里都有

  <u>谁调用，this就是谁</u>，箭头函数没有this

##### 正则表达式

- 是用于匹配字符串中字符组合的模式，通常用来查找、替换那些符合正则表达式的文本

- 使用场景

  - 验证表单：用户名表单只能输入英文字母、数字或下划线，昵称输入框中可以输入中文（匹配）
  - 过滤掉页面中敏感词，或从字符串中获取想要的特定部分（提取）等

- 语法

  （定义规则->查找是否匹配）

  ```
  const 变量名 = /表达式/     （表达式就是规则）
  ```

  ```
  规则.test(被检查的字符串)
  ```

  