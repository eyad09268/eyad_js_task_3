function createBox(num) {
    var box = ''
    for (var i = 0; i < num; i++) {
        if (i % 2 == 0) {
            box += `<div class="even-box"><h1 id="even">` + i + ` even num</h1></div>`
        } else {
            box += `<div class="odd-box"><h1 id="odd">` + i + ` odd num</h1></div>`
        }
    }
    return box
}

var input = prompt('Enter a number')
document.getElementById('box').innerHTML = createBox(input)

