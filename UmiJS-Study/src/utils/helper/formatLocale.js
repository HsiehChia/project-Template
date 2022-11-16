/**
 * @param {string} string
 * @returns {string} A locale string (e.g. `fr_FR`).
 */
export const fromReactIntl = (string) => {
  return string.replace(/\-/g, '_')
}

/**
 * @param {string} string
 * @returns {string} A string (e.g. `fr-FR`).
 */
export const toReactIntl = (string) => {
  return string.replace(/\_/g, '-')
}
