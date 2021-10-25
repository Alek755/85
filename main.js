//I can't figure out why I can't see the car move on the canvas. There are no errors and the output is fine.







//Create a reference for canvas 
canvas =document.getElementById("myCanvas");
ctx =canvas.getContext("2d");

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width =75;
greencar_height =100;

//Set initial position for a car image.
greencar_x =5;
greencar_y =225;

function add() {
	background_imgTag =new Image();
	background_imgTag.onload =uploadBackground;
	background_imgTag.src =background_image;

	greencar_imgTag =new Image();
	greencar_imgTag.onload =uploadgreencar;
	greencar_imgTag.src =greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0) {
		greencar_y -=10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground;
		uploadgreencar;
		add;

	}

}

function down()
{
	if(greencar_y <=400) {
		greencar_y +=10;
		console.log("When down arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground;
		uploadgreencar;
		add;

	}

}

function left()
{
	if(greencar_x >=0) {
		greencar_x -=10;
		console.log("When left arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground;
		uploadgreencar;
		add;

	}

}

function right()
{
	if(greencar_x <=800) {
		greencar_x +=10;
		console.log("When right arrow is pressed, x = " + greencar_x + " | y = " + greencar_y);
		uploadBackground;
		uploadgreencar;
		add;

	}

}
