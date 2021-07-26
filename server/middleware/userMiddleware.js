const userModel = require('../model/userModel')

module.exports = {
    /**
     * 获取所有用户信息
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getUser: (req, res, next) => {
        userModel.getUser().then(results => {
            req.userList = results;
            next();
        }).catch(err => {
            next(err);
        })
    }
}