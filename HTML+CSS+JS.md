## HTML+CSS+JS

#### 一、总览{#1}

HTML：页面结构与内容

CSS：页面样式与布局

JS：页面交互与功能

#### 二、HTML{#2}

1. 通过**标签**（由尖括号包围）来定义文本、图像、链接等等。

+ 双标签（有内容的元素）：

  + 开始标签

  + 结束标签

    ```
    <p>段落</p>
    <a href="#">超链接</a>
    ```

+ 单标签（没有内容的元素）：

  ```
  <br>  //换行
  <hr>  //分割线
  <input type="text">  
  ```

2. 文件结构

   在VScode中可以<u>**“!+Tab”**</u>显示完整html结构

   <!DOCTYPE html> //告诉浏览器文件类型
   <html> //文档起始点
     <head>  //文档元信息
       <title>标题</title>
       <meta charset="UTF-8"> //文件编码格式
       <link rel="stylesheet" type="text/css" href="styles.css">
       <script src="script.js"></script> //连接外部样式表或脚本文件等
     </head>
     <body> //页面内容
       <h1>标题</h1>
       <p>段落</p>
       ...
     </body>
   </html> 

3. 常用文本标签

   ```
   <h1> -- <h6>  一到六级标题
   段落：<p>word</p>
   选中后<b>加粗 <i>斜体 <u>下划线 <s>删除线
   无序列表：<ul>
           <li>列表</li>
           ...
           </ul>
   有序列表：<ol>
           <li>列表</li>
           ...
           </ol>
   表格：<table border="1">     以下为宽度为1的3*3表格
           <tr>
               <th>列标题1</th>
               <th>列标题2</th>
               <th>列标题3</th>
           </tr>
           <tr>
               <th>元素11</th>
               <th>元素12</th>
               <th>元素13</th>
           </tr>
           <tr>
               <th>元素21</th>
               <th>元素22</th>
               <th>元素23</th>
           </tr>
            <tr>
               <th>元素31</th>
               <th>元素32</th>
               <th>元素33</th>
           </tr>
       </table>
   ```


4. 属性

   <开始标签 属性名="属性值">

   + 属性名称不区分大小写，属性值区分大小写。

   + class 类名    id 定义元素唯一id     style 规定元素的行内样式

   + ```
     链接：<a href="网站链接">网站</a>
     照片：<img src="图片链接/名字" (alt="该图片无法显示" width="200" height="100")>
     ```

5. 块元素与行内元素

+ 块元素

  + 在网页中从新行开始，占据整行宽度。

  + 可以包含其他块级元素和行内元素。

  + ```
    <div>(只用于建造一个元素块，无实义)：<div class="...">
    <p>  <h1>-<h6>  <ul>  <ol>  <li>  <table>  <form>
    ```

+ 行内元素

  + 在网页中不占一行。

  + 只占用所需宽度，而不是整行。

  + 行内元素不能包含块级元素，但可以包含其他行内元素。

  + ```
    <span>（包装文本，便于用CSS、JS装饰）  <a>  <strong>  <em>  <img>  <br>  <input>
    ```


6. 表单

<img src="C:\Users\ASUS\Downloads/DD4FBCBD8C6B0F23909621B47BC999B2.png" alt="DD4FBCBD8C6B0F23909621B47BC999B2" style="zoom: 25%;" />kimi对话框![image-20250326001116980](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250326001116980.png)placeholder  VS  value

```
<form>
    <span>用户名：</span>或者<label>用户名：</label>
    <input type="text" placeholder="有问题尽管问我...">或
    <input type="text" value="有问题尽管问我...">
    <label for="pwd">密码：</label>
    <input type="password" id="pwd" placeholder="请输入密码">     密码输入时不可见
    
    <label>性别</label>
    <input type="redio" name="gender"> 男 
    <input type="redio" name="gender"> 女      type="redio"表示单选
    <label>爱好</label>
    <input type="checkbox" name="hobby"> 跳舞     type="checkbox"表示多选
    ...
    <input type="submit">
</form>
    <form action="URL"></form>      与后端连接跳转，不跳转"#"
```

#### 三、CSS{#C-3}

1. 用于定义网页样式和布局的样式表语言。可以指定页面中各个元素的颜色、字体、大小、间距、边看等样式。
2. 语法：

+ 选择器的声明中可以写无数条属性
+ 声明的每一行属性，都需要以英文分号结尾
+ 声明中的所有属性和值都是以键值对这种形式出现的   

```
选择器{

        属性1:属性值1;

        属性2:属性值2;    (修改字体font-size:16px;
                            颜色color:red;)

}
```

3. 导入方式


+ 内联样式(Inline Styles)

  ```
  <h1 style="color:red;">
  ```

+ 内部样式表(Internal Stylesheet)

  ```
  在head中
   h1{
        color:red;
    } 
  ```

+ 外部样式表(External Stylesheet)

  ```
  <link rel="stylesheet" href="文件路径（./css/style.css)">并在新创立文件夹css内的style.css中写入
  h1{
        color:red;
    } 
  ```

+ 优先级：内联>内部>外部

4. 选择器

+ 元素选择器

  ```
  在head中
   h1{
        color:red;
    } 
  ```

+ 类选择器

  ```
  存在一个<h3 class="highlight"></h3>
  在head文件中写
  .highlight{
     background-color:yellow;
  }
  作用为只更改类名为highlight的h3
  ```

+ ID选择器

  ```
  存在一个<h3 id="highlight"></h3>
  在head文件中写
  #highlight{
     background-color:yellow;
  }
  ```

+ 通用选择器

  ```
  *{
         background-color:yellow;
     }
  ```

5. 常用属性

   ![IMG_0184(20250327-160038)](C:\Users\ASUS\Downloads/IMG_0184(20250327-160038).PNG)

<h1 style="font:bolder 15px 'KaiTi';">例：这是一个font复合属性

6. 盒子模型

<img src="C:\Users\ASUS\Downloads/D302AC2C8F790B4E5A21CF3C91719836.png" alt="D302AC2C8F790B4E5A21CF3C91719836" style="zoom: 25%;" />

+ 相关属性

  + 内容（Content）盒子包含的实际内容，即文本、图片等。

  + 内边距（Padding）围绕在内容的内部，是内容与边框之间的空间。可以使用padding属性设置。
  + 边框（Border）围绕在内边距的外部，是盒子的边界。可以使用border属性来设置。
  + 外边距（Margin）围绕在边框的外部，是盒子与其他元素之间的空间。可以使用margin属性来设置。

7. 定位

+ 相对定位：相对于元素在文档流中的正常位置进行定位。

  ```
  （类名：box-relative）
  position:relative
  left:100px
  right:100px
  ```

+ 绝对定位：相对于其最近的已定位祖先元素进行定位，不占据文档流。

  ```
  position:absolute
  ```

+ 固定定位：相对于浏览器窗口进行定位。不占据文档流，固定在屏幕上的位置不随滚动而移动。

  ```
  position:fixed
  ```

### 四、JavaScript{#4}

1. 导入

   在<head>或<body>中写<script>标签

2. 变量与数据类型

   + ver 函数作用域变量
   + let 块级作用域变量（一般都用let）
   + const 常量