function introduction(){
  background(StartBackground);
   fill('white');
   textSize(50);
   textAlign(CENTER);
   text("Press Any Key",width/2,height/2);
   //press any key to move exit the introduction --- look up keyIsPressed!!!!!!
   if(keyIsPressed){
    gameState = 'levelOne';
    levelOneMusic.loop();
   }
}

function countdownOne(){
  
   //move the camera back to the begining
 camera.position.x = width/2;
 camera.position.y = height/2;
 background(0);

 //figure out the elapsed time in the countdown
 var displayTimer = frameCount - countdownTimer;
 //show the countdown
 fill(255);
 textSize(200);
 textAlign(CENTER);
 
 //actually count backwards
 var countDown = 4 - floor(displayTimer/60);
 text(countDown,width/2,height/2);
 
 //end the countdown
 if(displayTimer > 240){
 
  //turn camera back on
  //camera.on();
  //setup level2
  levelTwoSetup();
  gameState = "levelTwo";
  levelTwoMusic.loop();
 }
  
}

function countdownTwo(){
 background(255,0,0);
 //move the camera back to the begining
 camera.position.x = width/2;
 camera.position.y = height/2;

 //figure out the elapsed time in the countdown
 var displayTimer = frameCount - countdownTimer;
 //show the countdown
 fill(255);
 textSize(200);
 textAlign(CENTER);
 
 //actually count backwards
 var countDown = 4 - floor(displayTimer/60);
 text(countDown,width/2,height/2);
 
 //end the countdown
 if(displayTimer > 240){
  background(255,0,0);
  //turn camera back on
  camera.on();
  //setup level3
  levelThreeSetup();
  gameState = "levelThree";
  levelThreeMusic.loop();
  
 }
}

function youLose(){
  levelOneMusic.stop();
  levelTwoMusic.stop();
  levelThreeMusic.stop();
  DeathSound.play();
  background(loseBackground);
  //move the camera back to the begining
 camera.position.x = width/2;
 camera.position.y = height/2;
   fill(255);
   textSize(50);
   textAlign(CENTER);
   text("YOU LOSE",width/2,height/2);
   //start over
   if(keyIsPressed){
    gameState = 'intro';
   }
}

function youWin(){
  background(winBackground);
  levelOneMusic.stop();
  levelTwoMusic.stop();
  levelThreeMusic.stop();
 //move the camera back to the begining
 camera.position.x = width/2;
 camera.position.y = height/2;
   fill(255);
   textSize(50);
   textAlign(CENTER);
   text("YAY!!!!",width/2,height/2);
   
}