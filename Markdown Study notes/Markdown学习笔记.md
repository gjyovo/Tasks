# Markdown学习笔记

### 一、标题级别

###### 可以使用”#“来控制标题级别

```
格式为：“1-6个#”+空格
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

###  二、展示效果

1. ##### 字体效果

+ 颜色

  ```
  <font color=颜色英文>文本</font>
  ```

+ 斜体

  ```
   “*”文本“*”  
   “***”文本“***” （粗斜体）
  ```

+ 粗体

  ```
  “_"文本”_"
  ```

+ emoji

  ```
  ':happy:'
  
  ':pig:'
  ```

+ 高亮标记

  ```
  <mark>文本</mark>
  ```

+ 代码块

  ```
  单行文本：`文本` 
  多行文本：```文本```
  ```

1. 列表

   + 有序列表

     ```
     “数字” + “.” + 空格
     ```

   + 无序列表

     ```
     “*”、“+”或“-” + 空格
     ```

### 三、功能

1. ##### 链接

   + 访问相应网页

     ```
     [链接文字](链接地址)
     ```

   + 打开本地文件

     ```
     [打开hello.md文档](D:./Git/Tasks/hello.md)
     ```

2. ##### 表格

   ```
   Ctrl + T
   或
   | 表头1 | 表头2 |
   |-------|----------|
   | 1| 2 |
   | 3| 4 |
   ```

3. ##### 插入图片

   ```
   ![图片名称]("图片地址")
   ```

4. ##### 引用

   ```
   > 一级引用
   >> 二级引用
   ```

5. ##### 分割线

   ```
   ---回车
   ```

6. ##### 删除线

   ```
   ~~待删除文本~~
   ```

7. ##### 下划线

   ```
   <u>下划线文本</u>
   ```

8. ##### 流程图

   ```mermaid
   graph LR
     A[开始] --> B(处理)
     B --> C{判断}
     C -->|是| D[结束]
     C -->|否| B
   ```

### 四、快捷键

| 功能  | Windows 快捷键 | macOS 快捷键   |
|-----------------------|:----------------------|------------------------|
| 新建文件               | `Ctrl + N`            | `Cmd + N`              |
| 打开文件               | `Ctrl + O`            | `Cmd + O`              |
| 保存文件               | `Ctrl + S`            | `Cmd + S`              |
| 搜索内容               | `Ctrl + F`            | `Cmd + F`              |
| 替换内容               | `Ctrl + H`            | `Cmd + H`              |
| 切换源码模式           | `Ctrl + /`            | `Cmd + /`              |
| 插入表格               | `Ctrl + T`            | `Cmd + T`              |
| 插入代码块             | `Ctrl + Shift + K`    | `Cmd + Shift + K`      |
| 插入链接               | `Ctrl + K`            | `Cmd + K`              |
| 插入图片               | `Ctrl + Shift + I`    | `Cmd + Shift + I`      |
| 加粗文本               | `Ctrl + B`            | `Cmd + B`              |
| 斜体文本               | `Ctrl + I`            | `Cmd + I`              |
| 删除线文本             | `Ctrl + Shift + ~`    | `Cmd + Shift + ~`      |
| 提升标题层级           | `Ctrl + +`            | `Cmd + +`              |
| 降低标题层级           | `Ctrl + -`            | `Cmd + -`              |
| 切换全屏模式           | `F11`                 | `Cmd + Ctrl + F`       |
| 文档大纲面板           | `Ctrl + Shift + L`    | `Cmd + Shift + L`      |
| 快速跳转到某行         | `Ctrl + G`            | `Cmd + G`              |
| 导出为其他格式         | `Ctrl + Shift + E`    | `Cmd + Shift + E`      |
