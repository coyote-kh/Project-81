canvas =document.getElementById("myCanvas");

ctx =canvas.getContext("2d");
color ="purple";


ctx.beginpath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(400,400,50,0,2*Math.PI);
ctx.stroke();


canvas.addeventlistener("mousedown" my_mousedown);
function my_mousedown(){
    mouse_x=e.clientx-canvas.offsetLeft;
    mouse_y=e.clienty-canvas.offsetTop;
    circle(mouse_x mouse_y);
}

function circle(mouse_x,mouse_y){
ctx.beginpath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}