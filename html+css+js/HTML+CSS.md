## HTML+CSS+JS

#### 一、总览{#1}

HTML：页面结构与内容

CSS：页面样式与布局

JS  ：页面交互与功能

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

2. ##### 文件结构

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

3. ##### 常用文本标签

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


4. ##### 属性

   <开始标签 属性名="属性值">

   + 属性名称不区分大小写，属性值区分大小写。

   + class 类名（可以重复）    id （定义元素唯一id ）    style 规定元素的行内样式

   + ```
     链接：<a href="网站链接">网站</a>
     照片：<img src="图片链接/名字" (alt="该图片无法显示" width="200" height="100")>
     ```

5. ##### 块元素与行内元素

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


6. ##### 表单

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

表格

```
<h1>标题</h1>
<table>
<tr> //第一行内容
<th>1</th> //第一行第一列内容
<th>2</th> //第一行第二列内容
</tr>
```



#### 三、CSS{#3}

1. 用于定义网页样式和布局的样式表语言。可以指定页面中各个元素的颜色、字体、大小、间距、边看等样式。
2. ##### 语法：

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

3. ##### 导入方式


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

4. ##### 选择器

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

5. ##### 常用属性

   （1）透明度
   
   - rgba属性可以调节当前文本或背景颜色的透明度，取值范围0~1，
   
   - opacity属性调整整个元素及所有子元素的透明度，取值范围也是0~1。
   
     ```
     .background-color {
         background-color:rgb(235,70,224);
     }
     
         .text-opacity {
         color: rgba(235,70,224,0.5);
         }
     ```
   
   （2）颜色
   
   - 文本颜色color；
   
   - 背景颜色background color；
   
   - 边框颜色border color。
   
   - 表示颜色的两个方式：
   
     ```
             .rgb {
             /* rgb(red,green,blue)*/
             color:rgb(235,70,224);
             }
     
             .hex {
             color:#eb46e0;
             }
     ```

<h1 style="font:bolder 15px 'KaiTi';">例：这是一个font复合属性

6. ##### 盒子模型

<img src="C:\Users\ASUS\Downloads/D302AC2C8F790B4E5A21CF3C91719836.png" alt="D302AC2C8F790B4E5A21CF3C91719836" style="zoom: 25%;" />

+ 相关属性

  + 内容（Content）盒子包含的实际内容，即文本、图片等。
  + 内边距（Padding）围绕在内容的内部，是内容与边框之间的空间。可以使用padding属性设置。
  + 边框（Border）围绕在内边距的外部，是盒子的边界。可以使用border属性来设置。
  + 外边距（Margin）围绕在边框的外部，是盒子与其他元素之间的空间。可以使用margin属性来设置。

7. ##### 媒体查询

   - 基本语法

   ```
   html中添加:
   <meta name="viewport" content="width=device-width(将视口宽度设置为设备理想宽度）, initial-scale=1.0（缩放比例1;1)">
   css中：
   @media [媒体类型] and (媒体特性) {
     /* 符合条件时应用的CSS样式 */
   }
   1.媒体类型（可不加）：可选值如 `screen`（屏幕）、`print`（打印）、`all`（所有设备）。
   2.媒体特性：如 `min-width`、`max-width`、`orientation`（方向）、`resolution`（分辨率）。
   ```

   - 断点（根据设备屏幕宽度设定的临界值）
     | **设备类型** | **断点范围**                            | **用途**     |
     | ------------ | --------------------------------------- | ------------ |
     | 手机         | `max-width: 576px`                      | 小屏幕优化   |
     | 平板         | `min-width: 577px and max-width: 992px` | 中等屏幕适配 |
     | 桌面         | `min-width: 993px`                      | 大屏幕布局   |

     现代响应式设计趋势：优先使用内容驱动断点（根据内容布局调整，而非固定设备尺寸）。

   - 实际应用

     - 调整布局（Grid/Flexbox）

     ```css
     .container {
       display: grid;
       grid-template-columns: 1fr 1fr;
     }
     
     /* 平板竖屏：单列布局 */
     @media (max-width: 768px) {
       .container {
         grid-template-columns: 1fr;
       }
     }
     
     /* 手机：隐藏侧边栏 */
     @media (max-width: 576px) {
       .sidebar {
         display: none;
       }
     }
     ```

     - 字体大小适配

     ```css
     h1 {
       font-size: 2rem;
     }
     
     /* 小屏幕缩小字体 */
     @media (max-width: 768px) {
       h1 {
         font-size: 1.5rem;
       }
     }
     ```

     - 图片响应式

     ```css
     img {
       max-width: 100%; /* 图片不超出容器 */
       height: auto;    /* 保持比例 */
     }
     ```

