canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
roverX= 10;
roverY= 10;
roverW= 120;
roverH= 70;
CarX= 10;
CarY= 100;
CarW= 120;
CarH= 70;
function add(){
    bgimg= new Image();
    bgimg.onload=uploadbg;
    bgimg.src="https://i.postimg.cc/bv5d35nK/racing.jpg";

    Rimg= new Image();
    Rimg.onload=uploadROVER;
    Rimg.src="https://i.postimg.cc/9rqYz9HM/car1.png";

    Carg= new Image();
    Carg.onload=uploadCar;
    Carg.src="https://i.postimg.cc/tnnW1Kff/car2.png";
}
function uploadbg(){
    ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
}
function uploadROVER(){
    ctx.drawImage(Rimg, roverX, roverY, roverW, roverH);
}
function uploadCar(){
    ctx.drawImage(Carg, CarX, CarY, CarW, CarH);
}

window.addEventListener("keydown", mydown);
function mydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);
 if(keypressed=="38") {
    up();
    console.log("UP");
 }
 if(keypressed=="39") {
    right();
    console.log("RIGHT");
 }
 if(keypressed=="40") {
   down();
    console.log("DOWN");
 }
 if(keypressed=="37") {
    left();
     console.log("LEFT");
  }

  if(keypressed=="87") {
    Car_up();
    console.log("W");
 }
 if(keypressed=="68") {
    Car_right();
    console.log("RIGHT");
 }
 if(keypressed=="83") {
   Car_down();
    console.log("DOWN");
 }
 if(keypressed=="65") {
    Car_aleft();
     console.log("LEFT");
  }
}

