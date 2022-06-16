var m = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

function init(){
    for(var i = 0; i <5; i++){
        for(var j=0; j<5;j++){
            id = m[i][j];
            $("#t"+id).css("left",j*115+"px");
            $("#t"+id).css("top",i*115+"px");
        }
    }
}

function get_x(spot){
    for(var i = 0; i <5; i++){
        for(var j=0; j<5;j++){
            if(m[i][j]==spot){
                return i;
            }
            else continue;
        }
    }
}

function get_y(spot){
    for(var i = 0; i <5; i++){
        for(var j=0; j<5;j++){
            if(m[i][j]==spot){
                return j;
            }
            else continue;
        }
    }
}

function getColor(spot){
    var col = $('#t'+spot).css('backgroundColor');
    
    return col.subtring(4,5);
}

$(function(){
    init();
    $(".tile").click(function(){
        var id= parseInt($(this).attr("id").substring(1));
        var clickedx = get_x(id);
        var clickedy = get_y(id);
        var color; 
        var tempid;
        if(clickedx==0 && clickedy==0){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }

        else if(clickedx==0 && clickedy==1){
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }

        if(clickedx==0 && clickedy==2){
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }


        }
        if(clickedx==0 && clickedy==3){
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }

        if(clickedx==0 && clickedy==4){
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==1 && clickedy==0){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==1 && clickedy==1){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==1 && clickedy==2){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==1 && clickedy==3){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==1 && clickedy==4){
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }

        if(clickedx==2 && clickedy==0){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

        }
        if(clickedx==2 && clickedy==1){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==2 && clickedy==2){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==2 && clickedy==3){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==2 && clickedy==4){
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==3 && clickedy==0){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==3 && clickedy==1){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==3 && clickedy==2){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==3 && clickedy==3){
            tempid=id+1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }

            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==3 && clickedy==4){
            tempid=id-1;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id+5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color = $('#t'+tempid).css('backgroundColor');
            if(color.substring(4,5)==2){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==4 && clickedy==0){
            tempid=id+1;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id+5;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==4 && clickedy==1){
            tempid=id+1;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==4 && clickedy==2){
            tempid=id+1;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==4 && clickedy==3){
            tempid=id+1;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-1;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }
        if(clickedx==4 && clickedy==4){
            tempid=id-1;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
            tempid=id-5;
            color=getColor(tempid);
            if(color=="white"){
                $("#t"+tempid).css("background-color","black");
            }
            else{ $("#t"+tempid).css("background-color","white"); }
        }

    })
});
