const getInstanse = (model, key = 'id') => {
    return (request, response, next) =>
    {
        const condition = {}
        condition[key] = request.params[key]
        model.findOne({
            where: condition,
        }).then((value) => {
            if (!value) {
                response.status(404).send(`Object with ${key}=/${request.params[key]}/ not found`)
            }
            else {
                request.instance = value
                next();
            }

        })
    }
}

export default getInstanse
