//* {
//*     error:false,
//*     status: 201,
//*     message:'User created Succesfully',
//*     data:{
//*         id: 5,
//*         firstName: 'Julio'
//*         ...
//*     }
//* }

//? Para respuestas exitosas
const success = ({status, data, message, res, error = false}) => {
    res.status(status).json({
        error,
        status,
        message,
        data
    })
}

//! Para respuestas de errores
const error = ({status, fields, message, res, error = true}) => {
    res.status(status).json({
        error,
        status,
        message,
        fields
    })
}

module.exports = {
    success,
    error
}