### 前端学习

#### 1. express 框架搭建使用

##### 1.1本地环境搭建

1.node

2.npm

3.express全局安装

(1)全局安装: npm install express -g

(2)npm install -g express-generator

**tips**：4.x 版本把generator分离出来了，需要单独安装



##### 1.2本地安装搭建server项目

```
// 终端:

// 创建express 项目
express server
// 进入项目
cd server
// 初始化项目
npm install
// 启动项目
npm start / npm run start
```



##### 1.3本地server app.js配置

```

```



#### 2. simple-project搭建使用



#### 3. cypress-project搭建使用

##### 3.1 cypress环境

1.安装node.js

- https://nodejs.org/zh-cn/

- 按步骤安装好node 和 npm

2.安装cypress

- 新建项目目录cypress-pro

- 项目包初始化：`npm init `，一直回车生成package.json文件

- 安装cypress：`npm install cypress --save-dev`

3.配置cypress启动项

- 进入项目下的package.json文件，在script下面写入`"cypress": "cypress open"`配置启动项

4.运行项目

- 输入npm run cypress即可运行

##### 3.2 测试用例

测试集(套)

​	测试用例1：

​	测试用例2：

​	测试用例3：

```
模板：
/**
* title：测试集名称
* fn：测试集回调
* context 或者 describe 都可
*/
context(title:'登录测试',fn: ()=>{
	// 测试用例
	it(title: '输入正确的用户名和密码，可以登录成功', fn: ()=>{
	})
})

context
describe
it
before
beforeEach
after
afterEach
.only
.skip
```

参考cypress-pro\cypress\integration\3-test-examples\test_login.spec.js

##### 3.3 前端测试

**PO设计模式**：项目分级(封装页面对象，封装页面常见业务流)

page	LoginPage.js // 获取当前页面cypress可识别对象

​			......

​			locator.json // 对象识别属性









1.HTML

2.CSS

3.盒子布局

4.流式布局

5.flex布局

6.bootstrap

7.javaScript

8.jQuery

9.Git

10.Vue+ElementUI

11.React+Antd

12.Vuepress

13.formatjs在react中使用

















