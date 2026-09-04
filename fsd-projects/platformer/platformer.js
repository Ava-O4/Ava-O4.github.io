$(function () {
 // initialize canvas and context when able to
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 window.addEventListener("load", loadJson);


 function setup() {
   if (firstTimeSetup) {
     halleImage = document.getElementById("player");
     projectileImage = document.getElementById("projectile");
     cannonImage = document.getElementById("cannon");
     $(document).on("keydown", handleKeyDown);
     $(document).on("keyup", handleKeyUp);
     firstTimeSetup = false;
     //start game
     setInterval(main, 1000 / frameRate);
   }


   // Create walls - do not delete or modify this code
   createPlatform(-80, -80, canvas.width + 800, 80); // top wall
   createPlatform(-80, canvas.height - 10, canvas.width + 100, 200, "rgb(66, 110, 74)"); // bottom wall
   createPlatform(-80, -80, 80, canvas.height + 800); // left wall
   createPlatform(canvas.width, -80, 80, canvas.height + 400); // right wall


   //////////////////////////////////
   // ONLY CHANGE BELOW THIS POINT //
   //////////////////////////////////


   // TODO 1 - Enable the Grid




   // TODO 2 - Create Platforms
  createPlatform(300, 650, 500, 90, "darkgreen");
  createPlatform(200, 700, 100, 40, "darkgreen");
  createPlatform(800, 540, 800, 200, "darkgreen"); // bright green for a finished platform
  createPlatform(1000, 430, 100, 20, "darkgreen");
  createPlatform(1200, 350, 100, 20, "darkgreen");
  createPlatform(900, 270, 100, 20, "darkgreen");
  createPlatform(700, 200, 100, 20, "darkgreen", 700, 800, 0, 200, 400, 1);
  createPlatform(500, 155, 50, 10, "darkgreen");
  createPlatform(300, 200, 100, 10, "darkgreen");
  createPlatform(300, 500, 100, 10, "darkgreen", 200, 500, 2, 300, 300, 0);
  createPlatform(100, 250, 70, 10, "darkgreen");
  createPlatform(100, 375, 70, 10, "darkgreen");
   // TODO 3 - Create Collectables
   createCollectable("steve", 120, 300, 0.5, 0.7);
  createCollectable("diamond", 500, 100, 0.5, 0.7);
   createCollectable("diamond", 1250, 200, 0.5, 0.7);
  createCollectable("steve", 720, 50, 0.01, 0.7);
  
   // TODO 4 - Create Cannons
  createCannon("right", 500, 1000);
  createCannon("left", 0, 2000);
   createCannon("top", 200, 1500, 20, 10, 100, 1300, 2)


  
   //////////////////////////////////
   // ONLY CHANGE ABOVE THIS POINT //
   //////////////////////////////////
 }


 registerSetup(setup);
});
