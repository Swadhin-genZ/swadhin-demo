let boxes=document.querySelectorAll(".box");
let rst=document.querySelector(".button");
let mgs=document.querySelector("#mgs");
let newgame=document.querySelector("#newbtn");
let mgscontainer=document.querySelector(".mgscontainer")

let turnO=true;



const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("Box was clicked");
    if(turnO==true){
box.innerText="O";
turnO=false;

    }
    else{
box.innerText="X";
turnO=true;
    }
    box.disabled=true;
    checkWinner();
})
})
const showWinner =(pos)=>{
mgs.innerText=`Congratulation! Winner is ${pos}`;
mgscontainer.classList.remove("hide");
rst.disabled=true;

}

const enablebtn=()=>{
for(let box of boxes){
    turnO=true;
    box.disabled=false;
    box.innerText="";
}
}

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const rstgame=()=>{
    enablebtn();
    mgscontainer.classList.add("hide");
    rst.disabled=false;

}

const checkWinner=()=>{
    for( let pattern of winPattern ){
        console.log(pattern);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
         if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val==pos2val && pos2val==pos3val){
            console.log(" Winner is ",pos1val);  
            disablebtn();
            showWinner(pos1val);
          }
        }
    }
}

rst.addEventListener("click",enablebtn);
newgame.addEventListener("click",rstgame)