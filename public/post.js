module.exports = function (arr, arr2) {
    let orig = document.getElementById('original');
    let res = document.getElementById('result');
    if (typeof(arr)=='array') {
        orig.innerText= arr2 ? '[' + arr2.join(', ') + ']' : '[' + arr.join(', ') + ']';
        res.innerText='[' + arr.join(', ') + ']';
    } else {
        res.innerText=arr;
    }
}
