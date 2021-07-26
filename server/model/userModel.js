/**
 * 用户数据模型
 */
const Model = require('./Model')

module.exports = class userModel extends Model {
    /**
     * @returns 获取所有用户信息
     */
    static getUser() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM `user`';
            this.query(sql).then((result) => {
                resolve(result);
            }).catch((err) => {
                console.log(`获取所有用户信息失败：${err.message}`);
                reject(err);
            })
        })
    }
}