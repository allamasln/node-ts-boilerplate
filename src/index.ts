import { pino } from 'pino'

const logger = pino({
  name: 'server start',
  transport: {
    target: 'pino-pretty',
    options: { colorize: true },
  },
})

function main(): void {
  logger.info('Hello')
}

main()