8. ##### 布局

- 普通布局（元素默认从上至下、从左至右排列）
- 弹性布局（一维布局，灵活实现水平或垂直居中对齐，适合导航栏等场景）

```
 <style>
    .flex {
    display: flex;
    /*flex-direction: column;*/
    height: 120px;
    justify-content: center;   行内居中
    align-items:center;    对角线居中
    }

    .item1 {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center; 
    }

    .item2 {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center; 
    }

    .item3 {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center; 
    }
    </style>
```

- 网格布局（二维布局，可同时精确控制行和列，适合复杂页面设计）

```
<style>
    .grid {
    display: grid;
    gird-template-rows:100px 200px 300px;/* 3行，高度分别为。。。 */
    grid-template-columns: 1fr 2fr;/* 2列，宽度比例为1:2 */
    grid-template-columns: repeat(4,1fr);/* 4列，每行宽度均相等 */
    grid-auto-rows: 100px;/* 若网格项目超出显式定义的行数，新增行高为100px */
    grid-auto-columns: 1fr;/* 超出显式定义时自动生成的列 */

    grid-gap: 12px;/* 行与列之间的间距 */
}
    </style>
</head>
<body>
    <div class="grid">
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
        <div>网格项目</div>
    </div>
</body>
```

- 浮动布局（元素通过 `float` 属性脱离文档流，实现左右浮动）

  - 浮动的三大特性

    - 脱标：

      脱离标准流（当元素设置了浮动之后，元素就会脱离标准流的控制移动到指定的位置，浮动的盒子就不再保留原来所占的位置，就像漂浮在空中一样，脱离了原来的地面）。

    - 一行显示：

      顶部对齐（如果多个盒子同时设置了浮动，那么他们就会按照属性值一行内显示，并且顶端对齐排列）。

    - 具备行内块元素特性（不管原先是什么模式的元素，添加了浮动之后，都会具有行内块元素相似的特性）。

  - 浮动和行内块的区别：

    浮动的元素是相互贴靠在一起的，不会有缝隙，如果父级宽度装不下这些浮动的盒子，多出去的盒子就会另起一行，而行内块元素，它彼此之间是有缝隙的，不如浮动这么方便。

  - 浮动的典型应用：

    让多个块级元素在同一行内排列显示。

  - 浮动注意：

    浮动是相对于父元素浮动，只会在父元素的内部移动。

  - 浮动清除：

    - 在浮动元素的父元素中添加overflow属性，指定值为hidden；
    - 伪元素清除法：在浮动标签的父元素添加一个伪元素。

  ```
   <style>
          .father{
              height: 150px;
              border: 3px solid brown;
          }
          .left-son{
              width: 100px;
              height: 100px;
              background-color: pink;
              float: left;
          }
          .right-son{
              width: 100px;
              height: 100px;
              background-color: yellow;
              float: right;
          }
          .father2{
              border: 3px solid brown;
              overflow: hidden;
          }
          .left-son2{
              width: 100px;
              height: 100px;
              background-color: pink;
              float: left;
          }
          .right-son2{
              width: 100px;
              height: 100px;
              background-color: yellow;
              float: right;
          }
          .father3{
              border: 3px solid brown;
          }
          .father3::after{
              content: "";
              display: table;
              clear: both;
          }
          .left-son3{
              width: 100px;
              height: 100px;
              background-color: pink;
              float: left;
          }
          .right-son3{
              width: 100px;
              height: 100px;
              background-color: yellow;
              float: right;
          }
      </style>
  ```

-  定位布局（元素按照模式定位在页面中）

  - 相对定位：相对于元素在文档流中的正常位置进行定位。（没搬家，可稍微移动）

    ```
    （类名：box-relative）
    
    position:relative
    
    left:100px
    
    right:100px
    ```

  - 绝对定位：相对于其最近的已定位祖先元素进行定位，不占据文档流。（搬家了，不再占用原本位置）

    ```
    position:absolute
    ```

  - 固定定位：相对于浏览器窗口进行定位。不占据文档流，固定在屏幕上的位置不随滚动而移动。（贴在屏幕上，不随页面一起滚动）

    ```
    position:fixed 
    ```

#####                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        