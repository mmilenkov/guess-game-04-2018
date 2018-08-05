var colors = generateRandomColors(gameDiff);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorIndex(); // random color pick
var colorDisplay = document.querySelector("#colorDisplay")
colorDisplay.textContent = pickedColor;
var guessStatus = document.querySelector("#gameStatus")
var gameOver = false;
var gameDiff = 6;
var easyGame = document.querySelector("#easy");
var hardGame = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var resetBttn = document.querySelector("#reset");


easyGame.addEventListener("click", function(){
	gameDiff = 3;
	h1.style.backgroundColor = "steelblue";
	hardGame.classList.remove("hover");
	easyGame.classList.add("hover");
	colors = generateRandomColors(gameDiff);
	pickedColor = randomColorIndex();
	colorDisplay.textContent = pickedColor;
	guessStatus.textContent = " ";
	for(var i=0; i<squares.length;i++)
	{
		if(colors[i])
		{
		squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
		
	}
})

hardGame.addEventListener("click", function(){
	gameDiff = 6;
	h1.style.backgroundColor = "steelblue";
	hardGame.classList.add("hover");
	easyGame.classList.remove("hover");
	colors = generateRandomColors(gameDiff);
	pickedColor = randomColorIndex();
	colorDisplay.textContent = pickedColor;
	guessStatus.textContent = " ";
	for(var i=0; i<squares.length;i++)
	{
		
		squares[i].style.backgroundColor = colors[i];
		if(i>2)
		{
		squares[i].style.display = "block";
		}
	}
})

resetBttn.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	colors = generateRandomColors(gameDiff);
	pickedColor = randomColorIndex();
	colorDisplay.textContent = pickedColor;
	guessStatus.textContent = " ";
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
})

for(var i=0;i<squares.length;i++)
{
	//initial colors
	squares[i].style.backgroundColor = colors[i];
	//click listeners
	squares[i].addEventListener("click", function()
		{
		var clickedSquare = this.style.backgroundColor;
			console.log(clickedSquare, pickedColor);
				if(clickedSquare === pickedColor)
				{
					guessStatus.textContent = "Correct!";
					changeColors(clickedSquare);
					h1.style.backgroundColor = clickedSquare;
					reset.textContent = "Play Again?";
					return gameOver = true;
				}

				else
				this.style.backgroundColor = "#232323";
				guessStatus.textContent = "Try Again!";
			
			
		});
}

function changeColors(color)
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function randomColorIndex()
{
var random = Math.floor(Math.random() *colors.length); // doesn't overflow due to starting at 0 itself
return colors[random];
}

function generateRandomColors(num)
{
	var arr = []
	for (var i =0; i <num; i++)
	{
	arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var red = Math.floor(Math.random() *256); // doesn't overflow due to starting at 0 itself so you need 1 over what you want to get as a max
	var blue = Math.floor(Math.random() *256); // doesn't overflow due to starting at 0 itself
	var green = Math.floor(Math.random() *256); // doesn't overflow due to starting at 0 itself

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

easyGame.addEventListener("mouseover", function(){
	easyGame.classList.add("hover");
})

easyGame.addEventListener("mouseout", function(){
	easyGame.classList.remove("hover");
})

hardGame.addEventListener("mouseover", function(){
	hardGame.classList.add("hover");
})

hardGame.addEventListener("mouseout", function(){
	hardGame.classList.toggle("hover");
})

resetBttn.addEventListener("mouseover", function(){
	resetBttn.classList.add("hover");
})

resetBttn.addEventListener("mouseout", function(){
	resetBttn.classList.remove("hover");
})
