function submit(){
    var i,j;
    var answers = [];
    var answer1 = [1,3,5,3,2,5,4,2,2,4,1,4,4,2,5,1,3,5,4,3];
    var score1 = [2,2,2,3,2,3,2,2,3,2,2,2,3,2,3,3,3,3,3,3]
    var currentScore = 50;
    for (i=1;i<21;i++){
        var num = "q" + i;
        var tmp = document.getElementsByName(num);
        for (j=1;j<6;j++){
            if ( tmp[j-1].checked){ 
                answers.push(j);
            }
        }
        
    }
    for (i = 0; i<20;i++){
        if(answers[i]!=answer1[i]){
            currentScore -= score1[i];
        }
    }
    window.alert(currentScore + "점 입니다!");
}

function timeron(){
    var countdown = 30 * 60 * 1000;
    var timerId = setInterval(function(){
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
        if (sec<10){
            sec = '0' + sec;
        }
        if (min<10){
            min = '0' + sec;
        }
        if (countdown <= 0) {
            alert("종료 되었습니다.");
            clearInterval(timerId);
        } else {
            $("#countTime").html(min + " : " + sec);
        }
    }, 1000);
}
function back(){
    location.href ="../index.html"
}