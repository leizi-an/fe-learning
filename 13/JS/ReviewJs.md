mosaic 是互联网第一个或普通使用和能够显示图片的网页浏览器,于1993年问世

JavaScript   作者是 Brendan Eich

sun公司最后开发出来了Java语言

JavaScript最开始叫做live Script 最后为了个sun公司合作,因为为了市场的宣传改了名字叫做JavaScript

sun公司最后被Oracle收购了

浏览器分为俩部分 shell(外壳) 和内核

内核部分
        渲染引擎(处理html和css效果的代码)
        js引擎(处理JavaScript代码的功能)

2001发布的ie6,首次完成了对js引擎的分离和优化

2008年Google发布了最新的浏览器chrome,它采用的是优化后的JavaScript引擎,引擎代号是V8,因能把js代码直接转化为机器码来执行,进而以速度快闻名

JavaScript最标准的名字是ECMAScript
JavaScript是弱数据类型语言,变量是什么类型由值的类型来决定

js是解释形语言(也就是读一行来写一行,好处是可跨平台应用)

我们的语言总共分为两类
             1.编译型 
                     执行很快,执行方式是通篇看一遍,然后总结一下生成一个新的文件,最后运行你总结出来的这个新文件,基本上由编译系统直接执行
            2.解释型
                     执行较慢,执行方式是,读一行来写一行,但是好处是可以跨平台使用,基本上是由浏览器来执行

java语言是一种比较特殊的语言,既不是编译型也不是解释型,它是先编译再解释

进程和线程的区别
           进程就好比一趟列车,而线程就是列车上的车厢,每一个进程都有独立的地址空间,当进程当中的一个线程崩坏了,那么整个进程都会有影响,但是如果一个进程坏了,那么另外一个进程不会收到影响.
    
线程分为单线程和多线程
         1.单线程:
                  js语言就是单线程,它为什么不能是多线程?
                  因为如果js是多线程,也就是同时执行,那么当你dom一个东西,一遍让他删除,一遍让他增加,他会运行不过来
         2.多线程:
                  多线程是异步的

计算机当中的同步和异步与生活当中的是相反的
计算机当中的同步指的是当你完成了a才能去干b
计算机当中的异步指的是你可以同时干a和b

js会让每一个任务,以时间单位,分出多个时间片,然后把这个时间片段,依次放在js引擎当中运行,所以导致你以为他是一起动的

如果单线程要是想实现多线程的效果,就需要用到轮转时间片这个东西

js分为三大类,ECMAScript, DOM, BOM

如何在html里面引入js
       1.在title下面写上<script></script>  
       2.和css一样可以用链接外部引用(这种是最正规的,为了满足结构,样式,行为相分离)

变量
    var  后面添加变量的名字,这个用来声明变量
    var num = 123;   这叫变量赋值

变量的命名规则
        1.变量名:必须以英文字母  _  $ 开头
        2.变量名可以包括英文字母 _ $ 数字
        3.不可以用系统设置的关键字(关键字也就是系统规范好有语法规范的)、保留字也不可能用(保留字指的就是未来可能变成关键字的字)

值分为不可改变的原始值和引用值

原始值
      1.number(它是数字类型)
      2.string(字符串类型,必须写字引号里面,不管你引号里面写的啥,在引号里面的就是字符串类型)
      3.boolean(布尔类型,表示逻辑词也就是,true和false)
      4.undefined(未定义类型,表示该值没有被定义)
      5.null(表示有这个值,但是它是空的,表示占位)
      
      数字类型是浮点型,可以在里面写上小数
       
      原始值都写在栈里面,栈是先进后出的,存入栈的值永远不可能被改变,如果你想改变一个值,它只是把原理的地址还回去了,然后拿着这个地址名去申请一个新地址,并且把值修改,只当某一天,系统的内存满了,才会去覆盖之前的空间

引用值
      1.object(对象)
      2.array(数组)
      3.function(函数)

      引用值存放在堆里面,这里面传的是地址

js语句的基本规则
      1.写完一句话要在后面写上;
      2.js语法的错误会引起后续代码的终止,但是不会影响其他js代码块的运行(如果格式有错误了,那么它根本不会执行)
      3.写的时候记得在一些东西左右加空格

js运算符
     1.加号
           用来计算加减法,以及字符串连接
           任何数据加字符串都等于字符串
           加法运算时候是有顺序的,从左往右算,有括号的算括号里面的

     2.减/乘/除
           infinty是无穷的,它也分正负

js的特别
      当代码运行时候，它碰见js了,会立刻把html和css阻断,必须要等js运行完才可以继续开始运行刚才没运行完的html和css,js的运行和html和css是一种同步的情况,有js在运行那么html和css一定被阻断了,html和css在运行的时候,那么js一定没有在运行

运算符
    当两个字符串比较的时候,如果有一个是多位数字,那么就会比较第一位的ACSII码

比如
    '1' < '23',因为在ACSII码中,1的ACSII码比2小,所以返回结果是true

ASCII码表
      A --> 65
      a --> 97
      1 --> 49

NaN也是属于number类型的,它叫非数,而且六亲不认,自己不等于自己

js的比较运算符
">","<","==",">=","<=","!=" 
他们的比较结果为Boolean值(比较结果一定是true或者false)

js的逻辑运算符
只有undefined/null/NaN/0/""/false,只有这6个值,返回的boolean值类型是false

"!" ,"&&" ,"||"
他们返回的是真实的值

