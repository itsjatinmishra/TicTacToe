console.log("Welcome to Tic Tac Toe");
let turn_sound = new Audio("ding.mp3");
let gameover_sound = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('box-text');
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-5,15,270],
        [1,4,7,5.5,15,270],
        [2,5,8,15.5,15,270],
        [0,4,8, 5,15,45],
        [2,4,6,5,15,136],
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "" ) ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " You Won";
            gameover = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "160px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "65vh";
            gameover_sound.play();
        }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turn_sound.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
            }
        }
    })
})
reset.addEventListener('click', ()=> {
    let boxtext = document.querySelectorAll('.box-text');
    Array.from(boxtext).forEach(element =>{
      element.innerText="";  
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px"; 
})