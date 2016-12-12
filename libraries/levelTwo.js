function levelTwoSetup(){
 //platforms = new Group();
  enemies2 = new Group();
  enemies2L = new Group();
  
  hero.position.x = 200;
  hero.position.y = 300;
  
  goal2 = createSprite(2500,1600,5,5);
  //var goalImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[97]]));
  goal2.debug = true;
  goal2.setCollider("rectangle",0,0,90,200);
  //goal2.addAnimation("this",goalImage);
  
  var powerUpTwo = createSprite(500,1600,50,50);
    
    powerUpTwo.shapeColor='red';
    powerUpTwo.scale =.5;
    powerUpTwo.addAnimation("power2Sprite", powerUpTwoAnimate);
    powerUps.add(powerUpTwo);
    powerUpTwo.debug=true;
  
  
  
  var floorHeight = 100;
  
   for(var y = 0;y < level2Grid.length;y++){
   for(var x = 0;x < level2Grid[y].length;x++){// pull the grid values out of the array
   var gridValue = level2Grid[y][x];
   //draw a different tile depending on grid value
   switch(gridValue){
     case 0:
       
       break;
       
      case 1:
        var sprite = createSprite(x*tileSize, floorHeight + (y*tileSize));
        sprite.scale = .32
        //var tempImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[20]]));
       sprite.addAnimation('TileOne',TileOne);
       sprite.shapeColor = 'red';
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
      case 3:
      var sprite = createSprite(x*tileSize, floorHeight + (y*tileSize));
      sprite.scale = .32
       
       //var tempImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[13]]));
       sprite.addAnimation('TileThree',TileThree);
       platforms.add(sprite);
      break;
      
      
      
   }
 }
}
 
}

function levelTwoDraw(){
 fill(255);
  textSize(40)
  
  if(hero.velocity.x < 0.1 && hero.velocity.x > -0.1){
    hero.changeAnimation('heroStand');
    //if close to the mouse, don't move
    hero.velocity.x = 0;
  }
  
   if(frameCount%210 === 0){
   //create them randomly in the sky and have the drop down
   var enemy = createSprite(900,620,70,70);
   
   enemy.scale = .5;
   enemy.mirrorX(-1);
   enemy.addAnimation("enemyOneMove",enemyOneAnimate);
   enemy.life = 500;
   enemy.debug = true;
   enemy.friction = 0.93;
   enemies1.add(enemy);
  
  }
  
  if(frameCount%250 === 0){
   //create them randomly in the sky and have the drop down
   var enemy = createSprite(1200,1200,70,70);
   
   enemy.scale = .5;
   enemy.mirrorX(-1);
   enemy.addAnimation("enemyOneMove",enemyOneAnimate);
   enemy.life = 500;
   enemy.debug = true;
   enemy.friction = 0.93;
   enemies1.add(enemy);
  
  }
  
  if(frameCount%200 == 0){
   var enemy = createSprite(800,920,70,70);
   enemy.scale =.4;
   enemy.setCollider("rectangle", 0,0,80,250);
   enemy.addAnimation("enemyTwoAnimate",enemyTwoAnimate);
   enemy.life = 300;
   enemy.setSpeed(4,180);
   enemy.friction = 0.93;
   enemies2.add(enemy);
   enemy.debug=true;
  
  }
  
  if(frameCount%200 == 0){
   var enemy = createSprite(1300,1200,70,70);
   enemy.mirrorX(-1);
   enemy.scale =.4;
   enemy.setCollider("rectangle", 0,0,80,250);
   enemy.addAnimation("enemyTwoAnimate",enemyTwoAnimate);
   enemy.life = 400;
   enemy.setSpeed(4,360);
   enemy.friction = 0.93;
   enemies2L.add(enemy);
   enemy.debug=true;
  
  }
  
  
  for(var i = 0; i < enemies1.length;i++){
   // make gravity for the enemies
   enemies1[i].velocity.y += Gravity;
   
   //move them around, a three percent chance of moving
   if(random(100) < 50){
    enemies1[i].velocity.x = random(-7,9);
   }
  }
  
  for(var i = 0; i < enemies2.length;i++){
   // make gravity for the enemies
   enemies2[i].velocity.y += Gravity;
   
   //move them around, a three percent chance of moving
   //if(random(100) < 3){
   enemies2[i].velocity.x = 8;
   //}
  }
  
   for(var i = 0; i < enemies2L.length;i++){
   // make gravity for the enemies
   enemies2L[i].velocity.y += Gravity;
   
   //move them around, a three percent chance of moving
   //if(random(100) < 3){
   enemies2L[i].velocity.x = -8;
   //}
  }
  
  
  enemies1.collide(platforms);
  enemies2.collide(platforms);
  enemies2L.collide(platforms);
  // make the floor solid for the player
  hero.collide(platforms);
  //eliminate the double jump, you need to also have the groundTest callback function
  hero.overlap(platforms, groundTest);
  // making gravity for the player
  hero.velocity.y += Gravity;
  
  goal2.overlap(hero,level2Clear);
  
  enemies1.overlap(bullets,enemyHit);
  enemies2.overlap(bullets,enemyHit);
  enemies2L.overlap(bullets,enemyHit);
  enemies1.overlap(bullets2,enemyHit);
  enemies2.overlap(bullets2,enemyHit);
  enemies2L.overlap(bullets2,enemyHit);
  
  hero.overlap(enemies1,heroHit);
  hero.overlap(enemies2,heroHit);
  hero.overlap(enemies2L,heroHit);
  
  powerUps.overlap(hero,powerHit2);
  
  
  
  /*
  //happen at regular intervals
  var prob = 1;
  if(random(100) < prob){
    hero.velocity.x += random(-5,5);
  }
  */
  
  //dead test
  if(hero.position.y > height){
    stroke(255);
    textSize(100);
    text("DEAD",100,100);
    //gameState = 'over';
  }
  
  //keep the camera on the player except if they fall dow a hole.
  camera.position.x = hero.position.x;
  if(hero.position.y < height+200){
    camera.position.y = hero.position.y;
  }
  
  
  //draw the sprite
  drawSprites();
}