var boxes = document.querySelectorAll('.box');
var s = document.querySelector('.rgbSpan');
var colors = generateRandomColor(6);
var chosenColor = colors[Math.floor(Math.random() * 6)];
s.textContent = chosenColor;
var playBtn = document.querySelector('#reset');
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');
var boxCount = 6;
var statusText = document.querySelector('.status');
statusText.textContent = "GUESS!";

easyBtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = '#102945';
    statusText.textContent = 'GUESS!';
    boxCount = 3;
    this.style.background = '#102945';
    this.style.color = 'white'
    hardBtn.style.background = 'white';
    hardBtn.style.color = '#102945';
    colors = generateRandomColor(boxCount);
    chosenColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = chosenColor;

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = '#102945';
    statusText.textContent = 'GUESS!';
    boxCount = 6;
    this.style.background = '#102945';
    this.style.color = 'white'
    easyBtn.style.background = 'white';
    easyBtn.style.color = '#102945';
    colors = generateRandomColor(boxCount);
    chosenColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = chosenColor;

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].style.display = 'block';
    }
});

playBtn.addEventListener('click', function () {
    document.querySelector('h1').style.background = '#102945';
    statusText.textContent = 'GUESS!';
    colors = generateRandomColor(boxCount);
    chosenColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = chosenColor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
});

for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function () {
        var selectedColor = this.style.background;
        if (chosenColor === selectedColor) {
            correct();
        } else {
            incorrect(this);
        }

    });
    
}

function correct() {
    for (var i = 0; i < colors.length; i++) {
        boxes[i].style.background = chosenColor;
    }
    document.querySelector('h1').style.background = chosenColor;
    statusText.textContent = 'CORRECT!'
}

function incorrect(x) {
    x.style.background = '#232323';
    statusText.textContent = 'TRY AGAIN!';
}

function generateRandomColor(num) {   
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}