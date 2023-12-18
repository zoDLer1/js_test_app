import moment from "moment/moment.js";

const logger = (request, response, next) => {
    const time = moment().format('h:mm:ss')
    response.on('finish', () => {
        console.log(`[${time}] ${request.method} - ${request.url} - ${response.statusCode}`)
    });
    next();
}

export default logger;
