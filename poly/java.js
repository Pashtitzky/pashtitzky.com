var starts = [
"matrix(1, 0, 0, 1, 1000, 0)",
"matrix(1, 0, 0, 1, 900, -100)",
"matrix(1, 0, 0, 1, 800, -200)",
"matrix(1, 0, 0, 1, 700, -300)",
"matrix(1, 0, 0, 1, 600, -400)",
"matrix(1, 0, 0, 1, 500, -500)",
"matrix(1, 0, 0, 1, 400, -600)",
"matrix(1, 0, 0, 1, 300, -700)",
"matrix(1, 0, 0, 1, 200, -800)",
"matrix(1, 0, 0, 1, 100, -900)",
"matrix(1, 0, 0, 1, 0, -1000)",
"matrix(1, 0, 0, 1, -1000, 0)",
"matrix(1, 0, 0, 1, -900, -100)",
"matrix(1, 0, 0, 1, -800, -200)",
"matrix(1, 0, 0, 1, -700, -300)",
"matrix(1, 0, 0, 1, -600, -400)",
"matrix(1, 0, 0, 1, -500, -500)",
"matrix(1, 0, 0, 1, -400, -600)",
"matrix(1, 0, 0, 1, -300, -700)",
"matrix(1, 0, 0, 1, -200, -800)",
"matrix(1, 0, 0, 1, -100, -900)",
"matrix(1, 0, 0, 1, 900, 100)",
"matrix(1, 0, 0, 1, 800, 200)",
"matrix(1, 0, 0, 1, 700, 300)",
"matrix(1, 0, 0, 1, 600, 400)",
"matrix(1, 0, 0, 1, 500, 500)",
"matrix(1, 0, 0, 1, 400, 600)",
"matrix(1, 0, 0, 1, 300, 700)",
"matrix(1, 0, 0, 1, 200, 800)",
"matrix(1, 0, 0, 1, 100, 900)",
"matrix(1, 0, 0, 1, 0, 1000)",
"matrix(1, 0, 0, 1, -900, 100)",
"matrix(1, 0, 0, 1, -800, 200)",
"matrix(1, 0, 0, 1, -700, 300)",
"matrix(1, 0, 0, 1, -600, 400)",
"matrix(1, 0, 0, 1, -500, 500)",
"matrix(1, 0, 0, 1, -400, 600)",
"matrix(1, 0, 0, 1, -300, 700)",
"matrix(1, 0, 0, 1, -200, 800)",
"matrix(1, 0, 0, 1, -100, 900)"
];
var random_starts = starts[Math.floor(Math.random() * starts.length)];
document.getElementById("body").style.transform = random_starts;
var colors = ["#3E2723","#880E4F","#1A237E","#0d47a1","#1b5e20","#212121","#827717","#263238","#ff6f00","#004d40"];
var backgrounds = colors[Math.floor(Math.random() * colors.length)];
document.getElementById("setup").style.background = backgrounds;
