console.log('welcome to my Tic-Toc-Tie');
let musical = new Audio("rain-and-nostalgia-version-60s-10820.mp3")
let audioturn  = new Audio("news-ting-6832.mp3")
let gameover = new Audio("wrong-buzzer-6268.mp3")
let turn = "X";
let isgameover =false;
// function turn
const changeturn =()=>{
    return turn==="X"?"0":"X"
}
// // FUNCTION TO CHECK WIN 
const win = ()=>{
   let box = document.getElementsByClassName('control');
   let wins = [
    [0,1,2],
    [3,4,5],  
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
   ]
   wins.forEach(function(item){
    if((box[item[0]].innerText===box[item[1]].innerText) && (box[item[2]].innerText===box[item[1]].innerText) && (box[item[0]].innerText!=="") ){
        document.querySelector('.turn').innerText = box[item[0]].innerText + ' won';
        isgameover = true;
    }
   })
}


// // game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(function(item){
    let boxtest = item.querySelector('.control');
    item.addEventListener('click',()=>{
     if(boxtest.innerText===''){
         boxtest.innerText = turn;
         turn = changeturn();
         audioturn.play();
         win();
         if(!isgameover){
            document.getElementsByClassName('turn')[0].innerText = "Turn for " + turn;
         }else{
            gameover.play()
         }
     }
    })
})
// // add event listner to button 
let b = document.getElementById('btn')
b.addEventListener('click',()=>{
    let boxtest = document.querySelectorAll('.control');
    Array.from(boxtest).forEach(function(item){
        item.innerText = "";
    });
    turn ="X";
    isgameover =false;
    document.getElementsByClassName('turn')[0].innerText = "Turn for " + turn;
})