                       
                        JavaScript简介


mosaic 是互联网上第一个或普遍使用和能够显示图片的网页浏览器，于1993年问世。

Javascript  作者是： brendan Eich

sun公司最后搞出来了java语言

JavaScript最初的名字是live script 最后为了和sun公司合作，因为市场宣传所以改了名字叫 JavaScript

sun公司最后也被Oracle收购了

浏览器由两部分组成分别是： shell 和内核

内核部分有： 渲染引擎（处理html和css效果的功能）
             js引擎（处理JavaScript代码的功能）

2001年发布ie6，首次完成了对js引擎的分离和优化

2008年Google发布了最新的浏览器chrome，它采用的是优化后的JavaScript引擎，引擎代号是v8，因能把js代码直接转化为机器码来执行，进而以速度快而闻名。

JavaScript最标准的名字是ECMAScript
JavaScript是弱数据类型语言，变量是什么类型由值决定。

                     
                       语言类型

            
 js是解释形语言（也就是读一行写一行的语言，但是它可以跨平台应用）

 我们的语言大概分两类：
                     1.编译形：很快，但是不能跨平台
                              执行方式是通篇读一遍，然后总结一下生成一个新的文件，然后让系统去执行这个总结出来的新文件。
                              (基本上由编译系统直接执行)
                    2.解释形：比较慢，但是可以跨平台
                              执行方式是读一行写一行
                              基本上都是用浏览器来执行

java是一种比较特殊的语言，它既不是编译型也不是解释型，Java是先编译再解释


                      线程

进程和线程的区别：进程就相当于一趟列车，线程就是列车上的车厢，进程有独立的地址空间，当一个进程里面的一个线程崩了，那么会影响整个进程，但是如果一个进程崩了并不会影响其他的进程。


线程分为，单线程和多线程
                       1.单线程：JavaScript就是单线程(为什么不能是多线程，因为多线程就是同一时间可以干很多事，但是如果是JavaScript是多线程，那么在一个浏览器当中dom它又删除又增加，会让它崩溃。)
                       2.多线程：是异步的。

计算机当中的同步和异步是与现实生活中相反的
计算机当中的同步指的是a完成了才能去干b
计算机当中的异步指的是同时干a和b 

js会让每一个任务，以单位时间拆分出很多个时间片段，然后把这个片段依次放到js引擎当中去执行，造成的效果就是一起动

如果单线程要是想实现多线程的效果，就需要用到轮转时间片这个东西


                      js分为三大部分
                 ECMAScript  DOM  BOM

        
                   如何在html里面引入js
        1.在title下面写<script></script>  
        2.像css一样外部引入，采用链接的方式（这种情况是最好的，是为了满足w3c的标准：结构、样式、行为要相分离）


                      变量
        
        var 后面的是变量，var用来声明它
        var num = 123；这叫做变量赋值

        变量的命名规则： 
                      1.变量名必须以英文字母、_ 、$开头
                      2.变量名可以包括英文字母、_、$、数字
                      3.不可以用系统设置的关键字（关键字也就是系统规划好的，有语法规范的）、保留字也不能用（保留字也就是未来可能变成关键字的）以上两种不能作为变量名



                      值
        
        1.不能改变的叫做：原始值（它存放在栈结构里面）
        number（数字）
        string（字符串，必须写在引号里面，不管引号里面写的是啥，它都是字符串类型）
        Boolean（布尔类型，表示逻辑词也就是对和错，true和false）
        undefined（未定义类型，表示该值还没有被定义）
        null(表示有这个值，但是为空，并且占位)

        数字类型是浮点型，可以写小数

        栈是先进后出，并在栈内存中的被赋的值永远不可能改变，也不能被清除，修改的时候，是把原来定义并占用的地址还原回去，申请一个新的地址，并且修改值，只有当某一天系统满了，才会去覆盖以前的空间

        2.引用值（放在堆里面这里面传的是地址）
          array(数组)
          object(类)
          function(函数)


                     js语句的基本规则
        
        1.写完一句话记得在后面用“；”结束
        2.js语法的错误可能会引起后续代码终止，但不会影响其它js代码块（如果格式都有错误那么他根本不会执行）
        3.书写的时候记得，在一些符号前后加空格；

                     js运算符
        
        1.加号：
               用来计算加减法，以及字符串链接
               任何数据类型加字符串都等于字符串
               加法的时候是有顺序的，从左到右，有括号算括号

        2.减、乘、除 （infinity是无穷，它也分正负的）


               
                    js的特别之处

        当代码中运行到js的时候，它会把正在运行的html和cssq全部阻断，必须要等他加载完才能继续，js的运行和html和css是一种同步的过程，有html和css那就一定没有js在运行，有js在运行那html和css就一定在休息


                       运算符

        当俩个字符串数组比较的时候，如果有一个是多位数字，那么要先比较第一位； 

        例如  "1" < "23",因为在ACSII码中，1的值比2小，所以结果是true
        ASCII码表：A-->65 
                   a-->97
                   1-->49

        切记NaN也是number类型的，但是它六亲不认，NaN不等于本身

                
                        js的比较运算符

        ">","<","==",">=","<=","!=" 
        他们的比较结果为Boolean值(比较结果一定是true或者false)
                     
                        js的逻辑运算符

            undefined/null/NaN/""/0/false,只有这6个值的boolean值是false
                
             "&&","||","!"
           运算结果是真实的值

           &&:(找到false就结束了)
           1.在使用与运算符的时候，它会先去判断运算符前面的那个表达式的值是true还是false，当是true的时候才会去看第二个表达式，并且把表达式的值返回
           2.如果运算符前面的表达式运算结果的布尔值结果是false，就将第一个表达式的运算结果直接返回

           与运算符，不管最后一位的值是true还是false都会返回最后一位，但如果在运行的时候碰见了false，那么就在false时直接返回。

           ||:(碰见true就返回)
           在运行时候如果第一个表达式的值是false，那就继续，碰见true就返回，就算不是那也运行到底然后返回

           或用来处理模棱两可的问题
                                 ：在ie和chrome浏览器中，写一个js的事件，在chrome中用e就可以解决，但是在ie中需要用到window.event才可以,所以我们会在代码中添加一个var event = e || window.event；  来解决这种模棱两可的问题.

            !:把当前值转化为布尔值然后取反


                          条件语句
            if , if else

        if(){

        }
