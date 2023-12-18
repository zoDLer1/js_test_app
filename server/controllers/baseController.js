

class Controller {

    constructor(service) {
        this.service = service
        this.getPage = this.getPage.bind(this)
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
    }

    getPage(request, response) {
        this.service.getPage(request.query.page ?? 1).then(
            ({ results, pages }) => response.header("X-Page-Count", pages).send(results)
        )
    }

    create(request, response) {
        this.service.create(request.body)
            .then(
                (result) => response.status(201).send(result)
            )
            .catch(
                (reason) => response.send(reason.errors)
            )
    }

    update(request, response) {
        this.service.update(request.instance, request.body).then(
            (result) => {
                response.send(result)
            })
    }

    remove(request, response) {
        this.service.delete(request.instance)
            .then(
                () => response.status(204).send()
            )
    }
}


export default Controller;
