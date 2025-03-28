## Github学习笔记

1. ##### Github页面操作

![image-20250323161503197](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250323161503197.png)

+ repositories：储存库(存放代码与文件)
  + 左侧是我的项目
  + 右侧是根据喜好推荐的项目

+ pull requests：参与或修改别人项目时，提出申请将更改合并到主分支。

+ commit：提交对文件的更改

+ Insights：数据分析

+ Security：安全报告

+ 右上角的图标可以打开侧边栏。

  ![image-20250323162134607](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250323162134607.png)

+ set status：设置状态

+ Your profile：主页面

  + contribution in last year：可以显示提交记录（提交次数越多，颜色越深）

+ stars：相当于收藏功能

+ Your gists：个人代码片段

+ Your organizations：个人加入的组织

+ Your enterprises：个人加入的企业

+ Your sponsors：个人赞助情况

+ Feature preview：功能预览

+ GitHub Docs：GitHub文档

+ GitHub Support：GitHub支持

+ GitHub Community：GitHub 社区

  ![image-20250323162828392](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250323162828392.png)搜索框输入关键词得到有关项目

  ![image-20250323163057119](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250323163057119.png)

+  蓝色底色的部分：相关标签、话题
+ 左侧是可以筛选的语言。

![image-20250323172111351](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20250323172111351.png)

点击进入一个页面，其中：

+ Issues：评论/讨论页
+ Fork：复制仓库，生成其他用户项目副本的操作
+ code：可以将代码下载本地
+ README.md：说明书，告知仓库的相关信息

2. ##### Git与GIthub

1. 推送本地项目到Github

   ```
   git init     //初始化仓库
   
   git add .    //将所有修改和未追踪文件添加到暂存区  (git add <file>是追踪新文件或暂存修改)
   
   git commit  -m "注释"    //提交更改
   
   git remote add origin<URL>
   
   git push -u oringin main(分支)
   ```

2. 从Github更新本地代码

   ```
   git pull origin main  //拉取远程main分支的更新基本语法
   ```

#### 查看

1. 查看状态

   ```
   git status
   ```

2. 查看提交历史

   ```
   git log    //完整历史
   
   git log --oneline   //简洁模式
   ```

#### 分支管理

1. 创建与切换分支

   ```
   git branch < 分支名>   //创建分支
   
   git checkout <分支名>   //切换分支
   ```

2. 合并分支

   ```
   git checkout main
   
   git merge <分支名>
   ```

3. 删除分支

   ```
   git branch -d <分支名>  //删除已合并的分支
   
   git branch -D <分支名>  //删除未合并的分支
   ```

#### 远程仓库

1. 推送代码

   ```
   git push -u origin main  //首次推送设置上游分支
   
   git push  //后续推送
   ```

   

2. 拉取代码

   ```
   git pull origin main   //拉取远程更新并合并
   
   git fetch origin     //仅获取远程更新不合并
   ```

   