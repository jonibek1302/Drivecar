let way = document.querySelector(".way");
let lines = document.querySelector(".line");
let carT = document.querySelector(".cart")
let images = document.querySelector(".images")
let carbone = document.querySelector(".carb1")
let carbtwo = document.querySelector(".carb2")
let replay = document.querySelector(".replay");
let container = document.querySelector(".container");

document.addEventListener("keydown" , (e) =>{
  console.log(e);
    if (e.key === "ArrowRight") {
      carT.style.left = "200px";
      // console.log("ishladi-ung");
    
    }
    else if(e.key === "ArrowLeft") {
    carT.style.left = "50px";
      // console.log("ishladi-chap");
    }
    
});
container.addEventListener("click" ,() => {
  let cartleft = parseInt(
     window.getComputedStyle(carT).getPropertyValue("left")
   );
   if (cartleft <= 100) {
    carT.style.left = "200px";
   }
  else if (cartleft >= 100) {
    carT.style.left = "50px";
   }
});
 


let checkDead = setInterval(() => {
  let carboneTop = parseInt(
    window.getComputedStyle(carbone).getPropertyValue("top")
  );
  let carbtwoTop = parseInt(
    window.getComputedStyle(carbtwo).getPropertyValue("top")
  );
  let cartleft = parseInt(
    window.getComputedStyle(carT).getPropertyValue("left")
  ); 
   if ( carboneTop >= 430   && cartleft <= 100 || carbtwoTop >= 430 && cartleft >= 100 ) {
   replay.style.display = " flex"
    };
}, 10);

replay.addEventListener("click", () => {
  replay.style.display = " none";

});