"&&" 
    找到返回结果为false的那位就会结束
    1.在使用与运算符的时候,它会先去判断,与运算符前面那个表达式的值是true还是false,如果是true,才会去看与运算符后面的那个表达式,并且把表达式的值返回(不管他的值是true还是false)
    2.如果与运算符前面那个表达式的值是false,那么就会直接返回第一个表达式的值

"||"
   找到返回结果为true的那位就会结束
   在运行或运算符的时候,如果第一位表达式的值为true,那么就会直接把第一位表达式的值返回,如果第一个是false,那么才会执行第二位表达式,不管第二位表达式的值,是true还是false,都会返回第二个表达式的值

!
   非运算符就是把当前表达式的布尔值取反

条件语句

if() {

}
if旁边的括号里面写的是条件,判断是否继续执行函数体,大括号里面写的是函数语句,也就是当条件返回的布尔值为true时,才会执行大括号.

for循环
for(var i = 0; i < 10; i++) {
     doucment.write('a');
}
步骤:
    1.先执行i = 0;
    2.然后判断i是否小于10,如果小于那么就执行下面的语句打印出来a
    3.i自加1
    4.当i自加后的值,不再小于10,那么就结束
   
   大括号里面写是需要循环执行的代码,小括号里面写的是需要执行的次数.

while循环  也就是简化版的for循环
do...while循环
       它先不管while里面的条件,先自顾自的执行一次,然后再去看while里面的语句

switch...case: 
        当第一个case语句执行之后,接下来的case语句也会执行,但是如果加入一个break就会把这个循环终止case,case里面的类型可以随便填写因为它是弱数据类型,在这个语句当中加入一个default,它相当于if else里面的else,它如果写在最后面就不用加break了,如果写在前面就要加一个break

break
     用来结束循环,跳出当前的循环语句,break如果放在循环外面了,会报错的

continue
      结束当前循环进入下一次循环

编程形式有两种
面向过程
    面向过程是一种比较离谱的编程形式,比如你想让一个人去飞,用面向过程来飞就是,给人插上翅膀并且煽动就能飞

面向对象
    比较偏向于人的正常思维,例如让一个人飞,面向对象会想到,就算给他插上翅膀,但是人没有飞这个属性

js是一种混杂的语言,即面向对象也面向过程

数据类型
    typeof 是一种运算符,可以分辨出是哪种类型,它只能返回6个值
    number/string/boolean/undefined/object/function
    
    特殊的情况就是在typeof中写入null和array,它返回的结果都是object

显示类型转换
    number
        当用number转化null的时候,它的结果是0
        当用number转化undefined的时候,它的返回结果是NaN
        当用来转化字符串的时候也是NaN
    
    parseInt
        它只想把字符串类型转化成整形的数字类型,从要被转化的字符串字首开始看,一直看到不是数字类型的那一位为止,例如123.23,这里面点也不是数字类型,所以也就只能转化到123

        还有一个就是parseInt("12",16);  这16表示的是16进制,也就是把16进制数12转化成10进制数字,结果是1*16的一次幂加上2*16的0次幂,结果也就是18,这16机制这一位,有一个英文的名字叫做radix,它的范围是2 - 36,这个范围以为就不好使了,如果你写的是0,那么系统默认你没写

    parseFloat
        把字符串转成浮动型的数字

    toString
         转换成字符串类型(这个转化里面不能写undefined和null,写了会报错)
    
    String
         把任何东西都转变成string值,什么东西都可以放在它后面

    boolean
        把任何东西都变成布尔值的类型,除了NaN/null/undefined/0/""/false,以上6个值以为都是true

隐式类型转化
    isNaN
        可以判断括号里面的数字是不是NaN(在它的内部它会偷偷的调用一些number)
    
    ++/--/+/-
         在加加减减和正负号后面的东西,系统会把他进行运行并且强制的把他转化成数字类型,在里面也会偷偷的调用number
    
    +
         什么东西加字符串都是字符串
        
    -*/%
         他们出现的时候,他们会把他们左右的操作数,都变成数字类型,也会调用number
    
    ！ && ||
         他们也是自己把需要运算的东西变成boolean类型

     > <  >= <= 
        当在比较运算符左右，有一个是数字类型，那么就会把另外一个也变成数字类型，如果都是字符串那就比较ASCII码
    
    ==  !=
        在这个运算符左右,如果有一个是数字类型,那么也会把另外一个转变成数字类型也会调用number
    
不会发生类型转化的  
===(绝对等于)
NaN六亲不认,绝对等于也不好使
!==(绝对不等于)

数组
数组就是var arr = [];
括号里面填上数组用逗号隔开
数组的起始值是从0开始的
arr.length 代表的是数组的长度,有几个值,数组长度就是几

函数
要满足高内聚低耦合
函数的定义分为两类 
     1.函数声明 function test() {

     }
     2.函数表达式 var demo = function demo() {

     }

函数表达式又分为
     1.匿名函数表达式
        var demo = fuction () {

        }
     2.命名函数表达式
        var demo = function demo() {

        }

一般要用小驼峰命名法
       theFirstName
    
每一个函数内部都有一个特殊的数组叫做arguments,每当这个函数定义出来的时候,arguments就自己诞生
arguments是实参的集合,不管你传来了多少实参,那么arguments都会以数组的形式传给arguments
当你更改形参的值的时候,arguments也会发生改变因为,他们两是好哥俩,是强映射关系,arguments改的时候形参也会改

返回值
    就在函数尾部定义一个接受函数的东西,return会终止该函数
    如果你不写return系统也会隐式的给你加上一个return

递归
    1.递归要写通式
    2.递归要写出口
    3.递归先执行的最后执行完
        
        
    

