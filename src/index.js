module.exports = function reverse (n) {
    n = String(n);
    return n[0] === '-' ? Number(n.substr(1).split('').reverse().join('')) :
        Number(n.split('').reverse().join(''));
}
