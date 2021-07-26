## 前端学习

### 2021/7/23

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
// app.js
var http = require('http');
var server = http.createServer(app)

// export default app 改成：
server.listen('3000', () => {
  console.log('server start on port: http://localhost:3000');
})

// 在package.json中配置启动项
{
	"script": {
		"dev": "node app.js"
	}
}
// 启动项目
npm run dev
```



##### 1.4本地MySql引入配置

```
npm install mysql --save

// Navicat新建数据库，取名project_template
// 新建一个user基础表，包括id, username, password, email, address几个基础关键字

// server中新建model/Model.js数据库连接模型配置本地数据库

```



#### 2. simple-project搭建使用





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

















