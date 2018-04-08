
// get seconds from seconds
export const getSeconds = seconds =>
  (Math.floor((((seconds % (365 * 24 * 60 * 60)) % (24 * 60 * 60)) % (60 * 60)) % (60)))

// get minutes from seconds
export const getMinutes = seconds =>
  (Math.floor((((seconds % (365 * 24 * 60 * 60)) % (24 * 60 * 60)) % (60 * 60)) / (60)))

// get hours from seconds
export const getHours = seconds =>
  (Math.floor(((seconds % (365 * 24 * 60 * 60)) % (24 * 60 * 60)) / (60 * 60)))

// get days from seconds
export const getDays = seconds =>
  (Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)))

// get years from seconds
export const getYears = seconds =>
  (Math.floor(seconds / (365 * 24 * 60 * 60)))
