//Creating sprite using sprite sheets for animation
var enemies;

var tile_sprite_sheet;
var hero;
var heroHealth = 3;
var explosionDensity=7;
var tile_frames;
var herodirection = true;

var gameState = "intro";
var heroState = 'regular';
var countdownTimer = 0;

var powerUpOne;
var powerUpTwo;


var enemies1;
var enemies2;
var enemies3;

var goal1;
var goal2;
var goal3;

var count1Downtimer=0;
var count2Downtimer=0;

var levelOneAdvance;
var levelTwoAdvance;






//...................................Sprites........................................




// Normally you would put this in a .json file, but I'm putting it here
// for example purposes



//...........................................................................................
var level1Grid = [[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
                 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
                 [1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
                 [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                 [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                 [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
                 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1]]


var level2Grid = [[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
                  [1,0,0,0,1,0,0,0,0,3,3,0,0,0,3,1,0,0,1,1,1,1,1,1,1],
                  [1,0,0,0,0,0,0,0,3,3,3,0,0,3,3,1,0,0,0,0,0,0,0,0,1],
                  [1,0,0,0,0,0,0,3,3,3,3,3,3,3,3,1,0,0,0,0,0,0,0,0,1],
                  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
                  [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
                  [0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                  [0,0,0,0,1,0,0,0,1,],
                  [0,0,0,0,1,0,0,0,1],
                  [0,0,0,0,1,0,0,0,0],
                  [0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
                  [0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
                  [0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                  [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];


var level3Grid = [[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
                  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                  [1,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];


var tileSize = 82;

var Gravity=4;
var platforms;
var groundTouch = false;



var heroSheet;
var heroWalk;
var heroStand;
var heroSprite;
var heroStandFrames = [
                {'name':'HeroStand', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':1536, 'y': 0, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':1792, 'y': 0, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':763, 'y': 256, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':1024, 'y': 256, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':1280, 'y': 256, 'width': 256, 'height': 256}},
                {'name':'HeroStand', 'frame':{'x':1536, 'y': 256, 'width': 256, 'height': 256}},
                
  ];

var heroWalkFrames = [
                    {'name':'HeroWalk', 'frame':{'x':1792, 'y': 256, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':0, 'y': 512, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':256, 'y': 512, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':512, 'y': 512, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':768, 'y': 512, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1536, 'y': 512, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1792, 'y': 512, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':0, 'y': 768, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':256, 'y': 768, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1536, 'y': 768, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1792, 'y': 768, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':0, 'y': 1024, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':256, 'y': 1024, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':512, 'y': 1024, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':768, 'y': 1024, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1024, 'y': 1024, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1280, 'y': 1024, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1536, 'y': 1024, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':1792, 'y': 1024, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':0, 'y': 1280, 'width': 256, 'height': 256}},
                    {'name':'HeroWalk', 'frame':{'x':256, 'y': 1280, 'width': 256, 'height': 256}},
                    
  
  ];
  
  var enemySheet;
  var enemyOneAnimation;
  var enemyOneFrames = [
                       {'name':'One', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},
                       {'name':'One', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},
                       {'name':'One', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},
                       {'name':'One', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},
                       {'name':'One', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},
                       {'name':'One', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},
    
    
    ];
    
    var enemyTwoFrames = [
                          {'name':'Two', 'frame':{'x':1536, 'y': 0, 'width': 256, 'height': 256}},
                          {'name':'Two', 'frame':{'x':1792, 'y': 0, 'width': 256, 'height': 256}},
                          {'name':'Two', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},
                          {'name':'Two', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},
                          {'name':'Two', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},
                          
      ];
      
      var enemyThreeFrames = [
                          {'name':'Three', 'frame':{'x':768, 'y': 256, 'width': 256, 'height': 256}},
                          {'name':'Three', 'frame':{'x':1024, 'y': 256, 'width': 256, 'height': 256}},
                          {'name':'Three', 'frame':{'x':1280, 'y': 256, 'width': 256, 'height': 256}},
                          {'name':'Three', 'frame':{'x':1536, 'y': 256, 'width': 256, 'height': 256}},
                          {'name':'Three', 'frame':{'x':1792, 'y': 256, 'width': 256, 'height': 256}},
                          {'name':'Three', 'frame':{'x':0, 'y': 512, 'width': 256, 'height': 256}},
      ];
      
      var tileFramesOne = [
                          {'name':'tile1', 'frame':{'x':256, 'y': 512, 'width': 256, 'height': 256}},
        
        ];
        
      var tileFramesTwo = [
                    {'name':'tile2', 'frame':{'x':512, 'y': 512, 'width': 256, 'height': 256}},
      ];
      
      var tileFramesThree = [
                      {'name':'tile3', 'frame':{'x':768, 'y': 512, 'width': 256, 'height': 256}},
      ];
      
      var powerUpOne = [
                          {'name':'pow', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}},
                          {'name':'pow', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},
                          {'name':'pow', 'frame':{'x':1536, 'y': 512, 'width': 256, 'height': 256}},
                          {'name':'pow', 'frame':{'x':1792, 'y': 512, 'width': 256, 'height': 256}},
                          {'name':'pow', 'frame':{'x':0, 'y': 768, 'width': 256, 'height': 256}},
      ];
      
      var powerUpTwo = [
                          {'name':'pow2', 'frame':{'x':256, 'y': 768, 'width': 256, 'height': 256}},
                          {'name':'pow2', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
                          {'name':'pow2', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}},
                          {'name':'pow2', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},
                          {'name':'pow2', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},
      ];


function preload() {
  
  heroSheet = loadSpriteSheet('assets/heroSpriteSheet.png',heroStandFrames);
  heroStand = loadAnimation(heroSheet);
  
  heroSheet = loadSpriteSheet('assets/heroSpriteSheet.png',heroWalkFrames);
  heroWalk = loadAnimation(heroSheet);
  
  enemySheet = loadSpriteSheet('assets/EnemySpriteSheet.png',enemyOneFrames);
  enemyOneAnimate = loadAnimation(enemySheet);

  enemySheet = loadSpriteSheet('assets/EnemySpriteSheet.png',enemyTwoFrames);
  enemyTwoAnimate = loadAnimation(enemySheet);
  
  enemySheet = loadSpriteSheet('assets/EnemySpriteSheet.png',enemyThreeFrames);
  enemyThreeAnimate = loadAnimation(enemySheet);
  
  enemySheet = loadSpriteSheet('assets/EnemySpriteSheet.png',tileFramesOne);
  TileOne = loadAnimation(enemySheet);
  enemySheet = loadSpriteSheet('assets/EnemySpriteSheet.png',tileFramesTwo);
  TileTwo = loadAnimation(enemySheet);
  enemySheet = loadSpriteSheet('assets/EnemySpriteSheet.png',tileFramesThree);
  TileThree = loadAnimation(enemySheet);
  
  enemySheet = loadSpriteSheet('assets/EnemySpriteSheet.png',powerUpOne);
  powerUpOneAnimate = loadAnimation(enemySheet);
  
  enemySheet = loadSpriteSheet('assets/EnemySpriteSheet.png',powerUpTwo);
  powerUpTwoAnimate = loadAnimation(enemySheet);
  
  levelOneMusic = loadSound("assets/levelOneMusic.mp3");
  levelTwoMusic= loadSound("assets/levelTwoMusic1.mp3");
  levelThreeMusic= loadSound("assets/LevelThreeMusic.mp3");
  DeathSound= loadSound("assets/deathSound.wav");
  
  winBackground=loadImage("assets/win.png");
  StartBackground=loadImage("assets/StartScreen.png");
  loseBackground=loadImage("assets/lose.png");
  
}

function setup() {
  createCanvas(1500, 1080);
bullets2 = new Group();
bullets = new Group();
enemies = new Group();
powerUps = new Group();

//.........................................HERO...................................................................
  // Create the Player sprite and add it's animations
  hero = createSprite(95, 95, 70, 94);
  hero.shapeColor = 'green';
  hero.scale=.5;
  hero.friction = 0.7;
  hero.setCollider("rectangle", 0,0,80,250);
  hero.addAnimation("heroWalk",heroWalk);
  hero.addAnimation("heroStand",heroStand);
  hero.debug = true;
  
  hero.changeAnimation("heroStand");
    
  //var enemy = createSprite(900,270,100,100);
  //enemy.shapeColor='red';
  //enemies.add(enemy);
  //enemy.scale = .5;
  
  platforms = new Group();
  enemies1 = new Group();
  enemies2 = new Group();
  enemies3 = new Group();
  
     
  levelOneSetup();
  
  
  }
  








function draw() {
  background(50);
  
  switch(gameState){
    
    case 'intro':
      introduction();
      break;
      
      case 'levelOne':
      levelOneDraw();
      break;
      
      case "countdownOne":
      countdownOne();
      break;
      
      case 'levelTwo':
      levelTwoDraw();
      break;
      
      case "countdownTwo":
      countdownTwo();
      break;
      
      case "levelThree":
      levelThreeDraw();
      break;
      
      case 'lose':
      youLose();
      break;
      
      case 'win':
      youWin();
      break;
      
  }
  
 
  
   if(keyIsDown(LEFT_ARROW)){
    hero.scale = .5;
    hero.changeAnimation("heroWalk");
    hero.mirrorX(-1);
    // move left
    hero.velocity.x = -20;
    
    herodirection=false;
 
 }else if(keyIsDown(RIGHT_ARROW)){
    hero.scale = .5;
    hero.changeAnimation("heroWalk");
    hero.mirrorX(1);
    // move right
    hero.velocity.x = 20;
    
    herodirection=true;
 }
 

}






function keyPressed() {


 if (keyCode==UP_ARROW){
    //if(groundTouch){
      hero.changeAnimation('heroWalk');
      hero.velocity.y = -70;
      groundTouch = false;
    //}
 }
    if (keyIsPressed==LEFT_ARROW){
      
    }else if(key ==' '){
      
      if(heroState == 'power'){
      
      if(herodirection){
        
    var bullet = createSprite(hero.position.x,hero.position.y,5,5);
    //speed and direction
    bullet.setSpeed(40,360);
      } else {var bullet = createSprite(hero.position.x,hero.position.y,5,5);
    //speed and direction
    bullet.setSpeed(40,180);
      }
    //bullet disappears after certain number of frames
    bullet.life = 15;
    bullet.shapeColor = 'blue';
    bullets.add(bullet);
      
   }
   
    if(heroState == 'ultimate'){
      
      if(herodirection){
        
    var powbullet = createSprite(hero.position.x,hero.position.y,8,8);
    //speed and direction
    powbullet.setSpeed(40,360); 
      } else {var powbullet = createSprite(hero.position.x,hero.position.y,8,8);
    //speed and direction
    powbullet.setSpeed(40,180);
      }
    //bullet disappears after certain number of frames
    powbullet.life = 30;
    powbullet.shapeColor = 'purple';
    bullets2.add(powbullet);
      
   }
   
  }
}

