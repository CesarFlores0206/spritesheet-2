function levelOneSetup(){

goal1 = createSprite(2050,1470,5,5);
  //var goalImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[97]]));
  goal1.shapeColor = 'blue';
  goal1.debug = true;
  goal1.setCollider("rectangle", 0,0,250,90);
 // goal1.addAnimation("this",goalImage);

  var powerUpOne = createSprite(3000,760,5,5);
    
    powerUpOne.shapeColor='red';
    
    powerUpOne.scale =.5;
    powerUpOne.addAnimation("power1Sprite", powerUpOneAnimate);
    powerUps.add(powerUpOne);
    powerUpOne.debug=true;


  var floorHeight = 100;
  
   for(var y = 0;y < level1Grid.length;y++){
   for(var x = 0;x < level1Grid[y].length;x++){// pull the grid values out of the array
   var gridValue = level1Grid[y][x];
   //draw a different tile depending on grid value
   switch(gridValue){
      case 0:
       
       break;
       
      case 1:
        var sprite = createSprite(x*tileSize, floorHeight + (y*tileSize));
        sprite.scale = .32
        sprite.shapeColor = 'red';
        //var tempImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[4]]));
       sprite.addAnimation('TileOne',TileOne);
        sprite.debug = true;
       platforms.add(sprite);
      break;
      
      case 2:
        var sprite = createSprite(x*tileSize, floorHeight + (y*tileSize));
        sprite.scale = .32
       //var tempImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[18]]));
       sprite.addAnimation('TileTwo',TileTwo);
       sprite.shapeColor = 'blue';
       platforms.add(sprite);
      break;
      

  }
  }
  }
}

function levelOneDraw(){
  

 
 //use the standing frame if the character velocity drops below a certain amount
  if(hero.velocity.x < 0.1 && hero.velocity.x > -0.1){
    hero.changeAnimation('heroStand');
    //if close to the mouse, don't move
    hero.velocity.x = 0;
  }
 
 
 if(frameCount%130 === 0){
   //create them randomly in the sky and have the drop down
   var enemy = createSprite(1685,270,70,70);
   
   enemy.scale = .5;
   enemy.addAnimation("enemyOneMove",enemyOneAnimate);
   enemy.life = 500;
   enemy.debug = true;
   enemy.friction = 0.93;
   enemies1.add(enemy);
  
  }
  
  if(frameCount%300 === 0){
   //create them randomly in the sky and have the drop down
   var enemy = createSprite(1800,800,70,70);
   
   enemy.scale = .5;
   enemy.setSpeed(5,180);
   enemy.addAnimation("enemyOneMove",enemyOneAnimate);
   enemy.life = 500;
   enemy.debug = true;
   enemy.friction = 0.93;
   enemies1.add(enemy);
  
  }
  
   if(frameCount%300 === 0){
   //create them randomly in the sky and have the drop down
   var enemy = createSprite(1500,1000,70,70);
   
   enemy.scale = .5;
   enemy.mirrorX(-1);
   enemy.addAnimation("enemyOneMove",enemyOneAnimate);
   enemy.life = 500;
   enemy.debug = true;
   enemy.friction = 0.93;
   enemies1.add(enemy);
  
  }
  
  for(var i = 0; i < enemies1.length;i++){
   // make gravity for the enemies
   enemies1[i].velocity.y += Gravity;
   
   //move them around, a three percent chance of moving
   if(random(100) < 50){
    enemies1[i].velocity.x = random(-7,9);
   }
  }
  
 
   enemies1.collide(platforms);
  // make the floor solid for the player
  hero.collide(platforms);
  //eliminate the double jump, you need to also have the groundTest callback function
  hero.overlap(platforms, groundTest);
  // making gravity for the player
  hero.velocity.y += Gravity;
  
  goal1.overlap(hero,level1Clear);
  
  enemies1.overlap(bullets,enemyHit);
  hero.overlap(enemies1,heroHit);
  powerUps.overlap(hero,powerHit);
 
 if(hero.position.y > height){
    stroke(255);
    textSize(100);
    text("YOU'RE DEAD",width/2,height/2);
    //gameState = 'over';
  }
 
  camera.position.x = hero.position.x;
  if(hero.position.y < height+200){
  camera.position.y = hero.position.y;
  }
  
  
  
  drawSprites();
  
}