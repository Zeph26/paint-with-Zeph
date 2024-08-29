canvas=document.getElementById("mycanvas");
can= canvas.getContext("2d");
color="black"

var mouseEvent = "empty"
var last_position_of_x , last_position_of_y
var line_width = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value
    mouseEvent="mouseDown";
    
}

canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e){
    current_position_of_mouse_x = e.pageX - canvas.offsetLeft;
    current_position_of_mouse_y = e.pageY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        can.beginPath()
        can.strokeStyle=color
        can.lineWidth = line_width;  
        can.moveTo(last_position_of_x, last_position_of_y)
        can.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        can.stroke()
        
    }

    last_position_of_x= current_position_of_mouse_x
    last_position_of_y= current_position_of_mouse_y
    
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e){
    mouseEvent="mouseUp"
    
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e) {
    mouseEvent="mouseLeave"
}


function ol() {
    // blue
    can.beginPath()
    can.lineWidth =10;
    can.strokeStyle="blue";
    can.arc(300,200,60,0, 2*Math.PI);
    can.stroke();

    //black
    can.beginPath()
    can.lineWidth =10;
    can.strokeStyle="black"
    can.arc(440,200,60,0, 2*Math.PI);
    can.stroke();


    //red
    can.beginPath()
    can.lineWidth =10;
    can.strokeStyle="red";
    can.arc(580,200,60,0 ,2*Math.PI);
    can.stroke();

    //yellow
    can.beginPath()
    can.lineWidth =10;
    can.strokeStyle="yellow";
    can.arc(370,265,60,0, 2*Math.PI)
    can.stroke();


    //green
    can.beginPath()
    can.lineWidth =10;
    can.strokeStyle="green";
    can.arc(510,265,60,0, 2*Math.PI)
    can.stroke();
}

function tr(){
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value
    can.beginPath();
    can.lineWidth =line_width;
    can.strokeStyle = color;
    var X = 300;
    var Y= 300;
    var height = 100 * (Math.sqrt(3)/2);
    can.moveTo(X, Y);
    can.lineTo(X+50, Y+height);
    can.lineTo(X-50, Y+height);
    can.lineTo(X, Y);
    can.stroke()
    
}


function sq(){
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value
    can.beginPath();
    can.lineWidth =line_width;
    can.strokeStyle = color;
    can.strokeRect(300,300,100,100);
}

function ca(){
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value;
    can.lineWidth =line_width;
    can.strokeStyle = color;
    can.clearRect(0,0,can.canvas.width,can.canvas.height)
    document.getElementById("color").value="";
    document.getElementById("width").value=""
}


