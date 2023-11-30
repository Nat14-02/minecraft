var canvas=new fabric.Canvas("canvas");
blockwidth=20;
blockheight = 20;
playerx = 100;
playery= 100;
player_object = "";
block_object= "";
function player_update() {
     fabric.Image.fromURL("player.png", function (Img) 
     { player_object = Img;
         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
          player_object.set({ top: playery, left : playerx });
          canvas.add(player_object);
         }) }
         function block_update( get) {
            fabric.Image.fromURL(get, function (Img) 
            { block_object = Img;
                block_object.scaleToWidth(blockwidth);
                block_object.scaleToHeight(blockheight);
                 block_object.set({ top: playery, left : playerx });
                 canvas.add(block_object);
                }) }
                window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey && keyPressed == '80')
{
console.log("se presiona p y shift al mismo tiempo");
blockwidth = blockwidth + 10;
blockheight = blockheight + 10;
document.getElementById("current_width").innerHTML = blockwidth;
document.getElementById("current_height").innerHTML = blockheight;
}
if(e.shiftKey && keyPressed == '164')
{
console.log("se presiona ñ y shift al mismo tiempo");
blockwidth = blockwidth - 10;
blockheight = blockheight - 10;
document.getElementById("current_width").innerHTML = blockwidth;
document.getElementById("current_height").innerHTML = blockheight;
}

if(keyPressed == '38')
{
  up();
  console.log("up");
}if(keyPressed == '40')
{
  down();
  console.log("down");
}
if(keyPressed == '37')
{
  left();
  console.log("left");
}
if(keyPressed == '39')
{
  right();
  console.log("right");
}
if(keyPressed == '87')
{
  block_update('wall.jpg'); 
  console.log("w");
}
if(keyPressed == '65')
{
  block_update('trunk.jpg'); 
  console.log("a");
}
if(keyPressed == '68')
{
  block_update('unique.png'); 
  console.log("d");
}
if(keyPressed == '71')
{
  block_update('light_green.png'); 
  console.log("g");
}
}
function up()
{
    if(playery >=0)
    {
        playery = playery - 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + playerx + " | y = " +playery);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(playery <=800)
    {
        playery = playery + 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + playerx + " | y = " +playery);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(playerx >=0)
    {
        playerx = playerx - 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + playerx + " | y = " +playery);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(playerx <=2000)
    {
        playerx = playerx + 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + playerx + " | y = " +playery);
         canvas.remove(player_object);
         player_update();
    }
}

