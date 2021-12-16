const firstLetterUp = (string) => {
    const firstLetter = string.charAt(0).toUpperCase();
    return `${firstLetter}${string.substr(1)}`;
}

module.exports = firstLetterUp;