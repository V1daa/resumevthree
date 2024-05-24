//@ts-nocheck
"use client";
import { useEffect, useRef } from "react";
export const Cursor = (className: {className: string}) => {
  const cursRef = useRef();

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
    });
    
    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
      
    });
    
    function animateCircles() {
      
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach(function (circle, index) {
        circle.style.left = x - 6 + "px";
        circle.style.top = y - 6 + "px";
        
        circle.style.scale = (10 - index) / circles.length;
        
        circle.x = x;
        circle.y = y;
    
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.6;
        y += (nextCircle.y - y) * 0.6;
      });
     
      requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
  }, []);

  return (
    <div className={className}>
      <div className="circle" ref={cursRef} />;
      <div className="circle" ref={cursRef} />;
      <div className="circle" ref={cursRef} />;
      <div className="circle" ref={cursRef} />;
      <div className="circle" ref={cursRef} />;
      <div className="circle" ref={cursRef} />;
      <div className="circle" ref={cursRef} />;
    </div>
  );
};
