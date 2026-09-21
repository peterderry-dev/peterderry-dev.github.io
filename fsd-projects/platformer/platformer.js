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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

createPlatform(200, 650, 200, 30, "blue");
createPlatform(600, 550, 100, 30, "blue");
createPlatform(900, 600, 400, 30, "blue");
createPlatform(150, 450, 200, 30, "blue");
createPlatform(1000, 480, 200, 30, "blue");
createPlatform(450, 400, 250, 30, "blue");
createPlatform(1000, 400, 30, 100, "blue");
createPlatform(750, 300, 200, 30, "blue");

createCollectable("steve", 800, 250);
createCollectable("steve", 200, 410);
createCollectable("steve", 1100, 440);

createCannon("bottom", 500, 740);
createCannon("bottom", 750, 740);
createCannon("top", 1180, 750);
createCannon("right", 420, 750);
createCannon("left", 210, 750);







    
  


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
