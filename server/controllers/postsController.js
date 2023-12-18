import Controller from './baseController.js'
import PostsService from '../services/postsService.js'
import { Author } from '../models/index.js'

class PostsController extends Controller
{
    getPage(request, response){
        this.service.getPage(request.query.page ?? 1, {
            include: {
                model: Author,
                as: 'author_info',
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        }).then(
            ({ results, pages }) => response.header("X-Page-Count", pages).send(results)
        )
    }
}

export default new PostsController(PostsService);