()<-- 这里面是写的条件，大括号里面写的是语句，也就是说当小括号里面的条件成立【也就是布尔值是true】，那么就会执行下面的语句。

for循环: 
        for(var i = 0 ; i < 10 ; i++){
            document.write('a');
        }
        步骤：
            1.先执行i= 0；
            2.然后判断i是不是小于10；然后执行下面的doucument语句
            3.i自加一
            4.当i不再小于10循环就结束
            
            大括号里面写的是需要循环的代码，小括号里面写的是表达式执行语句

while循环:          简化版for循环
do while循环: 不会先看while能不能循环，它都会先do执行一次，然后在判断while

                   条件循环语句的补充
        
        switch...case
                     当第一个case语句执行之后，接下来的case语句也会执行，但是如果加入一个break就会把这个循环终止
                     case里面的类型可以随便填写，他是弱数据类型
                     在这个语句里面有一个default，它相当于if else里面的else，它如果写在最后面就不用加break了，如果写在前面就要加一个break。
        
        break 
                    用来结束循环，跳出循环语句，break如果放在循环外面会报错
        
        continue    结束本次循环进行下一次


                         编程形式
        
        编程形式有两种，面向过程和面向对象

        1.面向过程是偏向于机械化的一种过程(例如一个实验，人能不能飞，按照过程来说，插上翅膀就能飞了)
        2.面向对象：是比较偏向于人的正常思维(例如飞的实验，按照人的正常思维，没有人可以拥有飞翔的属性)

        而js是一种混杂的语言，即面向对象也面向过程

                 
                         数据类型

        typeof是一种运算符，可以分辨出是哪种类型，它只能返回出这六个值:
        number/string/boolean/undefined/object/function

        有一种特殊情况，那就是在typeof中写入null和数组，返回的结果都是object


                          显示类型转换

        number 
              当用number转换null时候，结果是0
              当用number转换undefined时，结果是NaN
              当转换字符串的时候也是NaN

        parseInt
                只想把字符串转换成整型数字，从字符串首部开始看，一直到非数字的位为止，例如:123.3当中的.也不是数字。
                还有一种是parseInt("12",16); 这个16表示的是16进制，也就是把16进制数12转换成10进制，结果是18，这个16有一个英文名字叫做radix，它的范围是2-36，这个范围以外的都不好使了(但如果你写的是0，那么默认你没写)

        parseFloat 
                  把字符串类型转换成浮点型的数字

        tostring  
                  转换成字符串(这个显示转换里面不能写undefined和null会报错)
        
        string
                  把任何东西都变成string值，什么都可以放在他后面的括号里面
        
        boolean 
                  把任何东西都变成布尔值类型，除了false/null/undefined/""/0/NaN,他们6个都是true。
        
                    
                          隐式类型转换
        

        isNaN
              可以判断括号里面的数字是不是NaN(在它的内部会先调用一下number)

        ++/--/+/-
               在加加减减和正负号之前，它会把进行运算的强制转换成数字
               它也会调用number
        
           +   
               什么东西加字符串都是字符串

        -*/% 
               当出现他们的时候它们会把左右操作数，都变成数字然后计算

        && || ！
               自己就把需要运算的转换成Boolean类型了

         > <  >= <= 
                当在比较运算符左右，有一个是数字类型，那么就会把另外一个也变成数字类型，如果都是字符串那就比较ASCII码

        ==   !=
                但凡有一头是数字，它就会把另外一头转变成数字
                也是调用number


                       不发生类型转换的
        
        ===(绝对等于)     NaN六亲不认，他们两不相等
        !== (绝对不等于)


                        数组
       
              数组就是一个arr = [];
              里面填上数字，但是数字的起始值是从arr[0]开始的
              arr.length 代表的是数组长度，有几个值，数组长度就是几


                        函数
              

              要满足高内聚低耦合

              函数定义分为两类 
                              1.函数声明
                              2.函数表达式
                                   (1)命名函数表达式
                                                var demo = function demo () {
                                                    doucment.write('a');
                                                          }
                                    function 后面的demo没什么作用，所以一般用匿名函数表达式

                                    (2)匿名函数表达式:(也称作函数表达式)
                                               var demo = function () {

                                               }
              
              一般要使用小驼峰命名法： theFirsrName

              每一个函数里面都有一个特殊的数组叫arguments，函数出生，arfuments自己就诞生了每个函数都有
              arguments 是实参的集合，不管你传来了多少实参，都会以数组的形式传给arguments
              改形参的值arguments也会改变不是因为他们两是一个值，是因为他们是强行映射关系，他们两只是好兄弟
              arguments改形参也会跟着改


              返回值
                    返回值就是在函数尾端定义一个接受它的东西
                    return会终止该函数
                    如果没有return，那么在函数末尾会隐式的给你一行return

              递归
                  1.递归要写通式
                  2.递归必须要有出口
                  3.递归先执行的最后执行完

  

        

