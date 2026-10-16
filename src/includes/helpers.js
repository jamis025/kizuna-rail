/**
 * Generates a unique Japan Rail like confirmation code for bookings.
 * @returns {string} A unique confirmation code.
 */
const generateConfirmationCode = () => {
    return 'JR' + Math.random().toString(36).substring(2, 10).toUpperCase();
};

/**
 * Converts kilometers to miles.
 * @param {number} km - The distance in kilometers.
 * @returns {number} The equivalent distance in miles.
 */
const kmToMiles = (km) => {
    const conversionFactor = 0.621371;
    return km * conversionFactor;
};

/**
 * 
 * @param {number} yen
 * @returns {number}
 */
const yenToUsd = (yen) => {
    const exchangeRate = 0.0066; 
    return yen * exchangeRate;
};

/**
 * Converts a month number to its three-letter abbreviation.
 * @param {number|string} monthNum - The month number from 1 to 12.
 * @returns {string|number} The month abbreviation, or the original value if invalid.
 */
const getMonthAbbreviation = (monthNum) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = Number(monthNum) - 1;

    return Number.isInteger(monthIndex) && monthIndex >= 0 && monthIndex < months.length
        ? months[monthIndex]
        : monthNum;
};

export { generateConfirmationCode, getMonthAbbreviation, kmToMiles, yenToUsd };