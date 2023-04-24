import { HTML_COLOR_STRINGS } from './constants.js'

// build a function to check that color input is a valid color
export function checkColor(color) {
    // check if color is a valid color
    // if not, return false
    // if so, return true
    const regex = /^#[0-9A-F]{3|6}$/i;

    if (regex.test(color)) {
        return true;
    } else if (HTML_COLOR_STRINGS.includes(color)) {
        return true;
    }
    return "Invalid color, please enter a valid color keyword or hex code";
}