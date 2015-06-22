var SVG = {
    createCanvas : function( width, height, containerId ){
        var container = document.getElementById( containerId );
        var canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        container.appendChild( canvas );
        return canvas;
    },
    createLine : function (x1, y1, x2, y2, color, w) {
        var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        aLine.setAttribute('x1', x1);
        aLine.setAttribute('y1', y1);
        aLine.setAttribute('x2', x2);
        aLine.setAttribute('y2', y2);
        aLine.setAttribute('stroke', color);
        aLine.setAttribute('stroke-width', w);
        return aLine;
    }
}

var wWidth = window.innerWidth;
var wHeight = window.innerHeight;

var canvas = SVG.createCanvas( wWidth , wHeight , 'container' );

var lines = [];

lines.addLine = function( line ){
    this.push( line );
    return line;
}

function start() {
    var lineElement, i, x1;

    for (i = 1; i < 11; i += 1) {
        x1 = Math.floor(Math.random() * wHeight / 2),
            lineElement = lines.addLine( SVG.createLine(x1, 0, 800, 600, 'rgb(0,0,' + x1 + ')', i) );
        canvas.appendChild( lineElement );
    }
}

start();
//setInterval(start(), 500);