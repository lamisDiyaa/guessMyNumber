let correctNum=document.querySelector(".number")
let score=document.querySelector(".score")
let highScore=document.querySelector(".highscore")
let checkBtn=document.querySelector(".check")
let againBtn=document.querySelector(".again")
let highScoreNum=0
let randomMumber=Math.trunc( Math.random()*20 +1)
let scorenumber=20




 function scorelimit(){
    scorenumber--
    score.textContent=scorenumber
    if(scorenumber == 0){ 
        displayMsg("you lost" )
    }
    
 }
function displayMsg(msg){
    document.querySelector(".message").textContent=msg
}


checkBtn.addEventListener("click",function(){
    let gussedNumber=Number(document.querySelector(".guess").value)
    if( !gussedNumber){
        displayMsg("no number")
    }else if(gussedNumber === randomMumber){
        displayMsg("right number")
        if(highScoreNum>scorenumber){
            highScore.textContent=highScoreNum
        }else{
            highScore.textContent=scorenumber
        }
        document.querySelector("body").style.backgroundColor="#60b347"
        correctNum.textContent=randomMumber
        correctNum.style.width="20rem"
        correctNum.textContent=gussedNumber
    }else{
        gussedNumber > randomMumber? "high number ":"low number"
        displayMsg( gussedNumber > randomMumber? "high number ":"low number")
        scorelimit()
    }
})

againBtn.addEventListener("click",function(){
    randomMumber=Math.trunc( Math.random()*20 +1)
    scorenumber=20
    score.textContent=scorenumber
    msg.textContent="Start guessing..." 
    document.querySelector("body").style.backgroundColor="#222"
    document.querySelector(".guess").value=" "
    correctNum.textContent="?"
})