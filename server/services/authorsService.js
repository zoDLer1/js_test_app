import { Author } from "../models/index.js"
import Service from "./baseService.js"

const AuthorsService = new Service(Author)

export default AuthorsService
