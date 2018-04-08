import * as HSecondsUtils from './HSecondsUtils'

// format date into this format
// 2 years, 1 day, 3 hours, 44 minutes and 38 seconds
export const formattedDateFromSeconds = (seconds) => {
  // default cases
  if (seconds <= 0) {
    return 'now'
  }

  // get date components
  const durationYear = HSecondsUtils.getYears(seconds)
  const labelYear = durationYear > 1 ? 'years' : 'year'
  const durationDays = HSecondsUtils.getDays(seconds)
  const labelDays = durationDays > 1 ? 'days' : 'day'
  const durationHours = HSecondsUtils.getHours(seconds)
  const labelHours = durationHours > 1 ? 'hours' : 'hour'
  const durationMinutes = HSecondsUtils.getMinutes(seconds)
  const labelMinutes = durationMinutes > 1 ? 'minutes' : 'minute'
  const durationSeconds = HSecondsUtils.getSeconds(seconds)
  const labelSeconds = durationSeconds > 1 ? 'seconds' : 'second'

  // prefer array rather string because
  // join will optmise all check staff
  let dateComponents = []
  dateComponents.push(durationYear > 0 ? `${durationYear} ${labelYear}` : '')
  dateComponents.push(durationDays > 0 ? `${durationDays} ${labelDays}` : '')
  dateComponents.push(durationHours > 0 ? `${durationHours} ${labelHours}` : '')
  dateComponents.push(durationMinutes > 0 ? `${durationMinutes} ${labelMinutes}` : '')
  dateComponents.push(durationSeconds > 0 ? `${durationSeconds} ${labelSeconds}` : '')
  dateComponents = dateComponents.filter(val => (val && val.length > 0))

  // format date
  let dateValue = dateComponents.slice(0, (dateComponents.length - 1)).join(', ')
  dateValue += dateValue ?
    ` and ${dateComponents.slice(dateComponents.length - 1)}`
    : dateComponents.slice(dateComponents.length - 1)
  return dateValue
}

// date defualt modules
const HDateUtils = () => {

}

export default HDateUtils
