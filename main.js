var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
colour="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("X="+last_position_of_x+"Y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y coordinates = ");
        console.log("X="+current_position_of_mouse_x+"Y="+current_position_of_mouse_y);
        ctx.lineTo( current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();

    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseleave,my_mouseleave");
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup,my_mouseup");
function my_mouseup(e){
    mouseEvent="mouseup";}

    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }