var tileSize = 128;

var speed = 3;

function render() {
	c.fillStyle = "#272727";
	c.fillRect(0, 0, WIDTH, HEIGHT);
	
	var viewPortX = -(localPlayer.posX) + (WIDTH / 2);
	var viewPortY = -(localPlayer.posY) + (HEIGHT / 2);
	
	// Render the map
    for(var x = 0; x < gameMapWidth; x++){
        for(var y = 0; y < gameMapHeight; y++) {
			var posX = viewPortX + (x * tileSize);
			var posY = viewPortY + (y * tileSize);
            
            // Check if this is outside of the screen
            if(posX + tileSize > 0 && posX < WIDTH && posY + tileSize > 0 && posY < HEIGHT) {
                c.drawImage(getTileImage(x, y), posX, posY);
            }
        }
    }
	
	// Render the player
	c.drawImage(loadedTextures[99].image, (WIDTH / 2) - (tileSize / 2), (HEIGHT / 2) - (tileSize / 2));
}

// Load Page //
var frameCount = 0;

function renderLoad() {
	c.fillStyle = "black";
	c.fillRect(0, 0, WIDTH, HEIGHT);
	
	c.fillStyle = "white";
	c.font = "30px 'EB Garamond'";

	frameCount++;
	
	if(frameCount === 40) {
		frameCount = 0;
	}
	
	var text = "Loading";
	for(var fc = 0; fc < Math.floor(frameCount / 10); fc++) {
		text += ".";
	}
	
	var textSize = c.measureText(text);
	c.fillText(text, (WIDTH / 2) - (textSize.width / 2), (HEIGHT / 2) - 15);
}