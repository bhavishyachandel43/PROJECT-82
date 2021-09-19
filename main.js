var mouseevent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
Widthofline=2;
canvas.addEventListener("mousedown",md);
function md(e){
    color=document.getElementById("color").value;
Widthofline=document.getElementById("width").value;
mouseevent="mousedown";



}
canvas.addEventListener("mousemove",mm);
function mm(e){
currentx=e.clientX-canvas.offsetLeft;
 currenty=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
    ctx.beginPath();
     ctx.strokeStyle=color;
      ctx.lineWidth=Widthofline;
       
     ctx.arc(currentx,currenty,20,0,2*Math.PI);
      ctx.stroke();
    
}
lastx=currentx;
lasty=currenty;
}
canvas.addEventListener("mouseup",mu);
function mu(e){
mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",ml);
function ml(e){
    mouseevent="mouseeleave";
}
function clearArea() {
 ctx.clearRect(0, 0,canvas.width,canvas.height); }