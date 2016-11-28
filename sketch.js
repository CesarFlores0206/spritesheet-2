//Creating sprite using sprite sheets for animation

var player_sprite_sheet;
var tile_sprite_sheet;
var player_walk;
var player_stand;
var player_sprite;
var tile_frames;





//...................................Sprites........................................




// Normally you would put this in a .json file, but I'm putting it here
// for example purposes
var player_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk02', 'frame':{'x':71, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk03', 'frame':{'x':142, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk04', 'frame':{'x':0, 'y': 95, 'width': 70, 'height': 94}},
  {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 70, 'height': 94}},
  {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 70, 'height': 94}},
  {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 70, 'height': 94}},
  {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 70, 'height': 94}},
  {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 70, 'height': 94}}
];


//...........................................................................................
var level1Grid =[0,0,0,0,0,0,0,0,0,0,0,0];
var tileSize = 80;
var platforms;
var gravity=.8;

function preload() {
  

  // Load the json for the tiles sprite sheet
 

  // Load the explode sprite sheet using frame width, height and number of frames
  explode_sprite_sheet = loadSpriteSheet('assets/explode_sprite_sheet.png', 171, 158, 11);

  // Load player sprite sheet from frames array
  player_sprite_sheet = loadSpriteSheet('assets/player_spritesheet.png', player_frames);
  
  // Load tiles sprite sheet from frames array
  tile_sprite_sheet = loadSpriteSheet('assets/tiles_spritesheet.png', tile_frames);

  // Exploding star animation
  explode_animation = loadAnimation(explode_sprite_sheet);

  // Player walk animation passing in a SpriteSheet
  player_walk = loadAnimation(player_sprite_sheet);

  // An animation with a single frame for standing
  player_stand = loadAnimation(new SpriteSheet('assets/player_spritesheet.png',
    [{'name':'player_stand', 'frame':{'x':284, 'y': 95, 'width': 70, 'height': 94}}]));
}

function setup() {
  createCanvas(800, 400);

bullets = new Group();
enemies = new Group();

//.........................................HERO.........................................................
  // Create the Player sprite and add it's animations
  player_sprite = createSprite(100, 284, 70, 94);
  player_sprite.shapeColor = 'gray';
  player_sprite.scale=.5;
  player_sprite.friction = 0.8;
  //player_sprite.addAnimation();
  //player_sprite.addAnimation();
  
  platforms = new Group();

for (var i = 0;i <level1Grid.length; i++){
  var gridValue = level1Grid[i];
  switch(gridValue){
  case 0:
  var sprite = createSprite(i*tileSize, 330);
  sprite.shapeColor = 'red';
  platforms.add(sprite)
  break;
  /*case 1:
  var sprite = createSprite(i*tileSize, 330);
  platforms.add(sprite)
  break;
  case 2:
  var sprite = createSprite(i*tileSize, 330);
  platforms.add(sprite)
    break;
  */
  }
  
}
}

function draw() {
  clear();
  background(0);



    player_sprite.collide(platforms);
  
  player_sprite.velocity.y +=gravity;
  
 
  
  
  camera.position.x = player_sprite.position.x;
  if(player_sprite.position.y < height-200){
  camera.position.y = player_sprite.position.y;
  }
  //draw the sprite
  drawSprites();
}

function touchStarted() {
  touch_started = true;
}

function mouseMoved() {
  mouse_moved = true;
}
function keyPressed() {
 if(keyIsDown(LEFT_ARROW)){
   
    // flip horizontally
    player_sprite.scale = .5;
    player_sprite.mirrorX(-1);
    // move left
    player_sprite.velocity.x = -8;
 
 }else if(keyCode==RIGHT_ARROW){
    // flip horizontally
    player_sprite.scale = .5;
    player_sprite.mirrorX(1);
    // move right
    player_sprite.velocity.x = 8;

 }else if (keyCode==UP_ARROW){
    player_sprite.velocity.y = -40;
    
   
 }else if(key=='s'){
      var bullet = createSprite(player_sprite.position.x,player_sprite.position.y,5,5);
    //speed and direction
    bullet.setSpeed(40,180);
    //bullet disappears after certain number of frames
    bullet.life = 30;
    bullet.shapeColor = 'white';
    bullets.add(bullet);
      
}
}
function isTouch() {
  return touch_started && !mouse_moved;
}
