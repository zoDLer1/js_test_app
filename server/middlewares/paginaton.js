import { parseIntegerParam } from "./parseParams.js";



const pagination = (request, response, next) => {

    const isInt = parseIntegerParam('query', 'page', true)(request, response)

    if (!isInt)
    {
        return false
    }
    if (request.query.page <= 0){
        response.status(400).send('page must be possitive number');
        return false
    }
    next();
    return true
}

export default pagination;
