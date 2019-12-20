$(document).ready(function(){
    $("#lecture").mouseover(function(){
        $(this).animate({left:"9%",top:"24%",width:"25%",height:"62%"},130);
    });
    $("#lecture").mouseout(function(){
        $(this).animate({left:"10%",top:"25%",width:"23%",height:"60%"},130);
    });
    $("#ps").mouseover(function(){
        $(this).animate({left:"37.5%",top:"24%",width:"25%",height:"62%"},130);
    });
    $("#ps").mouseout(function(){
        $(this).animate({left:"38.5%",top:"25%",width:"23%",height:"60%"},130);
    });
    $("#test").mouseover(function(){
        $(this).animate({right:"9%",top:"24%",width:"25%",height:"62%"},130);
    });
    $("#test").mouseout(function(){
        $(this).animate({right:"10%",top:"25%",width:"23%",height:"60%"},130);
    });
});



