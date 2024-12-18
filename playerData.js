/*This file is meant to hold all of the metadata for the player
*/
PlayerData = function()
{
  this.playerImageScale = 0.2, // Scales player image down.
  
  this.playerWidth = 3508 * this.playerImageScale,   // Size hard coded since it can't figure out the size until the image is loaded first, 
  this.playerHeight = 2480 * this.playerImageScale,  // which doesn't really work with the new format of the code -GC

  this.PLAYER_CELL_WIDTH = 697,  //  <-]
  this.PLAYER_CELL_HEIGHT = 684, //    ]--For the spritesheet later on
  this.PLAYER_CELL_X = 84,       //    ]
  this.PLAYER_CELL_Y = 741,      //  <-]

  this.playerX = 0,
  this.playerY = canvas.height - this.playerHeight;
};

PlayerData.prototype =
{
  drawPlayer: function()
  {
    const angle = targetAcquisition.aimSystem.getRotationAngle();
    //console.log("drawing player at: " + this.playerX + ", " + this.playerY);
     
    // Rotate and draw player image
    context.save();
    context.translate(this.playerX + this.playerWidth / 2, this.playerY + this.playerHeight / 2)
    context.rotate(angle);
    context.drawImage(targetAcquisition.playerImage, -this.playerWidth / 2, -this.playerHeight / 2, this.playerWidth, this.playerHeight); 
    /*this.context.drawImage(spritesheet, this.PLAYER_CELL_X, this.PLAYER_CELL_Y,
      this.PLAYER_CELL_WIDTH, this.PLAYER_CELL_HEIGHT = 684,
      this.playerX, this.playerY); */
    context.restore();
  },
}