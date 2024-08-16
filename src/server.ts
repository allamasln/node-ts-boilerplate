import { app, logger } from './app'

const PORT = process.env.PORT || 8080

console.log(process.env.PORT)

app.listen(PORT, () => logger.info(`server is running on ${PORT}`))
