// @ts-ignore
import { spline } from '@georgedoescode/spline';
import { useEffect } from 'react';
import { createNoise2D } from 'simplex-noise';
import styles from './BlobIcon.module.css';
import cx from '../../lib/classNames';

const map = (n: number, start1: number, end1: number, start2: number, end2: number) => (
  ((n - start1) / (end1 - start1)) * (end2 - start2) + start2
);

const createPoints = () => {
    const points = [];
    const numPoints = 6;
    const angleStep = (Math.PI * 2) / numPoints;
    const rad = 75;
  
    for (let i = 1; i <= numPoints; i++) {
      const theta = i * angleStep;
  
      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;
  
      points.push({
        x: x,
        y: y,
        originX: x,
        originY: y,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }
    
    return points;
};

const BlobIcon = (props: any) => {
    const simplex = createNoise2D();

    useEffect(() => {
        const path = document.querySelector('path');
        const root = document.documentElement;
        const points = createPoints();

        let noiseStep = 0.005;
        let hueNoiseOffset = 0;
        
        (function animate() {
            path!.setAttribute('d', spline(points, 1, true));
            requestAnimationFrame(animate);

            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                const nX = simplex(point.noiseOffsetX, point.noiseOffsetX);
                const nY = simplex(point.noiseOffsetY, point.noiseOffsetY);
                const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
                const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

                point.x = x;
                point.y = y;

                point.noiseOffsetX += noiseStep / 12;
                point.noiseOffsetY += noiseStep / 8;
            }

            hueNoiseOffset += noiseStep / 12;
            const hueNoise = simplex(hueNoiseOffset, hueNoiseOffset);
            const hue = map(hueNoise, -1, 1, 0, 360);

            root.style.setProperty('--startColor', `hsl(${hue}, 100%, 75%)`);
            root.style.setProperty('--stopColor', `hsl(${hue + 60}, 100%, 75%)`);
        })();

    });
    
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
