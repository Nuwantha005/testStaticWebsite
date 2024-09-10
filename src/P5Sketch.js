import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Sketch = ({ speed, color }) => {
  const sketchRef = useRef();
  const speedRef = useRef(speed);
  const colorRef = useRef(color);

  useEffect(() => {
    // Update the speed reference when speed prop changes
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    // Update the color reference when color prop changes
    colorRef.current = color;
  }, [color]);

  useEffect(() => {
    const sketch = (p) => {
      let xPos = 0; // Initialize position

      p.setup = () => {
        p.createCanvas(sketchRef.current.offsetWidth, sketchRef.current.offsetHeight);
      };

      p.windowResized = () => {
        // Resize the canvas when the window size changes
        p.resizeCanvas(sketchRef.current.offsetWidth, sketchRef.current.offsetHeight);
      };

      p.draw = () => {
        p.background(243,244,246);
        p.fill(colorRef.current);
        p.ellipse(xPos, p.height / 2, speedRef.current * 10, speedRef.current * 10);

        // Move the ellipse, looping it across the canvas
        xPos += 2;
        if (xPos > p.width) {
          xPos = 0;
        }
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove(); // Clean up on component unmount
    };
  }, []);

  return <div ref={sketchRef} className="p5-container w-full h-full" />;
};

export default P5Sketch;
