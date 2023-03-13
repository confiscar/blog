import { useEffect } from 'react';
import styles from './BlobIcon.module.css';
// @ts-ignore
import { spline } from '@georgedoescode/spline';
import { createNoise2D } from 'simplex-noise';
import cx from '../../lib/classNames';


function map(n: number, start1: number, end1: number, start2: number, end2: number) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

const createPoints = () => {
    const points = [];
    // how many points do we need
    const numPoints = 6;
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = 75;
  
    for (let i = 1; i <= numPoints; i++) {
      // x & y coordinates of the current point
      const theta = i * angleStep;
  
      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;
  
      // store the point
      points.push({
        x: x,
        y: y,
        /* we need to keep a reference to the point's original {x, y} coordinates 
        for when we modulate the values later */
        originX: x,
        originY: y,
        // more on this in a moment!
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }
    
    return points;
};

const BlobIcon = (props: any) => {
    useEffect(() => {
        // our <path> element
        const path = document.querySelector('path');
        // used to set our custom property values
        const root = document.documentElement;
        
        const points = createPoints();
        
        const simplex = createNoise2D();

        // how fast we progress through "time"
        let noiseStep = 0.005;

        function noise(x: number, y: number) {
          // return a value at {x point in time} {y point in time}
          return simplex(x, y);
        }
        
        let hueNoiseOffset = 0;
        
        (function animate() {
            // generate a smooth continuous curve based on points, using Bezier curves. spline() will return an SVG path-data string. The arguments are (points, tension, close). Play with tension and check out the effect!
            path!.setAttribute('d', spline(points, 1, true));
          
            requestAnimationFrame(animate);
            // for every point...
            for (let i = 0; i < points.length; i++) {
                const point = points[i];

                // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
                const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
                const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
                // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
                const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
                const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

                // update the point's current coordinates
                point.x = x;
                point.y = y;

                // progress the point's x, y values through "time"
                point.noiseOffsetX += noiseStep / 12;
                point.noiseOffsetY += noiseStep / 8;
            }
            hueNoiseOffset += noiseStep / 12;
            const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
            const hue = map(hueNoise, -1, 1, 0, 360);

            root.style.setProperty('--startColor', `hsl(${hue}, 100%, 75%)`);
            root.style.setProperty('--stopColor', `hsl(${hue + 60}, 100%, 75%)`);
            // document.body.style.background = `hsl(${hue + 60}, 75%, 5%)`;
        })();;

    }, []);
    
    return (
        <svg className={cx(styles.blob, props.className ?? '')} viewBox="0 0 200 200">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop id="gradientStop1" offset="0%" stopColor="var(--startColor)" />
              <stop id="gradientStop2 " offset="100%" stopColor="var(--stopColor)" />
            </linearGradient>
          </defs>
          <path d="" fill="url('#gradient')"></path>
        </svg>
    );
};

export default BlobIcon;
