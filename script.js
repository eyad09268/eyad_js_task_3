var input = parseInt(prompt('Enter a number'))
var box = ''

for (var i = 0; i < input; i++) {
    if (i % 2 == 0) {
        box += `<div class="even-box"><h1 id="even">` + i + ` even num</h1></div>`
    } else {
        box += `<div class="odd-box"><h1 id="odd">` + i + ` odd num</h1></div>`
    }
}

document.getElementById('box').innerHTML = box
