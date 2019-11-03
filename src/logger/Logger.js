
const log = level => (message, ...optionals) => {
  switch (level) {
    case 'INFO':
      console.info(message, optionals)
      break
    case 'WARN':
      console.warn(message, optionals)
      break
    case 'ERROR':
      console.error(message, optionals)
      break
    default:
      break
  }
}

const infoLogger = log('INFO') // not executed
const errorLogger = log('ERROR') // not executed
const warnLogger = log('WARN') // not executed

const Logger = {
  infoLogger,
  errorLogger,
  warnLogger,
}

export default Logger
