function levelThreeSetup(){
 //platforms = new Group();
  enemies3 = new Group();
  enemies2 = new Group();
  enemies2L = new Group();
  
  hero.position.x = 200;
  hero.position.y = 300;
  
  goal3 = createSprite(3000,120,10,10);
  //var goalImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[97]]));
  goal3.debug = true;
  goal3.setCollider("rectangle", 0,0,90,100);
  //goal3.addAnimation("this",goalImage);
  
  
  var floorHeight = 100;
  
  for(var y = 0;y < level3Grid.length;y++){
   for(var x = 0;x < level3Grid[y].length;x++){// pull the grid values out of the array
   var gridValue = level3Grid[y][x];
   //draw a different tile depending on grid value
   switch(gridValue){
     case 0:
       
       break;
       
      case 1:
        var sprite = createSprite(x*tileSize, floorHeight + (y*tileSize));
        sprite.scale = .32
        //var tempImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[10]]));
       sprite.addAnimation('TileOne',TileOne);
        sprite.debug = true;
       platforms.add(sprite);
      break;
      case 2:
        var sprite = createSprite(x*tileSize, floorHeight + (y*tileSize));
        sprite.scale = .32
       //var tempImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[11]]));
       sprite.addAnimation('TileTwo',TileTwo);
       platforms.add(sprite);
      break;
      case 3:
      var sprite = createSprite(x*tileSize, floorHeight + (y*tileSize));
       sprite.scale = .32
       //var tempImage = loadAnimation(new SpriteSheet('assets/tiles_spritesheet.png',[tile_frames[12]]));
       sprite.addAnimation('TileThree',TileThree);
       platforms.add(sprite);
      break;
      
      
      
   }
 }
}
 
}

function levelThreeDraw(){
 fill(255);
  textSize(40)
  
  //use the standing frame if the character velocity drops below a certain amount
  if(hero.velocity.x < 0.1 && hero.velocity.x > -0.1){
    hero.changeAnimation('stand');
    //if close to the mouse, don't move
    hero.velocity.x = 0;
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
  
  if(frameCount%200 == 0){
   var enemy = createSprite(2300,180,70,70);
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
  
  
  if(frameCount%300 == 0){
   var enemy = createSprite(2300,200,70,70);
   enemy.scale =.5;
   enemy.addAnimation("enemyThreeAnimate",enemyThreeAnimate);
   enemy.life = 500;
   enemy.debug = true;
   enemy.friction = 0.93;
   enemies3.add(enemy);
  
  }
  
  if(frameCount%300 == 0){
   var enemy = createSprite(2800,200,70,70);
   enemy.scale =.5;
   enemy.addAnimation("enemyThreeAnimate",enemyThreeAnimate);
   enemy.life = 500;
   enemy.debug = true;
   enemy.friction = 0.93;
   enemies3.add(enemy);
  
  }
  
  
  
  
  for(var i = 0; i < enemies2.length;i++){
   // make gravity for the enemies
   enemies2L[i].velocity.y += Gravity;
   
   //move them around, a three percent chance of moving
   //if(random(100) < 3){
   enemies2L[i].velocity.x = -7;
   //}
  }
  
  for(var i = 0; i < enemies3.length;i++){
   // make gravity for the enemies
   enemies3[i].velocity.y += Gravity;
   
   //move them around, a three percent chance of moving
   if(random(100) < 3){
    enemies3[i].velocity.x = -7;
   }
  }
  
  enemies1.collide(platforms);
  enemies2.collide(platforms);
  enemies2L.collide(platforms);
  enemies3.collide(platforms);
  // make the floor solid for the player
  hero.collide(platforms);
  //eliminate the double jump, you need to also have the groundTest callback function
  hero.overlap(platforms, groundTest);
  
  enemies1.overlap(bullets,enemyHit);
  enemies2.overlap(bullets,enemyHit);
  enemies2L.overlap(bullets,enemyHit);
  enemies3.overlap(bullets,enemyHit);
  
  enemies1.overlap(bullets2,enemyHit);
  enemies2.overlap(bullets2,enemyHit);
  enemies2L.overlap(bullets2,enemyHit);
  enemies3.overlap(bullets2,enemyHit);
  // making gravity for the player
  
  hero.velocity.y += Gravity;
  
  goal3.overlap(hero,level3Clear);
 
  
  //dead test
  if(hero.position.y > height){
    stroke(255);
    textSize(100);
    text("DEAD",100,100);
    //gameState = 'over';
  }
  
  //keep the camera on the player except if they fall dow a hole.
  camera.position.x = hero.position.x;
  if(hero.position.y < height-200){
    camera.position.y = hero.position.y;
  }
  
  
  
  //draw the sprite
  drawSprites();
}