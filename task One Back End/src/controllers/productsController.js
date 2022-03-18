const { connection } = require("../../config/db.config");
const AppError = require("../../util/appError");

exports.getAllproducts = (req, res, next) => {

    try {
        
        const query = `SELECT * FROM products.productstable`
        connection.execute(query, function (err, data) {
            if (err) {
                next(new AppError(err.message, 500))
            }
            res.status(200).json({ message: "succses", products: data })
        })
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message })
    }
}
exports.filterproducts= (req, res, next) => {

    try {
        const {main , sub}= req.body 
        const query = ` SELECT * FROM products.productstable inner join categories on SubCategory = categoriesID WHERE  
        MaincategoriesName ='${main}' AND  categoriesName ='${sub}'  ;`
        connection.execute(query, function (err, data) {
            if (err) {
                next(new AppError(err.message, 500))
            }
            res.status(200).json({ message: "succses", products: data })
        }) 
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message })
    }
}