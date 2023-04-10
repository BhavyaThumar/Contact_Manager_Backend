const errorHandler = (err, req ,res, next) =>{
const {costants} = require("../constant")
    const statusCode = res.statusCode ? res.statusCode : 500;
switch (statusCode) {
    case costants.VALIDATION_ERROR:
        res.json({title: "Validation Failed" ,message: err.message, stackTrace: err.stackTrace});
        break;
    case costants.UNAUTHORIZED:
        res.json({title: "Unauthorized" ,message: err.message, stackTrace: err.stackTrace});
        break;

    case costants.FORBIDDEN :
        res.json({title: "Forbidden" ,message: err.message, stackTrace: err.stackTrace});
        break;

    case costants.NOT_FOUND:
        res.json({title: "Not Found" ,message: err.message, stackTrace: err.stackTrace});
        break;

    case costants.SERVER_ERROR:
        res.json({title: "Server Error" ,message: err.message, stackTrace: err.stackTrace});
        break;

    default:
        console.log("No Errors");
    break;
}

    };

module.exports = errorHandler 