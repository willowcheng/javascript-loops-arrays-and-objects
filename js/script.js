var html = '';
var rgbColor;

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    var color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
}

function print(message) {
    document.write(message);
}

for (var dummy = 0; dummy < 10; dummy++){
    rgbColor = randomColor()
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);