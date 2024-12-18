/*  
    This file is meant to contain all of the data about every sprite other than the player
    The walls, projectile types, and other objects in the game should have their data here
*/
var SpriteData = function()
{
    this.debugGridOption = false;
    this.wallThick = 15; // Wall thickness

    this.spritesheet = new Image();
}

SpriteData.prototype =
{
    drawDebugGrid: function(color) // Helps with building levels
    {
        context.fillStyle = color;
        for (var i=0; i < canvas.width; i = i + 100) 
        {
            context.fillRect(i, 0, 1, canvas.height);
            context.fillRect(0, i, canvas.width, 1);
        }
    },

    drawWalls: function(levelNum) //Draws a wall, and defines the wall as a sprite
    {
        context.save();
        context.beginPath();
        context.lineWidth = this.wallThick;
        for (var i=1; i < walls[levelNum].length; ++i) // for each coordinate set
        {
            if (walls[levelNum][i].skip == true)
            {
                context.strokeStyle = "black";
                context.strokeWidth = 11;
                context.moveTo(walls[levelNum][i].x, walls[levelNum][i].y);
            }

            else if (walls[levelNum][i].ellipse) //if the wall coords have a ellipse in it
            {
                context.strokeStyle = "black";
                context.ellipse(
                    walls[levelNum][i].x,  walls[levelNum][i].y,
                    walls[levelNum][i].rx, walls[levelNum][i].ry, walls[levelNum][i].rot, 
                    walls[levelNum][i].sA, walls[levelNum][i].eA, true // <-- clockwise bool
                )
                context.stroke();
            }
            else if (walls[levelNum][i].bounce)
            {
                context.strokeStyle = "pink";
                context.moveTo(walls[levelNum][i - 1].x, walls[levelNum][i - 1].y);
                context.lineTo(walls[levelNum][i].x, walls[levelNum][i].y);
                context.stroke();
            }
            else
            {
                context.strokeStyle = "black";
                context.lineTo(walls[levelNum][i].x, walls[levelNum][i].y);
                context.stroke();
            }
        }
        if (this.debugGridOption == true)
            { this.drawDebugGrid("red"); }
        
        if (this.door) {
            this.drawDoor();
        }
        context.restore();
    },

    drawButton: function() {
        const buttonLength = 200; // Length of the button
        const buttonThickness = 50; // Thickness of the button
        const centerX = 1200; // X coordinate of buttons center
        const centerY = 300; // Y coordinate of buttons center (default = 130)
    
        const startX = centerX - buttonLength / 2;
        const startY = centerY - buttonThickness / 2;

        this.button = {
            x: startX,
            y: startY,
            width: buttonLength,
            height: buttonThickness,
        };
    
        context.save();
        context.fillStyle = "red";
        context.fillRect(startX, startY, buttonLength, buttonThickness);
    
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.strokeRect(startX, startY, buttonLength, buttonThickness);
    
        context.fillStyle = "white";
        context.font = "20px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        //context.fillText("Button", centerX, centerY);
    
        context.restore();
    },

    drawDoor: function() {
        if (this.door !== null) {
            const doorWidth = 15;
            const doorHeight = 300;
            const centerX = 1400; // X coordinate of door's center
            const centerY = 650; // Y coordinate of door's center
    
            if (!this.door) {
                this.door = {
                    x: centerX - doorWidth / 2,
                    y: centerY - doorHeight / 2,
                    width: doorWidth,
                    height: doorHeight,
                };
            }
    
            context.save();
            context.fillStyle = "red";
            context.fillRect(this.door.x, this.door.y, this.door.width, this.door.height);
            context.restore();
        }
    },

    deleteDoor: function() {
        this.door = null;  // Set the door to null, which removes it
    },

    drawButton2: function () {
        const buttonWidth = 200;
        const buttonHeight = 50;
        const centerX = 200; // X coordinate of the button's center 200
        const centerY = 352; // Y coordinate of the button's center 352
    
        const startX = centerX - buttonWidth / 2;
        const startY = centerY - buttonHeight / 2;
    
        this.button2 = {
            x: startX,
            y: startY,
            width: buttonWidth,
            height: buttonHeight,
        };
    
        context.save();
        context.fillStyle = "green";
        context.fillRect(startX, startY, buttonWidth, buttonHeight);
    
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.strokeRect(startX, startY, buttonWidth, buttonHeight);
    
        context.fillStyle = "white";
        context.font = "20px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        //context.fillText("Win", centerX, centerY);
    
        context.restore();
    },

    drawDoor2: function() {
        if (this.door2 !== null) {
            const doorWidth = 15;
            const doorHeight = 300;
            const centerX = 1700; // X coordinate of door's center
            const centerY = 750; // Y coordinate of door's center
    
            if (!this.door2) {
                this.door2 = {
                    x: centerX - doorWidth / 2,
                    y: centerY - doorHeight / 2,
                    width: doorWidth,
                    height: doorHeight,
                };
            }
    
            context.save();
            context.fillStyle = "green";
            context.fillRect(this.door2.x, this.door2.y, this.door2.width, this.door2.height);
            context.restore();
        }
    },
    
    deleteDoor2: function() {
        this.door2 = null;  // Set the door2 to null, which removes it
    },

    initializeImages: function()
    {
        //Get spritesheet
        this.spritesheet.src = "../images/SpriteSheet.png";
    },

    getWalls: function()
    {
        return walls;
    }
}