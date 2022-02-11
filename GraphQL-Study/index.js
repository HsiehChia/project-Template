// 引入 express 核心库
const express = require('express');
// 引入 结合 express 和 graphql 的中间件
const { graphqlHTTP } = require('express-graphql');
// 引入 graphql 核心库
const { buildSchema } = require('graphql');
// buildSchema 定义查询语句和类型, Query:语句，hello:查询方法名称，String：返回值类型
const schema = buildSchema(`
  type User {
    username: String
    age: Int
    sex: String
    address: String
  }
  type Query {
    hello: String
    height: Int
    accountInfo: User
  }
`);
// root 查询处理器，hello：查询方法 及 返回值
const root = {
  hello: () => {
    return 'hello graphql test';
  },
  height: () => {
    return 288
  },
  accountInfo: () => {
    return {
      username: 'hsieh chia',
      age: 22,
      sex: 'girl',
      address: 'sichuan, chengdu'
    }
  }
};
const app = express();
// /graphql：接口，graphqlHTTP：graphql处理中间件
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  // 是否启用调试界面，false不能调试
  graphiql: true,
}));
// 监听3000端口
app.listen(3000, () => { console.log('http://localhost:3000/graphql')} );