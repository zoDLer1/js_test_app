export const paramValidate = (param) =>
{
    const intParam = parseInt(param)

    if (Number.isNaN(intParam)) {
        return false
    }
    return true
}


export const parseIntegerParam = (from, paramName, allowNull=false) => {
    return (request, response, next) => {
        if(allowNull && (request[from][paramName] === undefined)){
            if(next) next();
            return true
        }

        const validatonResult = paramValidate(request[from][paramName])

        if (validatonResult)
        {
            if(next) next();
            request[from][paramName] = parseInt(request[from][paramName])
        }
        else{
            response.status(400).send(`${paramName} param must be integer`);
        }
        return validatonResult
    }
}


export const parseIntegerUrlParam = (paramName) => {
    return parseIntegerParam('params', paramName)
}


export const parseIntegerQueryParam = (paramName, allowNull) => {
    return parseIntegerParam('query', paramName, allowNull)
}
