function groundTest(player,platform){
  groundTouch = true;
}

function level1Clear(player,goal){
   levelOneMusic.stop();
   //remove all the platforms
   do{platforms[0].remove (); }
   while(platforms[0] !== undefined);
   
   //set the countdownTimer
   countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   //camera.off();
   
   do{goal1.remove (); }
   while(goal1 == undefined);
   
   //clear all the enemies in the group
   do{enemies1[0].remove (); }
   while(enemies1[0] !== undefined);
   //clear the group
   enemies1.clear();
   //change the countdown state
   gameState = "countdownOne";
 
}

function level2Clear(hero,goal){
  levelTwoMusic.stop();
 //remove all the platforms
   do{platforms[0].remove (); }
   while(platforms[0] !== undefined);
   
   //set the countdownTimer
   countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   camera.off();
   
   do{goal2.remove (); }
   while(goal2 == undefined);
   
   //clear all the enemies in the group
   do{enemies1[0].remove (); }
   while(enemies1[0] !== undefined);
   enemies1.clear();
   do{enemies2[0].remove (); }
   while(enemies2[0] !== undefined);
   enemies2.clear();
   do{enemies2L[0].remove (); }
   while(enemies2L[0] !== undefined);
   enemies2L.clear();
   //clear the group
   //change the countdown state
   gameState = "countdownTwo";
}
function level3Clear(player,goal){
   //remove all the platforms
   do{platforms[0].remove (); }
   while(platforms[0] !== undefined);
   
   //set the countdownTimer
   countdownTimer = frameCount;
   
   //move the camera back to the begining
   camera.position.x = width/2;
   camera.position.y = height/2;
   //turn the camer off 
   camera.off();
   
   //clear all the enemies in the group
   do{enemies3[0].remove (); }
   while(enemies3[0] !== undefined);
   //clear the group
   enemies3.clear();
   //change the countdown state
   gameState = "win";
}
function enemyHit(enemy,bullet){
  
  for(var i=0; i<explosionDensity; i++) {
  var p = createSprite(bullet.position.x, bullet.position.y,3,3);
  p.setSpeed(random(3,5), random(360));
  p.friction = 0.95;
  p.life = 15;
}


  enemy.remove();
  bullet.remove();
}


function heroHit(enemy,hero){
  heroHealth--;
  //heroHitSound.amp(4);
  //heroHitSound.play();
  if(heroHealth<=0){
    //levelOneMusic.stop();
     //levelTwoMusic.stop();
    //levelThreeMusic.stop();
    //deathMusic.loop();
    gameState='lose';
   
  }
  
  
  hero.shapeColor='red';
  
}

function powerHit(powerUpOne,hero){
  powerUpOne.remove();
  heroState = "power";
  //powerUpSound.amp(4);
  //powerUpSound.play();
}



function powerHit2(powerUpTwo,hero){
  powerUpTwo.remove();
  heroState = "ultimate";
  //powerUpSound.amp(4);
  //powerUpSound.play();
}


