var proNum, names;

var pos = {
    drawable: false,
    x: -1,
    y: -1
};

var canvas, ctx;

function back(){
    location.href ="../index.html"
}
function canvasclr(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function setThickness(){
    ctx.lineWidth  = slider.value;
}

function penColorRed(){
    ctx.strokeStyle = "red";
}
function penColorBlue(){
    ctx.strokeStyle = "blue";
}
function penColorBlack(){
    ctx.strokeStyle = "black";
}
function penColorYellow(){
    ctx.strokeStyle = "Orange";
}
 
window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = screen.width * 0.994;
    canvas.height = screen.height * 0.9;  
    ctx.lineCap = 'round'; 
    ctx.lineJoin = 'round';
    ctx.lineWidth  = slider.value;

    canvas.addEventListener("mousedown", listener);
    canvas.addEventListener("mousemove", listener);
    canvas.addEventListener("mouseup", listener);
    canvas.addEventListener("mouseout", listener);

    var randNum = Math.floor((Math.random()*10)%5+1);
    problem.src = "problem/" + randNum + ".png";
    proNum = randNum;
}
 
function listener(event){
    switch(event.type){
        case "mousedown":
            initDraw(event);
            break;
 
        case "mousemove":
            if(pos.drawable)
                draw(event);
            break;
 
        case "mouseout":
        case "mouseup":
            finishDraw();
            break;
    }
}
function initDraw(event){
    
    ctx.beginPath();
    pos.drawable = true;
    var coors = getPosition(event);
    pos.X = coors.X;
    pos.Y = coors.Y;
    ctx.moveTo(pos.X, pos.Y);
}
 
function draw(event){
    var coors = getPosition(event);
    ctx.lineTo(coors.X, coors.Y);
    pos.X = coors.X;
    pos.Y = coors.Y;
    ctx.stroke();
}
 
function finishDraw(){
    pos.drawable = false;
    pos.X = -1;
    pos.Y = -1;
}
 
function getPosition(event){
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    return {X: x, Y: y};
}

function scoring(){
    var ch = document.getElementsByName("answers");
    if( proNum ==1  ){
        if(ch[0].checked){
            window.alert("맞았습니다!");
        }
        else{
            window.alert("틀렸습니다!");
        }
    }
    if( proNum ==2  ){
        if(ch[1].checked){
            window.alert("맞았습니다!");
        }
        else{
            window.alert("틀렸습니다!");
        }
    }
    if( proNum ==3  ){
        if(ch[2].checked){
            window.alert("맞았습니다!");
        }
        else{
            window.alert("틀렸습니다!");
        }
    }
    if( proNum ==4  ){
        if(ch[3].checked){
            window.alert("맞았습니다!");
        }
        else{
            window.alert("틀렸습니다!");
        }
    }
    if( proNum ==5  ){
        if(ch[4].checked){
            window.alert("맞았습니다!");
        }
        else{
            window.alert("틀렸습니다!");
        }
    }
    if( proNum ==1  ){
        if(ch[0].checked){
            window.alert("맞았습니다!");
        }
        else{
            window.alert("틀렸습니다!");
        }
    }
}