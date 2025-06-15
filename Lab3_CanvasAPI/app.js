"use strict";

document.addEventListener("DOMContentLoaded", (event) => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "green";
    ctx.fillRect(0, 200, 500, 100);
     
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 500, 200);

    ctx.fillStyle = "red";
    ctx.fillRect(130, 125, 150, 75);

    ctx.fillStyle = "gray";
    ctx.fillRect(180, 200, 20, 25);
    ctx.fillRect(176, 225, 28, 32);
    ctx.fillRect(170, 257, 40, 43 );
    
    ctx.beginPath();
    ctx.arc(300, 55, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();

   
});
