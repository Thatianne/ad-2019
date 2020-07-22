function generateRandom(min, max, exclude) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return exclude.includes(num) ? generateRandom(min, max, exclude) : num;
}

module.exports = generateRandom