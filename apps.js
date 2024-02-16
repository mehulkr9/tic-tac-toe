let boxes=document.querySelectorAll(".box");
let restartbtn=document.querySelector(".restartbtn");
let newgamebtn=document.querySelector(".newgame");
let message=document.querySelector(".message");
let turn0 =true;
let flag=0;
let winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==true){
        box.innerText="O";
        turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        count++;
        if(count===9 && flag===0)
        {
            message.innerText="Match is Draw";
            message.classList.remove("hide");
        }
    });
});
const disablebtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const winnermessage=(x)=>{
    message.innerText=`Congratulation ${x} is winner`;
    message.classList.remove("hide");
    flag=1;
}
const checkwinner=()=>{
    for(pattern of winPattern){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!=="" && p2!=="" && p3!==""){
            if(p1===p2 && p2===p3){
            disablebtn();
            winnermessage(p1);
            }
        }
    }
};

const restartgame=()=>{
    count=0;
    flag=0;
    turn0=true;
    enablebtn();
    message.classList.add("hide");
}
restartbtn.addEventListener("click",restartgame);
