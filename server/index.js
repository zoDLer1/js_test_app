import express from "express";
import logger from "./middlewares/logger.js";
import autorsRouter from './routes/authorsUrls.js'
import postsRouter from './routes/postsUrls.js'
import bodyParser from "body-parser";


const PORT = process.env.PORT ?? 3000
const app = express();




app.use(logger)
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/authors', autorsRouter)
app.use('/posts', postsRouter)


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
