let userSeq=[];
let gameSeq=[];

let colors=["red","yellow","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let div=document.querySelector(".btn ");

document.addEventListener("keypress",function() {
    if(started==false){
        started=true;
        console.log("Game is started");

        levelup();
    }
    });

function btnflash(btn){
   btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
},250);

  }
    
function levelup(){
  userSeq=[];
    level++;
  h2.innerText=`level ${level}`;


  let randIdx=Math.floor(Math.random() * 4);
  let randClr=colors[randIdx];
  let randbtn=document.querySelector(`.${randClr}`);

 gameSeq.push(randClr);
btnflash(randbtn);

}

function checkAns(idx){

if(userSeq[idx]==gameSeq[idx]){

if(userSeq.length==gameSeq.length){
setTimeout(levelup,1000);

}
}

else{
 h2.innerHTML=`Game over!!<b>Your score is ${level}</b><br>Press any key to start!`;
 reset();

}

}
function btnPress(){
 let btn=this ;
 btnflash(btn);
  userClr=btn.getAttribute("id");

userSeq.push(userClr);
checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
  
}