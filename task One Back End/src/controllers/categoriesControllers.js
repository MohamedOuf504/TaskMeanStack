const { connection } = require("../../config/db.config");
const AppError = require("../../util/appError");
const catchAsync = require('../../util/catchAsync')
exports.getMainCreateCategries = (req, res, next) => {
    var subSql = `SELECT * FROM products.categories where isParent = 1`;
    connection.execute(subSql, function (err, result) {

        if (err) {

            next(new AppError(`${err} `, 404));
        }

        res.status(200).json({ message: 'success', data: result })
    });
}
exports.getSubCreateCategries = (req, res, next) => {
    var subSql = `SELECT * FROM products.categories where isParent = 0`;
    connection.execute(subSql, function (err, result) {

        if (err) next(new AppError(`${err} `, 404));
        res.status(200).json({ message: 'success', data: result })
    });
}
exports.getspecificSubCreateCategries = (req, res, next) => {
    var subSql = `SELECT * FROM products.categories where ParentID= ${req.body.categoriesID}`;
    connection.execute(subSql, function (err, result) {
        if (err) next(new AppError(`${err}`, 404));
        res.status(200).json({ message: 'success', data: result })
    })
}