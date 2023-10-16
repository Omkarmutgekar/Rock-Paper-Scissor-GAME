let opt = document.querySelectorAll(".opt");
let optComp = document.querySelectorAll(".opt-comp")
let random = Math.floor(Math.random()*3);
let triangle = document.querySelector(".triangle");
let user = document.querySelector(".user");
let computer = document.querySelector(".computer");
let winModal = document.querySelector(".win-modal")
let winquote = document.querySelector(".quote-1");
let quote2 = document.querySelector(".quote-2");
let elipse = document.querySelector(".winner-bg");
let playbtn = document.querySelector(".play-again-btn");
let playbtn2 = document.querySelector(".play-btn2");
let rulebtn = document.querySelector(".rule-btn");
let nextbtn = document.querySelector(".next-btn");
let rulediv = document.querySelector(".rule-div");
let closerule = document.querySelector(".close-rule");
let hurraydiv = document.querySelector(".hurray-div");
let scorepanel = document.querySelector(".score-panel");
let maingame = document.querySelector(".main-game");

let score = JSON.parse(localStorage.getItem("scr"))
let playerscore = document.getElementById("player-score");
if(score){
    playerscore.innerText=score;
}

let plycount=0;

let sysscore = JSON.parse(localStorage.getItem("scr2"))
let compscore = document.getElementById("comp-score");
if(sysscore){
    compscore.innerText=sysscore;
}
let syscount=0;

opt.forEach((element,index) => {
    element.addEventListener("click" , ()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        opt.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("user-select") 
        setTimeout(() => {
            computer.style.opacity="1";
            setTimeout(() => {
                optComp[random].style.display="block";
                optComp[random].classList.add("comp-select")
            }, 1000);
        }, 500);

        setTimeout(() => {
            if (index==random){
                    winModal.style.display="block";
                    winquote.innerText="tie up";
                    quote2.innerText="";
                    playbtn.innerText="replay";
            }
           else if( index==0 && random==2 || index==1 && random==0 || index==2 && random==1)
            {   
                winModal.style.display="block";
                elipse.style.display="flex";
                nextbtn.style.display="block";
                plycount=score;
                plycount= plycount+10;
                playerscore.innerText=plycount;
                localStorage.setItem("scr",JSON.stringify(plycount));

            }
            else{  
                    winModal.style.display="block";
                    winquote.innerText="you lost";
                    elipse.style.display="flex";
                    elipse.classList.add("elipse-right");
                    syscount=sysscore;
                    syscount= syscount+10;
                    compscore.innerText=syscount;
                    localStorage.setItem("scr2",JSON.stringify(syscount));
            }


        }, 1500);
    })
});

playbtn.addEventListener("click", ()=>{
    window.location.reload();
})

rulebtn.addEventListener("click", ()=>{
    rulediv.style.display="flex";
})
closerule.addEventListener("click", ()=>{
    rulediv.style.display="none";
})
playbtn2.addEventListener("click", ()=>{
    window.location.reload();
})

nextbtn.addEventListener("click", ()=>{
    scorepanel.style.display="none";
    maingame.style.display="none";
    hurraydiv.style.display="flex";
})