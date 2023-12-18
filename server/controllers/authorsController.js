import AuthorsService from '../services/authorsService.js'
import Controller from './baseController.js'


const AuthorsController = new Controller(AuthorsService)

export default AuthorsController;
