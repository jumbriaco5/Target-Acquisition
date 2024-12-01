/*  
    This file is meant to contain all of the data about every sprite other than the player
    The walls, projectile types, and other objects in the game should have their data here
*/
var SpriteData = function()
{
    this.debugGridOption = true;
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
        context.strokeStyle = "black";
        context.lineWidth = this.wallThick;
        for (var i=0; i < walls[levelNum].length; ++i) // for each coordinate set
        {
            if (walls[levelNum][i].skip == true)
            {
                context.moveTo(walls[levelNum][i].x, walls[levelNum][i].y);
            }

            if (walls[levelNum][i].ellipse) //if the wall coords have a ellipse in it
            {
                context.ellipse(
                    walls[levelNum][i].x,  walls[levelNum][i].y,
                    walls[levelNum][i].rx, walls[levelNum][i].ry, walls[levelNum][i].rot, 
                    walls[levelNum][i].sA, walls[levelNum][i].eA, true // <-- clockwise bool
                )
                context.stroke();
            }
            else
            {
                context.lineTo(walls[levelNum][i].x, walls[levelNum][i].y);
                context.stroke();
            }
        }
        if (this.debugGridOption == true)
            { this.drawDebugGrid("red"); }
        
        context.restore();
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

var Projectile = function() // Projectile constructor
{

}

Projectile.prototype = 
{
    
}

