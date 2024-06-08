let bgMusic=new Audio("music.mp3")
let turnMusic=new Audio("ting.mp3")
let gameoverMusic=new Audio("gameover.mp3")
let turn="X"
let isgameover=false

// function to change the turn
const changeTurn=()=>{
    return turn==="X"?"0":"X";

}

//  function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxText");
    let wins=[
       [0, 1, 2 ,0,4,0],
       [3, 4, 5, 12,130,0],
       [6, 7, 8 ,12,210,0],
       [0, 3, 6,-78,130,90],
       [1, 4, 7, 10,130,90],
       [2, 5, 8, 97,130,90],
       [0, 4, 8,-4,110,45],
       [2, 4, 6,2,130,-45],
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[2]].innerText===boxtext[e[1]].innerText && boxtext[e[0]].innerText!==""){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +" has Won"
            isgameover=true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="150px";
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.height="150px";
            gameoverMusic.play()
        
        }
    })
}

// bgMusic.play(); 
// GameLogic
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxText")
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn
            turn=changeTurn()
        turnMusic.play()
        checkWin()
        if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
        }
        }
    }) 
})
// add onclick  to listen on the button
let Reset=document.getElementById("reset");
Reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxText")
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false
    if(!isgameover){
        document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    }
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0 px";

})
 