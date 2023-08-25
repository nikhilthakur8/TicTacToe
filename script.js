let ting= new Audio("./audio/ting.mp3");
let winTing = new Audio("./audio/gameover.mp3");
let music= new Audio("./audio/music.mp3");
let turn = "X";

let isGameOver = false;
//Function to check turn
let changeTurn = ()=>{
    return turn === "X" ? "O":"X"
}
// music.play();
// music.volume = 0.1; 
// Function for check win
const checkWin=()=>{
    let boxtext = document.querySelectorAll(".boxText");
    let wins =[
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,0,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) 
        && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) 
        && (boxtext[e[0]].innerText!==""))
        {
            document.getElementsByClassName("info")[0].innerText = `${boxtext[e[0]].innerText} Won !!!`; 
            isGameOver = true;
            
            if(is950px===true){
                document.querySelector(".line").style.transform = `translate(${e[3]*2}vw,${e[4]*2}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width= "60vw";
            }
            else {
                document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width= "30vw";
            }
            winTing.play();
            setTimeout(gameOver,2500);
        }
    })
}


//Main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener("click",()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText= turn;
            element.style.backgroundColor="rgba(202, 73, 202, 0.199)";
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
            ting.play();
            document.getElementsByClassName("info")[0].innerText=`Turn of ${turn}`;
        }
        }
    })
})
//checking for 950px
let is950px = false;
if(window.innerWidth<=950) is950px =true;


// Adding eventlistner for reset 
reset.addEventListener("click",()=>{
    gameOver();
});

// window.addEventListener("resize", is950px);
let gameOver= ()=>{
    // reset.addEventListener("click",()=>{
        let boxtext = document.querySelectorAll(".boxText");
        Array.from(boxtext).forEach((element)=>{
            element.innerText="";
        })
        let boxes = document.getElementsByClassName("box");
        Array.from(boxes).forEach(element=>{
            element.style.backgroundColor="white";
        })
        turn = "X";
        isGameOver=false;
        document.getElementsByClassName("info")[0].innerText=`Turn of ${turn}`;
        document.querySelector(".line").style.width= "0vw";
    // })
};